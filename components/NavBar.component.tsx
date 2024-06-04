import Image from "next/image";
import TopNav from "./TopNav.component";
import SearchBar from "./SearchBar.component";
import Button from "./Button.component";

import Link from "next/link";
export default function NavBar() {
  return (
    <div className="border-b-2">
      <TopNav />
      <div className="py-1 px-5">
        <div className="mx-auto max-w-7xl flex justify-between gap-2 items-center">
          <div className="flex-[2]">
            <Image
              src="/SVG/PowerUP-Logo.svg"
              alt="Home-Button"
              // className="w-10"
              width={40}
              height={40}
            />
          </div>
          <SearchBar />
          <div className="flex flex-[2] border-black text-xs justify-end items-center gap-1">
            <div className="flex gap-1">
              <Button className="bg-orange-400 text-white">Register</Button>
              <Button className="border-orange-300 ">Login</Button>
            </div>
            <Link href={""} className="border-l-2 border-black pl-1 shrink-0">
              <Image
                src="/SVG/shopping-cart.svg"
                alt="shopping-cart"
                // className="w-8"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
