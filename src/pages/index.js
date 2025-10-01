import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Container from "@/components/container";
import SignUpForm from "@/components/sign-up-form";
import { useState } from "react";
import { usePopup } from "@/contexts/popup";
import Credit from "@/components/credit";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {

  const [inputForm, setInputForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    isChecked: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { triggerPopup } = usePopup()



  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});


    try {
      let inputErrors = {};

      if (!inputForm.fullName) {
        inputErrors.fullName = "Full name is required";
      }

      if (!inputForm.email) {
        inputErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(inputForm.email)) {
        inputErrors.email = "Email address is invalid";
      }

      if (!inputForm.password) {
        inputErrors.password = "Password is required";
      }

      if (inputForm.password !== inputForm.confirmPassword) {
        inputErrors.confirmPassword = "Passwords do not match";
      }

      if (inputForm.isChecked === false) {
        inputErrors.terms = "You must agree to the terms and services";
      }

      console.log(inputForm)
      if (Object.keys(inputErrors).length > 0) {
        triggerPopup("Please input all required fields correctly.")
        setErrors(inputErrors);
        setIsLoading(false);
        return;
      }

      // Simulate an API call
      setTimeout(() => {
        setIsLoading(false);
        triggerPopup("Successfully signed up!")
        // Here you can handle success or error responses
      }, 2000);
    } catch (error) {
      setErrors({})
      setIsLoading(false); // Only set to false on error
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
          isLoading={isLoading}
          errors={errors}
        />
        <Credit />
      </Container>

    </main>
  );
}
