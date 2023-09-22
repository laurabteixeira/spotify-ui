import Layout from './layout'
import Sidebar from '@/components/Sidebar'
import Main from '@/components/Main'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Layout title="Spotify" />

      <div className="h-screen flex flex-col">
        <div className="flex-1 flex">
          <Sidebar />
          <Main />
        </div>
        <Footer />
      </div>
    </>
  )
}
