import "@fontsource/poppins/100-italic.css";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200-italic.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300-italic.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400-italic.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500-italic.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600-italic.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700-italic.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800-italic.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900-italic.css";
import "@fontsource/poppins/900.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeRegistry from "../components/theme/ThemeRegistry";
import { colors } from "../constants/colors";
import { Providers } from "../redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FortressEye",
  description: "Home automation system (IOT)"
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
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
};

export default RootLayout;
