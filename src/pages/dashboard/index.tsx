import type { NextPage } from 'next'
import { Header } from '../../components/header';
import { useState } from 'react';

import styles from '../../styles/Dashboard.module.scss'
import Menu from './_menu';

interface ModalProps{
  isOpen: boolean;
  onClose(): void,
}
const Modal: React.FC<ModalProps> = ({isOpen, onClose}) => {
  return (
    <div className={`${styles.modal_container} ${isOpen ? styles.modal_open : ''}`}>
      <p className={styles.modal_btnClose} onClick={() => onClose()}>Fechar</p>
      <div>
        <h1>Title</h1>
        <img src='https://media.istockphoto.com/vectors/background-minimal-waves-design-vector-id1298530515' alt='tools'/>
      </div>

      <h3>Description</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a ligula ipsum. Suspendisse vel nibh nec eros dapibus malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a ligula ipsum. Suspendisse vel nibh nec eros dapibus malesuada.</p>
    </div>
  )
}

interface CardProps {
  title: string,
  imgSrc: string,
  onClick(): void,
}

const Card: React.FC<CardProps> = ({title, imgSrc, onClick}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={imgSrc} />
      <p>{title}</p>
    </div>
  )
}

const MOCKUP_CARD = {
  title: 'exemplo',
  imgSrc: 'https://media.istockphoto.com/vectors/background-minimal-waves-design-vector-id1298530515'
}

const Dashboard: NextPage = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div>
          <div className={styles.barLateral}></div>
          <Menu />
        </div>
        <section
          className={styles.container}
        // onClick={(e) => {
        //   // setModalOpen(false);
        // }}
        >
          {
            [1, 2, 3, 4].map((v, index) => (
              <Card
                key={index}
                title={MOCKUP_CARD.title}
                imgSrc={MOCKUP_CARD.imgSrc}
                onClick={() => {
                  setModalOpen(true);
                }}
              />
            ))
          }
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </section>
      </main>
    </>
  )
}

export default Dashboard