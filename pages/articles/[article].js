import React from 'react';
import {useRouter} from "next/router";
import Link from "next/link";
import Head from "next/head";

export default function Article(){
    const router = useRouter();
    console.log(router);
    return(
        <>
        <Head>
            <title>Article - {router.query.article} </title>
        </Head>
        <h1>Estamos en: {router.query.article}</h1>
        {/* <a href='/contact'>Contact</a><br></br> */}
        <Link href="/contact">
        <a>Contact</a>
        </Link>
        </>
    )
}