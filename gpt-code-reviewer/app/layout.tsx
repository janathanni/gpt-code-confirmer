import Script from 'next/script';
import './globals.css';
import localfont from 'next/font/local';

const monoFont = localfont(
  {
    src: "./fonts/UbuntuMono-Regular.ttf",
    display: "swap"
  }
);

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={monoFont.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>GPT Code Review</title>

        <Script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.min.js" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.1/codemirror.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/eclipse.min.css" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.1/theme/dracula.min.css"
          integrity="sha512-SaM8i03nKsZCChkZs1BZI8bTJJiY72D1QykyT3TNX8/0kIDczmv1/2/GZc3qZ0bsctMfn6YREU6iRj6dX9Oulw=="
          crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.1/codemirror.min.js" />


        <Script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.1/mode/javascript/javascript.min.js" />

        <Script type="text/javascript" src="call_gpt.js"/>

      </head>
      <body className={monoFont.className}>{children}</body>
    </html>
  )
}