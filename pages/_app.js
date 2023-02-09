import Layout from "../components/Layout";
import "../styles/globals.css";
import StoreProvider from "../utils/store/StoreProvider";
import {useEffect} from 'react'
import ScrollToTop from "../components/ScrollToTop";






function MyApp({ Component, pageProps }) {
  useEffect(()=>{

  },[])

  
  return (
    <StoreProvider>

      <Layout>
        <Component {...pageProps} />
        {/* <button onClick={backToTop}>Scroll to Top</button> */}
        <ScrollToTop/>
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
