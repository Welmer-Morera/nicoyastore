import React,{Fragment} from 'react'
import Header from './Header';
import { Global, css } from '@emotion/react';
import Head from 'next/head'

const Layout = props => {
    return (

        <Fragment>
            <Global
                styles={css`
                    :root {
                        --cafe: #806566;
                        --rosa: #fbd8cb;
                        --cafe2: #675a2b;
                        --verde: #4c6424;
                    }
                    html {
                        font-size: 62.5%;
                        box-sizing: border-box;
                    }
                    *, *:before, *:after {
                        box-sizing: inherit;
                    }
                    body {
                        font-size: 1.8rem; 
                        line-height: 1.5;
                        font-family: 'Inconsolata', sans-serif;
                        font-weight: bold;
                        background-color:#D8E8FD ;
                    }
                    h1, h2, h3 {
                        margin: 0 0 2rem 0;
                        line-height: 1.5;
                    }
                    h1, h2 {
                        font-family: 'Bebas Neue', cursive;
                        font-weight: 700;
                    }
                    h3 {
                        font-family: 'Inconsolata', sans-serif;
                    }
                    ul {
                        list-style: none;
                        margin: 0;
                        padding:0;
                    }
                    a {
                        text-decoration: none;
                    }
                    img {
                        max-width: 100%;
                    }
                `}
            />

            <Head>
                <html lang="es" />
                <title>Nicoya Store</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inconsolata:wght@300&display=swap" rel="stylesheet" />
                <link href="/static/css/app.css" rel="stylesheet"/>
            </Head>
            <Header />
            <main>
                {props.children}
            </main>

        </Fragment>

    );
}

export default Layout