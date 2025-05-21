'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Main from './main';
import Login from './loginPage';
import NotPaid from './access';
import Spinner from './loading';
import { ChakraProvider } from '@chakra-ui/react';

const Page = ({tickers, session}) => {
    const [ user, setUser ] = useState('');

    function loading() {

    }

    useEffect(() => {
        axios.get('/api/checkUser').then((data) => setUser(data.data.user));
    }, [session]);

    return (
        <>
           { session?.user ? user === session.user.name ? <Spinner /> : <NotPaid /> : <Login /> } 
        </>
    )
}

export default Page;