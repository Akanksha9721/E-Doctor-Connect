
import "./globals.css";
import { Toaster } from "react-hot-toast";
import PrelineScript from '../components/prelinescript';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-background text-foreground antialiased">
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
