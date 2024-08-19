import Image from "next/image";
import Link from "next/link";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/20/solid";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Home() {
  return (
    <main className="flex min-h-screen bg-primary flex-col">
      <div className="flex h-24 shrink-0 bg-gradient-to-b from-black to-primary md:h-72 md:p-8 justify-center md:justify-normal">
        <Image
          src="/logo.svg"
          width={200}
          height={30}
          className="block md:hidden"
          alt="LiftHub logo (mobile)"
        />
        <Image
          src="/logo.svg"
          width={340}
          height={120}
          className="hidden md:block"
          alt="LiftHub logo (desktop)"
        />
      </div>
      <div className="flex flex-col gap-4 bg-primary w-screen p-6">
        <div className="flex  flex-col items-center justify-center gap-6 px-6  md:w-2/5 md:px-15  md:items-baseline">
          <p className="text-l md:text-xl md:leading-normal text-center md:text-left ">
            <strong>Welcome to LiftHub!</strong> Effortlessly track your
            workouts, monitor your progress, and reach your fitness goals – all
            in one place.
          </p>

          <Link
            href="/login"
            className="flex items-center gap-2 px-4 py-3 font-semibold bg-contrast text-black rounded-md md:font-bold"
          >
            <span className="md:text-l">Login</span>
            <FontAwesomeIcon
              icon={faRightToBracket}
              className="w-5 h-5 md:w-6 md:h-6"
            />
          </Link>
        </div>
        <div className=""></div>
      </div>
    </main>
  );
}
