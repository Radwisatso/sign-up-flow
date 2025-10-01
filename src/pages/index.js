import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Container from "@/components/container";
import SignUpForm from "@/components/sign-up-form";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main style={{
      height: "100vh",
    }} className={`${styles.main} ${poppins.variable}`}>
      <Container>
        <SignUpForm />
      </Container>
    </main>
  );
}
