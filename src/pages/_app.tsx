import '../styles/globals.scss'

import { Header } from '../components/Header'
import { Player } from '../components/Player'

import styles from '../styles/app.module.scss'
import { PlayerContext, PLayerContextProvider } from '../contexts/PlayerContext'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {

  return (
    <PLayerContextProvider>

      <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
    </PLayerContextProvider>
  )
}

export default MyApp
