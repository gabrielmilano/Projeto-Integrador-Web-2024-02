import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/aut/homeLogado">Home</Link></li>
          <li><Link href="/aut/feiras">Feiras</Link></li>
          <li><Link href="/aut/feirantes">Feirantes</Link></li>
        </ul>
      </nav>
    </header>
    
  );
}
