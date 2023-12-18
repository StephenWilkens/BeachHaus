"use client";

import { Button } from "flowbite-react";
import Link from "next/link";

export function BookYourEventButton() {
  return (
    <Link href="/private-events/booking">
      <div className="flex items-center justify-center my-3">
        <Button className="h-16 w-5/6 rounded-full">
          <h1 className="text-2xl">Book Your Event!</h1>
        </Button>
      </div>
    </Link>
  );
}
