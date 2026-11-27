import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import { Geist, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Wisnu Parijata — Computer Engineer · Full-Stack Developer · AI & IoT Enthusiast",
  description:
    "Personal portfolio of a Computer Engineering graduate focused on software development, IoT, and system integration.",
  applicationName: "Wisnu Portfolio",
  openGraph: {
    title: "Wisnu Parijata — Computer Engineer · Full-Stack Developer · AI & IoT Enthusiast",
    description: "Engineering ideas into practical digital systems.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable, poppins.variable)}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
