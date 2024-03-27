"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import BootstrapClient from "./(components)/clinetComponent/page";
import NavBar from "./(components)/navBar/page";
import Footer from "./(components)/footer/page";
import { StoreProvider } from "@/store/StoreProvider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence, motion } from "framer-motion";
import { useId } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather app",
  description:
    "A weather app is a website that provides weather forecasts and weather-related information. They typically provide current weather conditions, as well as forecasts for the future. Some weather websites also provide weather maps, radar, and satellite imagery.",
};
export default function RootLayout({ children }) {
  let id = useId();
  return (
    <html lang="en">
      <body>
        <SpeedInsights></SpeedInsights>
        <NavBar></NavBar>
        <StoreProvider>
          <AnimatePresence mode="awit">
            <motion.div key={id}> {children}</motion.div>
          </AnimatePresence>
        </StoreProvider>
        <Footer></Footer>
        <BootstrapClient />
      </body>
    </html>
  );
}
