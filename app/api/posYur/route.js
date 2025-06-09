const shortName = { name: 'CNYRUBFTOM' };

export async function GET() {
  try {
    const response = shortName;

    return Response.json(response);
  } catch (error) {
    return new Response('Ошибка при получении данных', { status: error.response?.status || 500 });
  }
}