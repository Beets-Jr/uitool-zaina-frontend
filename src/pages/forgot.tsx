
import type { NextPage } from 'next'
import Link from 'next/link'
import Router from 'next/router'
import { useState } from 'react'
import { Header } from '../components/header' 
import { api } from '../services/api'
import styles from '../styles/Forgot.module.scss'

const Forgot: NextPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {

    try {
      await api.post('account/forget', {
        email,
      })

      Router.push('/login')
    }
    catch {
      Router.push('/login')
    }
  }

  return (
    <>
      <Header /> 
      <section>
        <h1 className={styles.title}>Forgot Password</h1>
      </section>
      <section className={styles.container}>
        <div className={styles.sign_in}>
          <h2 className={styles.subtitle}>Enter your E-mail address</h2>
          <input className={styles.login_data} onChange={(e) => setEmail(e.target.value) } placeholder="E-mail" type="email" id="email"/>
          <div className={styles.remember_sign_in}>
            <button onClick={handleSubmit}>Continue</button>
          </div>
          <div className={styles.pass_alternate}>
            <div className={styles.forgot}>
              <Link href='/login'>Cancel</Link>
            </div>
          </div>
        </div>


      </section>
    </>
  )
}

export default Forgot
