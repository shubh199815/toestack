import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Content from '../components/Content'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Content />
    </>
  )
}

export default Home
