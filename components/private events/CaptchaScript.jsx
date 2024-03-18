"use client";
import { useEffect, useRef } from "react";

export function CaptchaScript() {
  const containerRef = useRef(null);

  useEffect(() => {
    const captchaScript = document.createElement("captchaScript");
    captchaScript.src = "https://www.google.com/recaptcha/api.js";
    captchaScript.async = true;

    containerRef.current.appendChild(captchaScript);
    return () => {};
  }, []);
  return <div ref={containerRef}></div>;
}
