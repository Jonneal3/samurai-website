"use client"

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";

export default function NavBar() {
  const scrolled = useScroll(50);

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled ? "bg-black backdrop-blur-xl" : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full text-white">
          <a href="https://app.samuraichat.com" className="flex items-center font-display text-2xl">
            <Image
              src="/192.png"
              alt="Samurai"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Samurai</p>
          </a>
          <a
            href="https://app.samuraichat.com"
            className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
          >
            Login
          </a>
        </div>
      </div>
    </>
  );
}
