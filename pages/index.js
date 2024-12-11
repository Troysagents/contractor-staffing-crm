import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contractor Staffing CRM</title>
        <meta name="description" content="A website for a labour hire/contractor business to manage staffing and clients." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to the Contractor Staffing CRM</h1>
        <p>This is the homepage.</p>
      </main>
    </div>
  )
}