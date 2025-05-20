import { Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import PrelineScript from '../components/prelinescript';



export const metadata = {
  title: "E-Doctor Connect | Healthcare Made Easy",
  description: "Connect with qualified healthcare professionals through secure video consultations. Book appointments, manage health records, and get expert medical advice from home.",
  keywords: ["healthcare", "telemedicine", "doctor consultation", "online health", "medical appointments", "virtual doctor"],
  authors: [{ name: "E-Doctor Connect Team" }],
  creator: "E-Doctor Connect",
  publisher: "E-Doctor Connect",
  category: "Healthcare",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://e-doctor-connect.com/",
    title: "E-Doctor Connect | Healthcare Made Easy",
    description: "Connect with qualified healthcare professionals through secure video consultations.",
    siteName: "E-Doctor Connect",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body >
        <PrelineScript />
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              theme: {
                primary: '#4caf50',
                secondary: '#ffffff',
              },
            },
            error: {
              duration: 4000,
              theme: {
                primary: '#f44336',
                secondary: '#ffffff',
              },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
