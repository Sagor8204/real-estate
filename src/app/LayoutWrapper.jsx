"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  const hidelayout = pathname === "/login" || pathname === "/register";

  return (
    <>
      {!hidelayout && <Header />}
      <main>{children}</main>
      {!hidelayout && <Footer />}
    </>
  );
}
