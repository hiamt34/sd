/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-title-in-document-head */
import Footer from '@/components/footer'
import Header from '@/components/head'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

const Document = () => {


    return (
        <Html>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <link rel="icon" sizes="16x16" href="favicon.ico" />
                <base href="/" />
                <title>Layouts Example</title>
                <link rel="icon" href="images/icon-black.png" type="image/gif" sizes="16x16" />
                <meta content="text/html;charset=utf-8" http-equiv="Content-Type" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                <meta content="Scarlet design" name="description" />
                <meta content="" name="keywords" />
                <meta content="" name="author" />

                <link id="bootstrap" href="css/bootstrap.min.css" rel="stylesheet" type="text/css" />
                <link href="css/plugins.css" rel="stylesheet" type="text/css" />
                <link href="css/style.css" rel="stylesheet" type="text/css" />
                <link href="css/de-retro.css" rel="stylesheet" type="text/css" />
                <link id="colors" href="css/colors/scheme-05.css" rel="stylesheet" type="text/css" />
                <link href="css/coloring.css" rel="stylesheet" type="text/css" />
            </Head>
            <body className="de-retro">
                <Main />

                <NextScript />
                <Script strategy="afterInteractive" src="js/plugins.js"></Script>
                {/* <Script strategy="afterInteractive" src="js/designesia.js"></Script> */}
            </body>
        </Html >
    )
}

export default Document