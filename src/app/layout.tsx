import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "../components/theme/ThemeRegistry";
import { colors } from "../constants/colors";
import { Providers } from "../redux/provider";
import "../styles/fonts.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FortressEye",
  description: "Home automation system (IOT)"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          background: colors.dark
        }}>
        <ThemeRegistry options={{ key: "mui" }}>
          <Providers>{children}</Providers>
        </ThemeRegistry>
      </body>
    </html>
  );
}
