import React from 'react'
import tw from 'twin.macro'
import Layout from '../../components/Layout/Layout'

const index = () => {
  return <div css={[tw`container mx-auto md:max-w-0`]}>Hello World 1234 </div>
}

index.getLayout = (page: React.FC) => <Layout title="Artist">{page}</Layout>

export default index
