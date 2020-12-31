import Link from 'next/link'
import tw from 'twin.macro'
import Layout from '../components/Layout/Layout'
import Head from 'next/head'

const IndexPage = () => {
  return (
    <>
      <Head>
        <script type="text/javascript" src="./hello.js"></script>
        <script src="https://sdk.scdn.co/spotify-player.js"></script>
      </Head>

      <Layout title="Home | Next.js + TypeScript Example">
        <h1>Hello Next.js</h1>
        <p css={[tw`bg-red-300`]}>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
        <Input />
      </Layout>
    </>
  )
}

const Input = tw.input`border-yellow-100 border hover:border-blue-500`

export default IndexPage
