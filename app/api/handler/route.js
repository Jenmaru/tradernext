const responsed = {};

export async function POST(req, res) {

  const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJaVHA2Tjg1ekE4YTBFVDZ5SFBTajJ2V0ZldzNOc2xiSVR2bnVaYWlSNS1NIn0.eyJleHAiOjE3NTE2NDM2MjIsImlhdCI6MTc0OTA1MTYyMiwiYXV0aF90aW1lIjoxNzQ5MDQ5Mjg3LCJqdGkiOiI3NTFhYjljMi0yN2ZhLTQxM2QtODRiZC1kZjFlZWU5M2U0MmEiLCJpc3MiOiJodHRwczovL3NzbzIubW9leC5jb20vYXV0aC9yZWFsbXMvY3JhbWwiLCJhdWQiOlsiYWNjb3VudCIsImlzcyJdLCJzdWIiOiJmOjBiYTZhOGYwLWMzOGEtNDlkNi1iYTBlLTg1NmYxZmU0YmY3ZToxYzYxNzZkZi1mMjUyLTQ3NDItOWQ0NS1lYmI2MjAzODlkMzgiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJpc3MiLCJzaWQiOiIxNjYxNmNkNi03YTlhLTQ2N2MtYjI0Mi1jNTNjYzM4YTI3YWIiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbIi8qIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIGlzc19hbGdvcGFjayBwcm9maWxlIG9mZmxpbmVfYWNjZXNzIGVtYWlsIGJhY2t3YXJkc19jb21wYXRpYmxlIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJpc3NfcGVybWlzc2lvbnMiOiIxMzcsIDEzOCwgMTM5LCAxNDAsIDE2NSwgMTY2LCAxNjcsIDE2OCwgMzI5LCA0MjEiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiIxYzYxNzZkZi1mMjUyLTQ3NDItOWQ0NS1lYmI2MjAzODlkMzgiLCJzZXNzaW9uX3N0YXRlIjoiMTY2MTZjZDYtN2E5YS00NjdjLWIyNDItYzUzY2MzOGEyN2FiIn0.Zp1sXGoh-LTZ9Hw9P1zHGNFYFvO54f9efsKp0nyRIFtuIuDplVoi-hYtbPkrHtzheBLiRQCkxgxspF74kkECeWz6jReRq4L_iVHkz_XuqQoOKqiOf_ljEXGIHciZG0eWEc-S8UPXzBZ_J9iu3XjH_hpFWIemik4A9wpRq4PmWsRFcJ7UKRugFAROaYm1EC5W_9PE48hFTBhhCRmGK_FG5pE1FhKhmqtVa4ebZzfBwJbEGqSNaAUhJUMISjWqy8suS5MVBjO8GpvmoxbKO9zSY0Rk3343X7D-R_x63_8DgmU3HpWBN4l0taaHwj_bft2AD_KngyL_JNFBTBGHPfMa_g");

    const formdata = new FormData();

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
    };

  try {
    const url = await req.json();
    const response = await fetch("https://apim.moex.com/iss/analyticalproducts/futoi/securities/cnyrubf.json?dates=2022-12-30", requestOptions)
    const result = await response.text();
    responsed.text = result;
    return Response.json(result);
  } catch (error) {
    return new Response('Ошибка при записи данных', { status: error.response?.status || 500 });
  }
}

export async function GET() {
  try {
  return Response.json(responsed);
  } catch (error) {
	return new Response('Ошибка при получении данных', { status: error.response?.status || 500 });
  }
}