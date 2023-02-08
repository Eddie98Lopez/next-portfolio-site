import Layout from "../components/Layout";
import "../styles/globals.css";
import StoreProvider from "../utils/store/StoreProvider";
import {useEffect} from 'react'

const backToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}




function MyApp({ Component, pageProps }) {
  useEffect(()=>{

  },[])

  
  return (
    <StoreProvider>

      <Layout>
        <Component {...pageProps} />
        <button onClick={backToTop}>Scroll to Top</button>
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
