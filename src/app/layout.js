"use client";

import "./globals.css";
import { Archivo, Open_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { useState, useEffect } from "react";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
  variable: "--font-archivo",
});

const opensans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
  variable: "--font-opensans",
});

export default function RootLayout({ children }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const response = await fetch("/api/session");
      const data = await response.json();
      setSession(data);
    };

    fetchSession();
  }, []);

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={`${archivo.variable} ${opensans.variable} bg-brand-primary text-brand-textBody h-screen items-center justify-center`}
        >
          {children}
        </body>
      </html>
    </SessionProvider>
  );
}
