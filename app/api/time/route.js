export function date() {
    const notSliced = new Date();
    const year = notSliced.getFullYear();
    const day = String(notSliced.getDate()).length < 2 ? `0${notSliced.getDate()}` : notSliced.getDate();
    const month = String(notSliced.getMonth()).length < 2 ? `0${notSliced.getMonth() + 1}` : notSliced.getMonth() + 1;
    return {
      1: "from=2022-01-01&till=2022-03-31&marketprice_board=1",
      2: "from=2022-04-01&till=2022-06-30&marketprice_board=1",
      3: "from=2022-07-01&till=2022-09-30&marketprice_board=1",
      4: "from=2022-10-01&till=2022-12-31&marketprice_board=1",
      5: "from=2023-01-01&till=2023-03-31&marketprice_board=1",
      6: "from=2023-04-01&till=2023-06-30&marketprice_board=1",
      7: "from=2023-07-01&till=2023-09-30&marketprice_board=1",
      8: "from=2023-10-01&till=2023-12-31&marketprice_board=1",
      9: "from=2024-01-01&till=2024-03-31&marketprice_board=1",
      10: "from=2024-04-01&till=2024-06-30&marketprice_board=1",
      11: "from=2024-07-01&till=2024-09-30&marketprice_board=1",
      12: "from=2024-10-01&till=2024-12-31&marketprice_board=1",
      13: "from=2025-01-01&till=2025-03-31&marketprice_board=1",
      14: `from=2025-04-01&till=${year}-${month}-${day}&marketprice_board=1`
      }
  }

export async function GET() {
  try {
	const response = date();

	return Response.json(response);
  } catch (error) {
	return new Response('Ошибка при получении данных', { status: error.response?.status || 500 });
  }
}
