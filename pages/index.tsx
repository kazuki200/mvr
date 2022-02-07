import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { MainImg } from '../components/MainImg'
import { Search } from '../components/Search'
import { TopContents } from '../components/TopContents'
import { useQueryMV } from '../hooks/useQueryMV'
import { $CombinedState } from '@reduxjs/toolkit'
import { env } from 'process'



const Home: NextPage = () => {
  const fetchMV = useQueryMV()
  console.log(fetchMV)
  return (
    <>
    <Head>
      <title>ホーム</title>
    </Head>
    <Header/>
    <MainImg/>
    <Search/>
    <TopContents children='人気の映画'/>
    <TopContents children='人気のドラマ'/>
    <TopContents children='人気のアニメ'/>
    <Footer/>
   </>
  )
}

export default Home
