import Image from 'next/image'
import type { NextPage } from 'next'
import { Header } from '../components/header' 
import styles from '../styles/Login.module.scss'
import google_button from '../public/google_button.svg'
import face_button from '../public/face_button.svg'
import Link from 'next/link'

const Login: NextPage = () => {
  return (
    <>
      <Header /> 
      <section>
        <h1 className={styles.title}>Welcome Back!!</h1>
      </section>

      <section className={styles.container}>

        <div className={styles.buttons}>
            <a href='#'><Image src={google_button} alt="Login with google" /></a>
            <a  href='#'><Image src={face_button} alt="Login with facebook" /></a>
        </div>

        <div className={styles.separation}>
          <div className={styles.bar}></div>
          <div> or </div>
          <div className={styles.bar}></div>
        </div>
      
        <div className={styles.sign_in}>
          <h2 className={styles.subtitle}>Sign in</h2>
          <form action="">
            <input className={styles.login_data} placeholder="E-mail" type="email" id="email"/>
            <input className={styles.login_data} placeholder="Password" type="password" id="password"/>
            <div className={styles.remember_sign_in}>
              <input className={styles.check} type="checkbox" id="check"/>
              Remember me
              <button>Sign in</button>
            </div>
          </form>
          <div className={styles.pass_alternate}>
            <div className={styles.register}><Link href='/signup'>Register now</Link></div>
            <div className={styles.forgot}><Link href='/forgot'>Forgot Password?</Link></div>
          </div>
        </div>


      </section>
    </>
  )
}

export default Login
