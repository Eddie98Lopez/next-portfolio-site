import Head from 'next/head'
import Image from 'next/image'
import GalleryList from '../components/Gallery/GalleryList'
import { useStore } from '../utils/store/StoreProvider'
import supabase from '../utils/supabase'
import MetaTags from '../components/MetaTags'
import { motion } from "motion/react"
import FeaturedList from '../components/FeaturedProjectSwiper/FeaturedList'
import HomeHeroWrapper from '../components/HomeHero/HomeHero'
import Typewrite from '../components/TextChange'
import styled from 'styled-components'
import Section from '../components/Section'
import ContactForm from '../components/Forms/ContactForm'
import ModalProvider from '../components/Modal/ModalProvider'
import Heading from '../components/Heading'

const StyledH1 = styled.h1`
font-size:2rem;
@media only screen and (max-width:768px){
text-align:center;
& .subheading{
font-size: clamp(1rem, calc(100vw * 160 / 768), 2rem);}

}

@media only screen and (max-width:425px){
text-align:center;
& .subheading{
font-size: 1.15rem;}

}
`



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


            <StyledH1>

              <p className='subheading'>Hello world. I am a UX/UI</p>
              <p><Typewrite/></p>
             

            </StyledH1>

          </motion.div>
        </div>

        <div className='b'>Image</div>
      </HomeHeroWrapper>

      <Section>
     
      <Heading string="Featured Projects"/>
      <FeaturedList />
      </Section>

      <Section>
        <ModalProvider>
          <Heading string="Contact Me"/>
          <div style={{maxWidth:1200,justifySelf:'center', width:'100%',}}>
        <ContactForm/>
        </div>
        </ModalProvider>
      </Section>
    </>
  </>
  )
}
