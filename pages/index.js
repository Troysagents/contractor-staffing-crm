import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Contractor Staffing CRM</title>
        <meta name="description" content="A website for a labour hire/contractor business to manage staffing and clients." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to the Contractor Staffing CRM
          </h1>
          <p className="text-gray-600">
            This is your centralized platform for managing contractors, staffing, and client relationships.
          </p>
        </div>
      </main>
    </div>
  )
}