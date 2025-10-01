import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Container from "@/components/container";
import SignUpForm from "@/components/sign-up-form";
import { useState } from "react";
import { usePopup } from "@/contexts/popup";

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
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { triggerPopup } = usePopup()



  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    triggerPopup("Welcome to the Sign Up Page!")


    try {
      if (inputForm.password !== inputForm.confirmPassword) {
        setErrors({ confirmPassword: "Passwords do not match" });
        setIsLoading(false);
        return;
      }

      // Simulate an API call
      setTimeout(() => {
        setIsLoading(false);
        // Here you can handle success or error responses
      }, 2000);
    } catch (error) {

    }
  }

  return (
    <main style={{
      height: "100vh",
    }} className={`${styles.main} ${poppins.variable}`}>
      <Container>
        <SignUpForm
          inputForm={inputForm}
          setInputForm={setInputForm}
          onSubmit={handleSubmit}
        />
        <div>
          <a href="https://www.flaticon.com/free-icons/eye" title="eye icons">Eye icons created by Kiranshastry - Flaticon</a>
          <a href="https://www.flaticon.com/free-icons/password" title="password icons">Password icons created by th studio - Flaticon</a>
        </div>
      </Container>

    </main>
  );
}
