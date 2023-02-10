import Layout from "../components/Layout";
import "../styles/globals.css";
import StoreProvider from "../utils/store/StoreProvider";
import {useEffect} from 'react'
import ScrollToTop from "../components/ScrollToTop";
import ScrollPosition from "../utils/ScrollPosition";






function MyApp({ Component, pageProps }) {
  useEffect(()=>{

  },[])

  
  return (
    <StoreProvider>
      <ScrollPosition>
      <Layout>
        <Component {...pageProps} />
        {/* <button onClick={backToTop}>Scroll to Top</button> */}
        <ScrollToTop/>
      </Layout>
      </ScrollPosition> 
    </StoreProvider>
  );
}

export default MyApp;
