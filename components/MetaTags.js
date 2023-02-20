import React from 'react'
import Head from 'next/head'

const MetaTags = (props) => {
  const {title, description,keywords, url,img,site_name,type} = props
  return (
    <Head>
      <title> {title}</title>
    <meta property="og:title" content={title}/>
    <meta property="title" content={title}/>
    <meta property="og:site_name" content={site_name}/>
    <meta property="site_name" content={site_name}/>
    <meta property="og:url" content={url}/>
    <link rel="canonical" href={url}></link>
    <meta http-equiv="etag" content="bug"/>
    <meta property="og:type" content={type || 'website'}/>
    <meta name="twitter:description" content={description}/>
    <meta name="description" content={description}/>
    <meta name="keywords" content={keywords}/>
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"></link>
    <meta property="og:image" content={img}/>
    <meta property="og:description" content={description}/>
    <meta name="twitter:image" content={img}/>
    <meta name="twitter:title" content={title}></meta>
    <meta name="author" content="Eduardo Lopez"></meta>
    <meta name='googlebot' content='all'/>
    <meta name='robots' content='all'/>
    </Head>
  )
}

export default MetaTags