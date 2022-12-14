import Head from 'next/head'
import Image from 'next/image'
import GalleryList from '../components/Gallery/GalleryList'
import { useStore } from '../utils/store/StoreProvider'
import supabase from '../utils/supabase'


export async function getStaticProps() {
  const projects = await supabase.from("projects").select("*");
  return {
    props: {projects:projects.data}, // will be passed to the page component as props
  }
}




export default function Home(props) {
 
 
  return (
    <div>
      <GalleryList array={props.projects}/>
    </div>
  )
}
