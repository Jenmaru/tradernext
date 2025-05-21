export default function series(stock) {

    return [
    {
      type: 'bar',
      yAxisId: 'volume',
      label: 'Volume',
      color: 'lightgray',
      data: stock.map((day) => day.volume),
      highlightScope: { highlight: 'item' },
    },
    {
      type: 'line',
      yAxisId: 'price',
      color: 'red',
      label: 'open',
      data: stock.map((day) => day.open),
      highlightScope: { highlight: 'item' },
    },
    {
      type: 'line',
      yAxisId: 'price',
      color: 'green',
      label: 'close',
      data: stock.map((day) => day.close),
    },
  ];
}

