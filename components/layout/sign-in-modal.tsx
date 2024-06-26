import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  const scrolled = useScroll(50);

  const handleLoginButtonClick = () => {
    // Redirect the user to the desired URL
    router.push("https://app.samuraichat.com");
  };

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled ? " bg-black/50 backdrop-blur-xl" : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display text-2xl text-white">
            <Image
              src="/192.png"
              alt="Samurai logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Samurai</p>
          </Link>
          <button
            className="rounded-full border border-black bg-white p-1.5 px-4 text-sm text-black transition-all hover:bg-black/50 hover:text-black"
            onClick={handleLoginButtonClick} // Call the function to handle button click
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}
