import fsPromises from 'fs/promises';
import path from 'path';

async function getAllowUser() {

  const filePath = path.join(process.cwd(), 'lib/allowedUser.json');
  
  const jsonData = await fsPromises.readFile(filePath);
  
  const objectData = JSON.parse(jsonData);

  return objectData;
}

async function postAllowUser(postData) {

  const filePath = path.join(process.cwd(), 'lib/allowedUser.json');
  
  const jsonData = await fsPromises.appendFile(filePath, postData);
  
  const objectData = JSON.parse(jsonData);

  return objectData;
}

export async function GET() {
  try {
    const response = await getAllowUser();

    return Response.json(response);
  } catch (error) {
    return new Response('Ошибка при получении данных', { status: error.response?.status || 500 });
  }
}

export async function POST(request, response) {
    try {
        const data = await request.json();
        await postAllowUser(data);
        return Response.json(data);
    } catch (error) {
        return new Response('Ошибка при записи данных', { status: error.response?.status || 500 });
    }
}