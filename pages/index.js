import HomePage from "../container/HomePage";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Anjankesaha Enterprises</title>
        <meta name="title" content="Anjankesaha Enterprises " />
        <meta
          name="description"
          content="Anjankesaha Enterprises is a freelance team of industry experts  providing digital solutions like Web Development,App Development and Branding."
        />
        <meta
          name="keywords"
          content="Anjankesaha Enterprises, Anjankesaha Enterprises,Anjankesaha Enterprises.com,web development,kerala,kollam,trivandrum,india,freelance,freelance developers,best developer Anjankesaha Enterprises,Anjankesaha Enterprises freelance team,Anjankesaha Enterprises web developers,Anjankesaha Enterprises,Anjankesaha Enterprises,WEB DEVELOPMENT,Anjankesaha Enterprises,intelpic"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="copyright"
          content="Anjankesaha Enterprises . © Copyright 2022, All Rights Reserved."
        ></meta>
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Anjankesaha Enterprises Junaid S" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Anjankesaha Enterprises" />
        <meta
          property="og:description"
          content="Anjankesaha Enterprises is a freelance team of industry experts  providing digital solutions like Web Development,App Development and Branding."
        />
        <meta property="og:image" content="/images/banner.jpeg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Anjankesaha Enterprises" />
        <meta
          property="twitter:description"
          content="Anjankesaha Enterprises is a freelance team of industry experts  providing digital solutions like Web Development,App Development and Branding."
        />
        <meta property="twitter:image" content="/images/banner.jpeg"></meta>

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
<meta name="msapplication-TileColor" content="#da532c"/>
<meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <HomePage />
    </>
  );
}
