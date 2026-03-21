"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp";
import CallButton from "@/components/call-button";

export default function ConditionalShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  return (
    <main>
      {!isStudio && <Navbar />}
      <main>{children}</main>
      {!isStudio && <Footer />}
      {!isStudio && <WhatsAppButton />}
      {!isStudio && <CallButton />}
    </main>
  );
}
