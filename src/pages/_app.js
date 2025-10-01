import Popup from "@/components/popup";
import { PopupProvider } from "@/contexts/popup";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <PopupProvider >
      <Popup />
      <Component {...pageProps} />;
    </PopupProvider>

  )
}
