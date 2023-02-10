import React from 'react'
import Head from 'next/head'
import GalleryList from '../../components/Gallery/GalleryList'
import supabase from '../../utils/supabase'


export async function getStaticProps() {
  const projects = await supabase.from("projects").select("*");
  console.log(projects)
  return {
    props: {projects:projects.data}, // will be passed to the page component as props
    
  }
}




export default function Portfolio(props) {
 console.log(props.projects)
 
  return (
    <>
    <Head>
      <title>Portfolio | Graphic Designer | Illustrator | Eddie Lopez | Fresno CA</title>
    </Head>
    <div>
      <GalleryList array={props.projects}/>
    </div>
    </>
  )
}