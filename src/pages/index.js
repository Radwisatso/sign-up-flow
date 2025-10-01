import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Container from "@/components/container";

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
        <div>
          <h1>Sign Up Flow</h1>
          <form>
            <input type="email" placeholder="Email" required />
            <br />
            <input type="password" placeholder="Password" required />
            <br />
            <input type="password" placeholder="Confirm Password" required />
            <br />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </Container>
    </main>
  );
}
