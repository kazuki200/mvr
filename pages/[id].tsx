import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Header } from '../components/Header'

type PathParams = {
  id: string;
}

type PageProps = {
  title: string;
}

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
 
  return {
    paths: [
      { params: { id: 'popularMovie' } },
      { params: { id: 'filmsInProgress' } },
      { params: { id: 'upComingMovies' } },
      { params: { id: 'popularDramas' } },
      { params: { id: 'dramaOnAir' } },
      { params: { id: 'popularAnimation' } },
      { params: { id: 'animeOnAir' } },
      { params: { id: 'myPage' } },
      { params: { id: 'individualPage' } },
      { params: { id: 'search' } },
    ],
    fallback: false  
  }
}


export const getStaticProps: GetStaticProps<PageProps> = async context => {
  
  const { id } = context.params as PathParams

 
  const props: PageProps = {
    title: `${id}`,
  }

  
  return { props }
}

const BookPage: React.FC<PageProps> = ({ title }: PageProps) => {
  return <>
    <Head>
      <title>{title} の詳細ページ</title>
    </Head>
   <Header/>
  </>
}
export default BookPage