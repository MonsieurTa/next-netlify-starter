import Head from 'next/head'

export async function getStaticProps() {
  return {
    props: {  }
  }
}

export default function Home({ data }) {
  const { records } = data;
  console.log(data);
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      </main>
    </div>
  )
}
