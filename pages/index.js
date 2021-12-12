import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Head from 'next/head';
import Box from '@components/Box';

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default function Home({ }) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <Box position={[0, 0, 0]} />
        </Canvas>
      </main>
    </div>
  )
}
