'use client';

import React, { useState, useEffect } from 'react';
import Buttons from './buttons';
import Table from './datasTable';

export default function Main({props}) {
    const [stats, setStats] = useState({ data: 'CNYRUBF'});

    return (
        <main className="flex gap-[32px] row-start-2 items-center sm:items-start w-full">
            <Buttons props={props} setStats={setStats}/>
            <Table stats={stats}/>
        </main>
    )
} 