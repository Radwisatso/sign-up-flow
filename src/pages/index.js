import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${poppins.variable}`}>

      </main>
    </>
  );
}
