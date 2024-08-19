import { HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./navlinks";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideNav() {
  return (
    <div className="flex h-full bg-secondary flex-col">
      <Link
        href="/home"
        className="flex h-auto shrink-0 bg-gradient-to-b from-black   to-secondary p-2 md:p-8 justify-center "
      >
        <Image
          src="/logo.svg"
          width={120}
          height={30}
          className="block md:hidden"
          alt="LiftHub logo (mobile)"
        />
        <Image
          src="/logo.svg"
          width={120}
          height={20}
          className="hidden md:block"
          alt="LiftHub logo (desktop)"
        />
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 md:px-2 md:pb-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow md:block rounder-md bg-[#2f2f2f]" />
        <form className="hidden md:block">
          <button className="h-10 w-full justify-center items-center md:bg-thirdcolor gap-2 grow text-2xl hover:pointer md:hover:bg-primary hover:text-contrast transition-all p-2 rounded-md  md:flex-none md:justify-start md:p-2 md:px-3 md:text-lg hidden md:flex">
            <FontAwesomeIcon icon={faPowerOff}></FontAwesomeIcon>
            <span>Sign out</span>
          </button>
        </form>
      </div>
    </div>
  );
}
