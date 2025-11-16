
'use client';

import type { Metadata } from 'next';
import { Inter, Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { LoadingScreen } from '@/components/landing/LoadingScreen';
import { FirebaseClientProvider } from '@/firebase';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AuthSheetProvider } from '@/hooks/use-auth-sheet';
import { SheetProviders } from '@/components/SheetProviders';
import Script from 'next/script';


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-code-pro',
  weight: ['400', '500'],
});

// export const metadata: Metadata = {
//   title: 'SilzeyPOS',
//   description: 'SilzeyPOS - Serving Cannabis Dispensaries & Businesses of All Sizes',
// };

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoadingScreen>{children}</LoadingScreen>
      <Toaster />
      <SheetProviders />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceCodePro.variable}`}
      suppressHydrationWarning
    >
      <head>
        <title>SilzeyPOS</title>
        <meta name="description" content="SilzeyPOS - Serving Cannabis Dispensaries & Businesses of All Sizes" />
        <meta name="google-site-verification" content="EnZKJF49dFWMnNlPRu-Wzsfnb9Wq7hcbTQC7yHCjKdl_fJLgIQM6bcbmw5NOWeDN.M0-GObbb5ePi63ASQsPKBrDqfgayGnOWpyrEF0nHqug" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TLBLXGZ4');`,
          }}
        />
      </head>
      <body className="font-body antialiased">
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TLBLXGZ4"
        height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FirebaseClientProvider>
            <AuthSheetProvider>
              <AppLayout>{children}</AppLayout>
            </AuthSheetProvider>
          </FirebaseClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
