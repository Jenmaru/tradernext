import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Sot() {
    const grid = [ 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];
    
    useEffect(() => {
        axios.get('api/posYur').then( async () => {
            await axios.post('api/handler', { url: "https://apim.moex.com/iss/analyticalproducts/futoi/securities/si.json?from=2020-01-03&till=2025-06-06" })
            const response = await axios.get('api/handler');
            console.log(JSON.parse(response.data.text));
        })
    })

    return (
        <section className="flex w-full overflow-x-auto h-80 content items-center">
            <section className="flex bg-grey-300 h-60 grid grid-cols-1 text-xs items-center text-end">
                {grid.map((el) => <section className="">{el}</section>)}
            </section>  
            <section className="flex w-full border border-solid bg-grey-300 border-gray-400 h-56 grid grid-cols-1 ml-1">
                {grid.map((el, i) => {
                    if (i < 10) {
                        return <section className="border-t-1 w-full border-gray-200"></section>
                    }
                    })}
            </section>
        </section>
    )
}