import Head from "next/head";
import PropTypes from "prop-types";
import { useRouter } from "next/router";


const SEO = ({ pageTitle, metaText, metaContent }) => {
    const { asPath } = useRouter();
    const origin = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : '';

    const URL = `${process.env.NEXT_PUBLIC_SITE_URL}${asPath}`;
    console.log("aaaaaaa,,,,---------------------------------------",URL);

    return (
    <Head>  
        <title>{pageTitle || "Vmeals"}</title>  
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content={metaText || "Vmeals"} />
        <meta name="robots" content={metaContent || "all"} />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="facebook-domain-verification" content="waja1etzkr2r5iibis67qxzz9kz27i" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="canonical" href={URL}></link>
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' rel='stylesheet' />

    </Head>
    
)};

SEO.propTypes = {
    pageTitle: PropTypes.string.isRequired,
};

export default SEO;
