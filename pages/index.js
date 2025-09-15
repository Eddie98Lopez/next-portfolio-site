import Head from 'next/head'
import Image from 'next/image'
import GalleryList from '../components/Gallery/GalleryList'
import { useStore } from '../utils/store/StoreProvider'
import supabase from '../utils/supabase'
import MetaTags from '../components/MetaTags'
import Typewriter from '../components/Typewriter'
import { motion } from "motion/react"
import FeaturedList from '../components/FeaturedProjectSwiper/FeaturedList'
import HomeHeroWrapper from '../components/HomeHero/HomeHero'


export async function getStaticProps() {
  const projects = await supabase.from("projects").select("*").order('created_at', { ascending: false });
  return {
    props: { projects: projects.data }, // will be passed to the page component as props
  }
}




export default function Home(props) {


  return (<>

    <MetaTags
      title='Graphic Designer | Illustrator | Eddie Lopez | Fresno CA'
      site_name='EddieLopezDesigner'
      url='https://www.lopezed.com/'
      description={'Portfolio of Central California based freelance graphic designer specializing in all areas of logo design, web design, print graphics. '}
      keywords={'graphic design, design, logo design, branding, central California, Fresno, portfolio, print'} />

    <>
      <HomeHeroWrapper>
        <div className='a'>
          <motion.div


            transition={{
              duration: 1,


            }}

            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}>


            <h1>

              <p className='subheading' style={{ fontSize: "2rem" }}>Hello world. I am a UX/UI</p>
              <p className='display-type' style={{ fontSize: "12rem" }}><Typewriter speed={120}>Designer</Typewriter></p>

            </h1>

          </motion.div>
        </div>

        <div className='b'>Image</div>
      </HomeHeroWrapper>
      <FeaturedList />
    </>
  </>
  )
}
