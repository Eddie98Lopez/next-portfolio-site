import Head from 'next/head'
import Image from 'next/image'
import GalleryList from '../components/Gallery/GalleryList'
import { useStore } from '../utils/store/StoreProvider'
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ldrjmzbrinwdylthbzry.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);


export async function getStaticProps() {
  const projects = await supabase.from("projects").select("*");
  return {
    props: {projects:projects.data}, // will be passed to the page component as props
  }
}




export default function Home(props) {
 
/*   const {projects,load} = useStore().store
  console.log(projects) */
 
  return (
    <div>
      <GalleryList array={props.projects}/>
  

    </div>
  )
}
