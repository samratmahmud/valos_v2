import "@/style/globals.css";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "Valos it v2",
  description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
