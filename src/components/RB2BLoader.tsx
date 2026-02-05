"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const RB2BLoader = () => {
  const pathname = usePathname();

  useEffect(() => {
    const id = process.env.NEXT_PUBLIC_RB2B_ID || "QOQRJH905462";

    if (!id) {
      console.warn("[RB2B] NEXT_PUBLIC_RB2B_ID is not set");
      return;
    }

    const existing = document.getElementById("rb2b-script");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "rb2b-script";
    script.src = `https://ddwl4m2hdecbv.cloudfront.net/b/${id}/${id}.js.gz`;
    script.async = true;
    document.body.appendChild(script);

    console.log("[analytics] RB2B script injected", { id, pathname });
  }, [pathname]);

  return null;
};

export default RB2BLoader;

