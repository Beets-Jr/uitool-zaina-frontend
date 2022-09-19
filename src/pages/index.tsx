import type { NextPage } from 'next'
import { Header } from '../components/header'
import { Footer } from '../components/footer'


import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className={styles.outerContainer}>
        {/* <div className={styles.buttons}>
          <Image src={dashboard_button} alt="Logo UI Tools" />
          <Image src={logout_button} alt="Login" />
        </div> */}
        <div className={styles.videoBox}>
          <span>VÍDEO</span>
        </div>
        <div className={styles.videoInfo}>
          <h2>Lorem Ipsun</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a ligula ipsum. Suspendisse vel nibh nec eros dapibus malesuada.</p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home