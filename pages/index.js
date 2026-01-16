import supabase from '../utils/supabase';
import MetaTags from '../components/MetaTags';
import { motion } from 'motion/react';
import FeaturedList from '../components/FeaturedProjectSwiper/FeaturedList';
import HomeHeroWrapper from '../components/HomeHero/HomeHero';
import Typewrite from '../components/TextChange';
import Section from '../components/Section';
import ContactForm from '../components/Forms/ContactForm';
import ModalProvider from '../components/Modal/ModalProvider';
import Heading from '../components/Heading';
import TickerTape from '../components/TickerTape';
import Button from '../components/styled/Button';
import Link from 'next/link';
import Image from 'next/image';
import { ServiceThumb, ServicesWrapper } from '../components/styled/ServiceContainer';

export async function getStaticProps() {
  const projects = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });
  return {
    props: { projects: projects.data }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  return (
    <>
      <MetaTags
        title="Product Desinger | Devoloper | Eddie Lopez | Fresno CA"
        site_name="Lopezed"
        url="https://www.lopezed.com/"
        description={
          'Portfolio of Central California based freelance graphic designer specializing in all areas of logo design, web design, print graphics. '
        }
        keywords={
          'graphic design, design, logo design, branding, central California, Fresno, portfolio, print'
        }
      />

      <>
        <HomeHeroWrapper>
          <motion.div
            transition={{
              duration: 1,
            }}
            initial={{ opacity: 0 }}
            style={{ boxSizing: 'border-box' }}
            whileInView={{ opacity: 1 }}
            className="a"
          >
            <p className="subheading">Hello world. I am a frontend...</p>

            <Typewrite />

            <p>
              I design and build clear, functional digital products — from discovery and Figma
              prototypes to real MVPs in Next.js and conversion-ready e-commerce sites.
            </p>

            <div>
              <Link href="/#contact">
                <Button>Start a project</Button>
              </Link>
            </div>
          </motion.div>

          <div className="b">
            <Image alt="ui sketch" src="/ui sketch.svg" width={100} height={100} />
          </div>
        </HomeHeroWrapper>

        <TickerTape />
        <Section id="services">
          <Heading string="Services" />
          <ServicesWrapper>
            <ServiceThumb>
              <h3 style={{ marginBottom: '1rem' }}>DISCOVERY</h3>
              <p>
                I help founders and teams clarify their product before they invest in design or
                development. My discovery process defines user needs, core features, product
                positioning, and a clear MVP scope, giving you a roadmap that reduces risk and
                accelerates delivery.
              </p>
            </ServiceThumb>
            <ServiceThumb>
              <h3 style={{ marginBottom: '1rem' }}>UI/UX DESIGN</h3>
              <p>
                I create clean, conversion-focused UI designs and interactive Figma prototypes that
                bring your product to life. My design process includes wireframes, high-fidelity
                layouts, and user-ready flows that make your app or website easy to pitch, validate,
                and develop.
              </p>
            </ServiceThumb>
            <ServiceThumb>
              <h3 style={{ marginBottom: '1rem' }}>MVP PROTOTYPE</h3>
              <p>
                I build functional, production-ready MVPs using modern tech like Next.js, Supabase,
                and Stripe. Each MVP includes real authentication, databases, dashboards, and core
                features so you can launch fast, gather feedback, and secure funding with a working
                product.
              </p>
            </ServiceThumb>
            <ServiceThumb>
              <h3 style={{ marginBottom: '1rem' }}>WEBSITE</h3>
              <p>
                I design and develop high-performing e-commerce websites on platforms like Shopify
                and Wix Studio. My sites are optimized for SEO, mobile performance, and conversion,
                with clean product structures, fast load times, and a CMS your team can easily
                manage.
              </p>
            </ServiceThumb>
          </ServicesWrapper>
        </Section>
        {/* 
        <Section>
          <Heading string="Featured Projects" />
          <FeaturedList />
        </Section> */}

        <Section id="contact">
          <ModalProvider>
            <Heading string="Contact Me" />
            <div style={{ maxWidth: 1200, justifySelf: 'center', width: '100%' }}>
              <ContactForm />
            </div>
          </ModalProvider>
        </Section>
      </>
    </>
  );
}
