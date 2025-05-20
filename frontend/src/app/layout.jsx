import { Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import PrelineScript from '../components/prelinescript';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PrelineScript/>
        <Toaster position="top-center"/>
        {children}
      </body>
    </html>
  );
}
