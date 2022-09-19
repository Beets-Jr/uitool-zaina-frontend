
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { SetStateAction, useState } from 'react'
import { Header } from '../../components/header' 
import { api } from '../../services/api'
import styles from '../../styles/Redefine.module.scss'

const Redefine: NextPage = () => {
  const [ password, setPassword ] = useState('')
  const router = useRouter()
  const { token } = router.query

  
  const handleResetPassword = async () => {
    try {
      await api.post('account/reset', {
        token, 
        password
      })

      router.push('/login')
    } catch {
      
      router.push('/login')
    }
  }

  return (
    <>
      <Header />
      <section>
        <h1 className={styles.title}>Create New Password</h1>
      </section>

      <section className={styles.container}>
        <div className={styles.sign_in}>
          <h2 className={styles.subtitle}>Enter Your new Password</h2>
          <input
            className={styles.login_data}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            type="password"
            id="password"
          />
          <input
            className={styles.login_data}
            placeholder="Confirm new Password"
            type="password"
            id="password"
          />
          <div className={styles.remember_sign_in}>
            <button onClick={handleResetPassword}>Create</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Redefine
