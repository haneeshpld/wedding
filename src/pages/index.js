import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Full Page Image</title>
        <meta name="description" content="Full-page background image in Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Full-page background image */}
      <Image
        className={styles.fullPageImage}
        src="/background.png" // Change this to your image
        alt="Background"
        layout="fill"
        priority
      />

      <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
        <main className={styles.main}>
          {/* <h1>Welcome to My Next.js App</h1>
          <p>This is a full-page background image.</p> */}
        </main>
      </div>
    </>
  );
}
