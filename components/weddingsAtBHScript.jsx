"use client";
import { useEffect, useRef } from "react";

export function WeddingsAtBHScript() {
  const containerRef = useRef(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
    "https://cdn1.weddingwire.com/_js/wp-rated.js?v=4";
    script.async = true;

    containerRef.current.appendChild(script);
    return () => {};
  }, []);
  return (
    <div className="" >
      \<div className="" ref={containerRef}></div>
    </div>
  );
}
