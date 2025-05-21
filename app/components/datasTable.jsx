'use client';

import React from 'react';
import CustomAxis from './charts';

export default function Table({stats}) {

    return (
        <section className="flex border border-solid border-sky-300 w-full h-150 overflow-x-auto overflow-y-hidden">
            <CustomAxis stats={stats} />
        </section>
    )
}