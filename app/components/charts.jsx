'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CandlestickChart from "react-candlestick-chart";

function App({stats}) {
  const [ series, setSeries ] = useState([]);
 
  async function getTablesFromYears(tick) { 
    const dateS = await axios.get('/api/time');
    const objectJson = {};
    async function getJson(ticks, dates){
      const curr = await axios.get(`https://iss.moex.com/iss/history/engines/futures/markets/forts/securities/${ticks}.json?${dates}`);
      return curr.data.history.data === undefined ? getJson(ticks, dates) : curr;
    }
    const json = Object.keys(dateS.data).flatMap(async (str) => await getJson(tick.data, dateS.data[str])
            .then((response) => response.data.history.data.map((el) => objectJson[el[1]] = el)))
    await Promise.all(json);
    await axios.post('/api/data', { main: objectJson });
  }
  
  useEffect(() => {
    const ind = [1, 2, 3];
    ind.map((el) => {
      getTablesFromYears(stats).then(() => 
        axios.get('api/data')
      .then((res) => {
        const curr = res.data !== undefined ? Object.keys(res.data.main).sort().map((el) => {
          return { date: `${el} 18:00`, open: res.data.main[el][3], 
                  high: res.data.main[el][5], 
                  low: res.data.main[el][4], 
                  close: res.data.main[el][6] }
        }) : [{ date: "2018-10-23", open: 0, high: 0, low: 0, close: 0 }];
        const newCurr = [];
        curr.map((el) => el.open !== null ? newCurr.push(el) : null);
        setSeries(newCurr);
      }))
    })
  }, [stats]);
  
  return (
    <CandlestickChart
      data={series}
      id={"chart1"}
      width={1454}
      height={600}
      decimal={2}
      scrollZoom={{
        enable: true,
        max: 20,
      }}
      rangeSelector={{
        enable: true,
        height: 150,
        initialRange: { type: "month", value: 10 },
      }}
      ColorPalette={{
        background:"#f7fcfc",
        resetButtonColor:"#e81109",
        grid:"#73e7f0",
        tick:"#0c0d0d",
        selectorLine:"rgb(12, 13, 14)",
        selectorLabelBackground:"#2a2e39",
        selectorLabelText:"#b2b5be",
        greenCandle:"#e13443",
        redCandle:"#089981",
      }}
    />
  );
}

export default App;
