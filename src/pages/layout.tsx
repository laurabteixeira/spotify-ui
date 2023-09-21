import Head from 'next/head'

type TitleProps = {
  title: string
}

function Layout({ title }: TitleProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
    </div>
  )
}

export default Layout
