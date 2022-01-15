import React from 'react'
import styles from '../styles/Home.module.css'

const NavBar = () => {
  return (
    <div className={styles.navbar}>
          <img className={styles.logo} src="/logo.jpeg" alt="jaguaracambe logo"/>
        
          <nav>
            <div className={styles.links}>
                <a className={styles.link} href="">JAGUARACAMBÉ</a>
                <div className={styles.sublinks}>
                  <a className={styles.sublink} href="">Quem somos</a>
                  <a className={styles.sublink} href="">Missao e valores</a>
                  <a className={styles.sublink} href="">Equipe</a>
                </div>
            </div>
            <div className={styles.links}>
                <a className={styles.link} href="">PROJETOS</a>
                <div className={styles.sublinks}>
                  <a className={styles.sublink} href="">Educação Ambiental</a>
                  <a className={styles.sublink} href="">Pesq. Científica</a>
                  <a className={styles.sublink} href="">Sou EU Pequi</a>
                </div>
            </div>
            <div className={styles.links}>
                <a className={styles.link} href="">ESPÉCIES</a>
                <div className={styles.sublinks}>
                  <a className={styles.sublink} href="">Canídeos</a>
                  <a className={styles.sublink} href="">Felídeos</a>
                  <a className={styles.sublink}href="">Procionidae</a>
                  <a className={styles.sublink}href="">Mephitidae</a>
                  <a className={styles.sublink}href="">Mustelidae</a>
                </div>
            </div>
            <div className={styles.links}>
                <a className={styles.link} href="">APOIE</a>
                <div className={styles.sublinks}>
                  <a className={styles.sublink} href="">Crowfounding</a>
                  <a className={styles.sublink} href="">Empresa Parceira</a>
                </div>
            </div>
          </nav>
        </div>
  )
}

export default NavBar
