import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Wisnu Parijata — Engineering Portfolio",
  description:
    "Personal portfolio of a Computer Engineering graduate focused on software development, IoT, and system integration.",
  applicationName: "Wisnu Portfolio",
  openGraph: {
    title: "Wisnu Parijata — Engineering Portfolio",
    description: "Engineering ideas into practical digital systems.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
