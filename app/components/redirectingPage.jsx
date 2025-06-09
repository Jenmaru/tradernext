'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Main from './main';
import Login from './loginPage';
import NotPaid from './access';

const Page = ({tickers, session}) => {
    const [ user, setUser ] = useState('');
    const [ page, setPage ] = useState(<Main props={tickers} />)

    function loading() {
        session?.user ? setTimeout(() => {setPage( <Main props={tickers} />)}, 3000) : setPage(<Main props={tickers} />)
    }

    useEffect(() => {
        axios.get('/api/checkUser').then((data) => setUser(data.data.user));
        // loading();
    }, [session]);

    return (
        <>
           { session?.user ? user === session.user.name ? <Main props={tickers} /> : <Main props={tickers} /> : <Main props={tickers} /> } 
        </>
    )
}

export default Page;