import React from 'react'
import Layout from '../../components/Layout/Layout'
import 'twin.macro'

const Artist = () => {
  return (
    <div tw="container p-5  mx-auto">
      <h2 tw="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        Search Artists
      </h2>
    </div>
  )
}

Artist.getLayout = (page: React.FC) => <Layout title="Artist">{page}</Layout>

export default Artist
