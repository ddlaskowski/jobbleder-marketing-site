"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { sendFootprint } from "@/lib/tracking";

export default function Tracker() {
  const pathname = usePathname();
  const handshakeDone = useRef(false);

  useEffect(() => {
    if (!handshakeDone.current) {
      handshakeDone.current = true;

      fetch("/api/handshake", {
        method: "POST",
      }).catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (!pathname) return;

    void sendFootprint(`${pathname}`);
  }, [pathname]);

  return null;
}