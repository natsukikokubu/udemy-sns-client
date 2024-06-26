import Navbar from "@/src/components/Navbar";
import { AuthProvider } from "@/src/context/auth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Component {...pageProps} />
      </AuthProvider>
    </div>
  );
}
