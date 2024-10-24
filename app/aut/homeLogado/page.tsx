import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-6 mt-12">Portal do Administrador</h1>

        <div className="flex space-x-4">
          <Link href="/aut/feirantes">
            <button className="bg-blue-500 text-white px-8 py-5 rounded hover:bg-blue-600">
              Feirantes
            </button>
          </Link>

          <Link href="/aut/feiras">
            <button className="bg-blue-500 text-white px-8 py-5 rounded hover:bg-blue-600">
              Feiras
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
}
