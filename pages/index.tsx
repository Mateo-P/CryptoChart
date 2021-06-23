import Head from 'next/head'
import Image from 'next/image'
import Layout from '../src/Layouts/index'
import { gql } from '@apollo/client'
import client from '../apollo-client'
export default function Home() {
  return (
    <Layout>
      <div>holi</div>
    </Layout>
  )
}
export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  })

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  }
}
