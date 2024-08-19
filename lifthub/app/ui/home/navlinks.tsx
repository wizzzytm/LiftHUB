"use client";
import {
  faHouse,
  faClipboardList,
  faDumbbell,
  faUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/home", icon: <FontAwesomeIcon icon={faHouse} /> },
  {
    name: "Routines",
    href: "/home/routines",
    icon: <FontAwesomeIcon icon={faClipboardList} />,
  },
  {
    name: "Exercises",
    href: "/home/exercises",
    icon: <FontAwesomeIcon icon={faDumbbell} />,
  },
  {
    name: "Profile",
    href: "/home/profile",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    name: "Settings",
    href: "/home/settings",
    icon: <FontAwesomeIcon icon={faGear} />,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-10 justify-center items-center md:bg-thirdcolor md:gap-2 grow text-2xl hover:pointer md:hover:bg-primary hover:text-contrast transition-all py-8 rounded-md  md:flex-none md:justify-start md:p-2 md:px-3 md:text-lg",
              {
                "hidden md:flex":
                  link.name === "Exercises" || link.name === "Settings",
                "md:bg-primary text-contrast": link.href === pathname,
              }
            )}
          >
            {LinkIcon}
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
