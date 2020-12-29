import { GlobalStyles } from 'twin.macro'
import { CacheProvider } from '@emotion/react'
import { cache } from '@emotion/css'
import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles.css'

// import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: any) => {
  const getLayout = Component.getLayout || ((page: React.FC) => page)

  return (
    <CacheProvider value={cache}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        {getLayout(<Component {...pageProps} />)}
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </CacheProvider>
  )
}

export default App
