'use client';

import React from 'react';
import axios from 'axios';

function Buttons({props, setStats}) {

  async function click(e) {
    const ind = [1, 2, 3];
    ind.map(async (el) => {
      await props.map(async (el) => el[1] === e.id ? await axios.post('/api/getTicker', { main: `${el[0]}`}) : null);
      await axios.get('/api/getTicker').then((res) => setStats({ data: res.data }));
    })
    console.log(e.id);
  };

  return (
    <section className="grid row">
    <section className="flex w-80 h-10 border border-solid ps-2 border-sky-300">
      <section className="w-40 align-items-center pt-2">Тикер</section>
      <section className="w-40 align-items-center pt-2">ИД</section>
    </section>
    <div className="border border-solid border-sky-300 w-80 h-140 overflow-auto" style={{background: "#f7fcfc"}}>
        {props.map((el) => <button onClick={async (e) => await click(e.target)} 
          className="btn w-full text-start select-none cursor-pointer btn hover:bg-sky-200 ps-2 p-2 hover:text-sky-500 focus:bg-sky-100 focus:text-red-600" key={el[1]}>
            <section className="flex">
              <section id={`${el[1]}`} className="w-40">{el[0]}</section>
              <section id={`${el[1]}`} className="w-40">{el[1]}</section>
            </section>
          </button>)}
    </div>
    </section>
  )
}

export default Buttons;