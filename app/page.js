import Image from 'next/image';
import Head from './components/header';
import { getTickers } from '@/lib/getData';
import { auth } from '@/lib/auth';
import Page from './components/redirectingPage';

export default async function Home() {
  const session = await auth();
  
  console.log(session);

  const namesTickers = await getTickers();

  return (
    <section className="content items-start justify-items-start min-h-screen min-w-screen gap-16 font-[family-name:var(--font-geist-sans)]" style={{ background: "#e8f9fa"}}>
    <Head log={session} />
    <div className="content items-start justify-items-start h-full gap-16 sm:p-6 font-[family-name:var(--font-geist-sans)]">
      <Page tickers={namesTickers} session={session} />
    </div>
    </section>
  );
}
