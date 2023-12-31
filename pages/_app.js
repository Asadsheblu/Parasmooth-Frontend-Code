import Script from 'next/script'
import '../styles/globals.css'
// Import css files


import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Home/Footer/Footer'


function MyApp({ Component, pageProps,session }) {

  return<>
   <div className=''>
  <Head>
        <title>Parasmooth Agency</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
     
  <Navbar/>
  

  <Component {...pageProps} />

<Footer/>
</div>
 
  </>
  

}

export default MyApp
