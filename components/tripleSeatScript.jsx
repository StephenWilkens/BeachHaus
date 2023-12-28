"use client";
import { useEffect, useRef } from "react";

export function TripSeatScript() {
  const containerRef = useRef(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://api.tripleseat.com/v1/leads/ts_script.js?lead_form_id=20813&amp;public_key=5cb2656b95d6432fb8b400a5e9a8e48623824589";
    script.async = true;

    containerRef.current.appendChild(script);
    return () => {};
  }, []);
  return (
      <div
        className="py-5 md:px-96 tracking-widest w-full leading-none"
        ref={containerRef}
      ></div>
  );
}

{
  /* <div className="grid grid-cols-2" >
<div className="col-span-2 pl-20 tracking-widest w-full leading-none" ref={containerRef}></div>
</div> */
}
