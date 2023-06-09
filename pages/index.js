import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();

  return (<h1>{router.query.name ? `Hello,${router.query.name} `: "I dont know ur name"} </h1>)
}
