import React, { useState } from 'react';
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion" 

const NavBar = () => {

  const [jaguaracambe, setJaguaracambe] = useState(false);
  const [projetos, setProjetos] = useState(false);
  const [especies, setEspecies] = useState(false);
  const [apoie, setApoie] = useState(false);

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: '100vw',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring', 
        delay: 0.5,
      }
    }
  }
  return (
    <motion.div className={styles.navbar}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
          <img className={styles.logo} src="/logo.jpeg" alt="jaguaracambe logo"/>
          <nav>
            <div className={styles.links}>
                <a className={styles.link} href=""
                  onMouseEnter={() => setJaguaracambe(true)}
                  onMouseLeave={() => setJaguaracambe(false)}
                  >JAGUARACAMBÉ</a>
                  { jaguaracambe && <ul  className={styles.sublinks}>
                    <a className={styles.sublink} href="">Quem somos</a>
                    <a className={styles.sublink} href="">Missao</a>
                    <a className={styles.sublink} href="">Equipe</a>
                  </ul>}
            </div>
            <div className={styles.links}>
                <a className={styles.link} href=""
                   onMouseEnter={() => setProjetos(true)}
                   onMouseLeave={() => setProjetos(false)}
                >PROJETOS</a>
                { projetos && <ul className={styles.sublinks}>
                  <a className={styles.sublink} href="">Educação Ambiental</a>
                  <a className={styles.sublink} href="">Pesq. Científica</a>
                  <a className={styles.sublink} href="">Sou EU Pequi</a>
                </ul>}
            </div>
            <div className={styles.links}>
                <a className={styles.link} href=""
                   onMouseEnter={() => setEspecies(true)}
                   onMouseLeave={() => setEspecies(false)}
                >ESPÉCIES</a>
                { especies && <ul className={styles.sublinks}>
                  <a className={styles.sublink} href="">Canídeos</a>
                  <a className={styles.sublink} href="">Felídeos</a>
                  <a className={styles.sublink}href="">Procionidae</a>
                  <a className={styles.sublink}href="">Mephitidae</a>
                  <a className={styles.sublink}href="">Mustelidae</a>
                </ul>}
            </div>
            <div className={styles.links}>
                <a className={styles.link} href=""
                   onMouseEnter={() => setApoie(true)}
                   onMouseLeave={() => setApoie(false)}
                >APOIE</a>
                { apoie && <ul className={styles.sublinks}>
                  <a className={styles.sublink} href="">Crowfounding</a>
                  <a className={styles.sublink} href="">Empresa Parceira</a>
                </ul>}
            </div>
          </nav>
        </motion.div>
  )
}

export default NavBar
