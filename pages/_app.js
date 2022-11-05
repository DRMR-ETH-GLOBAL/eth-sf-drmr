import '../styles/globals.css'
import { useState } from 'react'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import Layout from '../components/Layout'

import { Web3ReactProvider, useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import library from '../getLibrary'

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Web3ReactProvider getLibrary={library}>
        <Layout pageTitle='BlockRM'>
          <Component {...pageProps} />
        </Layout>
      </Web3ReactProvider>
    </SessionContextProvider>
  )
}

export default MyApp
