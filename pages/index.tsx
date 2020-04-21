import React from 'react'
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

interface HomeProps {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}

const Home: React.FC<HomeProps> = ({ allPostsData }) => {
  return (
    <Layout siteTitle="Home">
      <h1>Hi, I'm Luke</h1>
      <p>I'm Software Engineer from Des Moines.</p>

      <h1>Blog Posts</h1>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small>
              <Date dateString={date} />
            </small>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Home
