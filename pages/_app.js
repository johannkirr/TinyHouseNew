
import '../styles/globals.css'
import 'papercss/dist/paper.css'
import Layout from '../komponenten/Layout'
import '../styles/custom.scss'


function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...{pageProps}}/>
    </Layout>
  )
}

export default MyApp
