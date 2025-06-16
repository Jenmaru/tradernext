'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Sot({ props }) {
    const [ futoi, setFutoi ] = useState([]);
    const grid = [ 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0 ];
    console.log(futoi);
    
    useEffect(() => {
        const ind = [0, 1];
        ind.map((el) => {
            axios.get('api/posYur').then((res) => {
            axios.post('api/handler', { url: `${res.data.main}` })
            axios.get('api/handler').then((response) => {
                const sf = response.data.text !== undefined ? response.data.text.reverse().map((el) => Object.values(el)[0]) : [0];
                setFutoi(sf);
            })
        });
        });
    }, [props]);

    return (
        <section className="flex w-full h-100 content items-center relative">
            <section className="flex w-full border border-solid bg-grey-300 border-gray-400 h-100 grid grid-cols-1 ml-6 z-0 absolute">
                {grid.map((el, i) => {
                    if (i < 10) {
                        return <section className="border-t-1 w-full border-gray-200"></section>
                    }
                    })}
            </section>
            <section className="flex bg-grey-300 h-110 grid grid-cols-1 text-xs items-center text-end z-0 absolute">
                {grid.map((el) => <section className="">{el}</section>)}
            </section>  
            <section className="absolute z-1 bg-white-100 h-100 grid grid-flow-col ml-6 overflow-auto w-full content items-end">
                {futoi.map((el) => <section className="bg-red-700 w-5 border" style={{ height: `${el}%` }}></section>)}
            </section>
        </section>
    )
}