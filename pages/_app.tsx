import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import { Inter as FontSans } from '@next/font/google'

import "@/styles/globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
				:root {
					--font-sans: ${fontSans.style.fontFamily};
				}
			}`}</style>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
