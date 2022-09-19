import Image from 'next/image'
import styles from './styles.module.scss'

import logo from '../../public/logo.svg'
import Link from 'next/link'
import { LoginButton } from '../LoginButton'

export function Header() {
  return (
    <>
    <header className={styles.headerContainer}>
      <span  className={styles.logo}>
       <Link href='/'><Image src={logo} alt="Logo UI Tools"/></Link>
      </span>
      <span className={styles.login}>
        <LoginButton />
        {/* <Image src={login} alt="Login" /> */}
      </span>
    </header>
    </>
  )
}