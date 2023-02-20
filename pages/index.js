import Head from 'next/head'
import Image from 'next/image'
import GalleryList from '../components/Gallery/GalleryList'
import { useStore } from '../utils/store/StoreProvider'
import supabase from '../utils/supabase'
import MetaTags from '../components/MetaTags'


export async function getStaticProps() {
  const projects = await supabase.from("projects").select("*").order('created_at',{ ascending: false });
  return {
    props: {projects:projects.data}, // will be passed to the page component as props
  }
}




export default function Home(props) {
 
 
  return (<>
    
    <MetaTags
    title='Graphic Designer | Illustrator | Eddie Lopez | Fresno CA'
    site_name='EddieLopezDesigner'
    url='https://www.lopezed.com/'
    description={'Portfolio of Central California based freelance graphic designer specializing in all areas of logo design, web design, print graphics. '}
    keywords={'graphic design, design, logo design, branding, central California, Fresno, portfolio, print'}/> 
    
    <div>
      <GalleryList array={props.projects}/>
    </div>
    </>
  )
}
