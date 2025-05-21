import { getTickers, date } from '@/lib/getData';
import axios from 'axios';

export async function getTablesFromYears(tick) { 
    const dateS = date();
    const objectJson = {};
    const json = Object.keys(dateS).flatMap(async (str) => await axios.get(`https://iss.moex.com/iss/history/engines/futures/markets/forts/securities/CNYRUBF.json?${dateS[str]}`)
            .then((response) => response.data.history.data.map((el) => objectJson[el[1]] = el)))
    await Promise.all(json);
    await axios.post('/api/data', objectJson).then(async () => await axios.get('/api/data').then((log) => console.log(log)))
    return objectJson;
}

export async function getUsers() {
   
  return await axios.get('/api/checkUser').then((data) => data);
}