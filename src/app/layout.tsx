import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "../components/theme/ThemeRegistry";
import { Providers } from "../redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FortressEye",
  description: "Home automation system (IOT)"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeRegistry options={{ key: "mui" }}>
          <Providers>{children}</Providers>
        </ThemeRegistry>
      </body>
    </html>
  );
}
