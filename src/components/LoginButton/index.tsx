// import { useSession } from 'next-auth/react'
import Image from 'next/image'
import login from '../../public/login.svg'
import styles from './styles.module.scss'
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { IoLogOutOutline } from 'react-icons/io5'

export function LoginButton() {
  // const { data: session } = useSession()
  const session = true

  return session ? (
    <div className={styles.container}>
      <button type="button" className={styles.avatarButton}>
       <Image src={login} alt="Login" />
      </button>
      <div className={styles.content}>
        <button>
          <MdOutlineSpaceDashboard />
          Dashboard
        </button>
        <button>
          <IoLogOutOutline color="#fff"/>
          Logout
        </button>
      </div>
    </div>

  ) : (
    <h1>Hi</h1>
  )
}