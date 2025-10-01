import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Container from "@/components/container";
import SignUpForm from "@/components/sign-up-form";
import { useState } from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {

  const [inputForm, setInputForm] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });

  return (
    <main style={{
      height: "100vh",
    }} className={`${styles.main} ${poppins.variable}`}>
      <Container>
        <SignUpForm
          inputForm={inputForm}
          setInputForm={setInputForm}
        />
      </Container>
      <div>
        <a href="https://www.flaticon.com/free-icons/eye" title="eye icons">Eye icons created by Kiranshastry - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/password" title="password icons">Password icons created by th studio - Flaticon</a>
      </div>

    </main>
  );
}
