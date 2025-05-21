'use client';

import { logout } from '@/lib/actions/auth';
import { Example } from './dropdown';

export default function Head({log}) {
  
    return (
    <nav className="w-full bg-green-400">
      <div className="flex w-full h-10 border border-b-solid border-b-green-700 shadow-xl content justify-between items-center">
        <section className="ps-4">{log?.user ? <section className="flex container">
          <button className="border border-solid border-orange-500 rounded-lg border-solid bg-orange-400 w-8 h-8 content justify-center items-center cursor-pointer btn hover:bg-orange-800">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
              </svg>
          </button>
            <h1 className="ms-2 mt-1">{log.user.name}</h1></section> : "You are not logged in ASSHOLE"}</section>
        <section className="pe-4">{log?.user ? <button onClick={() => logout()}>Выход</button> : "" }</section>
      </div>
    </nav>
    )
}