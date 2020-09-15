import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nextjs + Tailwindcss Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-6xl leading-tight font-bold">
            Next.js & Tailwindcss Boilerplate
          </h1>
          <h2 className="text-4xl text-gray-700 font-semibold mt-4">
            Configured with <span className="text-blue-500">ESLint</span> and{' '}
            <span className="text-blue-500">Prettier</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
