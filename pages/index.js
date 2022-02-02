import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion" 



export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Jaguaracambe</title>
        <meta name="description" content="Página principal da ONG Jaguaracambe" />
        <link href="https://allfont.net/allfont.css?fonts=edo" rel="stylesheet" type="text/css" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=IM+Fell+Double+Pica&family=Shippori+Mincho+B1:wght@700&display=swap" rel="stylesheet"></link>

      </Head>

      <main className={styles.main}>

        <NavBar />

        <div className={styles.homePage_content}>
          <div className={styles.side_content}>
            <h1 className={styles.home_title}>JAGUARACAMBÉ</h1>
            <motion.h3 className={styles.home_subtitle}
              initial={{ y : 200, opacity: 0 }} 
              animate={{ y : 0, opacity: 1 }}
            >Centro de Conservação de Animais Silvestres</motion.h3>
          </div>
          <img className={styles.jaguaracambe_image} src="/aaa.png" alt="MDN logo"></img>
        </div>
        
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
