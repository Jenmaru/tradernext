const responsed = { main: {} };

export async function GET() {
  try {
	const response = responsed;

	return Response.json(response);
  } catch (error) {
	return new Response('Ошибка при получении данных', { status: error.response?.status || 500 });
  }
}

export async function POST(request, response) {
    try {
        const data = await request.json();
        responsed.main = data.main;
        return Response.json(responsed);
    } catch (error) {
        return new Response('Ошибка при записи данных', { status: error.response?.status || 500 });
    }
}