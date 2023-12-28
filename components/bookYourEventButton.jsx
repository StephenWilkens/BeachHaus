"use client";

import { Button } from "flowbite-react";
import Link from "next/link";

export function BookYourEventButton() {
  return (
    <Link href="/private-events/booking">
      <div className="flex items-center justify-center my-3 md:my-0">
        <Button className="h-10 md:h-16 w-full mx-5 md:w-5/6 rounded-full  bg-cyan-800 hover:opacity-80">
            <h1 className="text-xl md:text-3xl font-light md:font-bold md:tracking-widest">Book Your Event!</h1>
        </Button>
      </div>
    </Link>
  );
}
