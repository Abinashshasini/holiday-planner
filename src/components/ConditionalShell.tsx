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
    <div className="flex min-h-screen flex-col">
      {!isStudio && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isStudio && <Footer />}
      {!isStudio && <WhatsAppButton />}
      {!isStudio && <CallButton />}
    </div>
  );
}
