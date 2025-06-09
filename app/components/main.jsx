'use client';

import React, { useState, useEffect } from 'react';
import Buttons from './buttons';
import Table from './datasTable';
import Sot from './sot.jsx';

export default function Main({props}) {
    const [stats, setStats] = useState({ data: 'CNYRUBF'});

    return (
        <main className="flex grid grid-cols-1 gap-[32px] items-center sm:items-start w-full">
            <section className="flex gap-[32px] items-center sm:items-start w-full">
                <Buttons props={props} setStats={setStats}/>
                <Table stats={stats}/>
            </section>
            <Sot />
        </main>
    )
} 