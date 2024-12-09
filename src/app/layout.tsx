// import { ThemeProvider } from "next-themes";
import "./globals.css";
// import { ModeToggle } from "@/src/app/modetoogle/modtoogle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModeToggle></ModeToggle>
          {children}
        </ThemeProvider> */}
        {children}
      </body>
    </html>
  );
}
