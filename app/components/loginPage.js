"use client";

import React from 'react';
import { login } from '@/lib/actions/auth';

export default function Login() {
    
    return (
    <div className="container-fluid flex grid text-center content justify-center items-center">
        <h1 className="text-6xl p-5">Russian Trader Analytics</h1>
        <button className="ms-60 border border-solid rounded bg-blue-300 w-50 h-10 cursor-pointer btn" onClick={() => login("github")}>
            Login
        </button>
    </div>
    )
}