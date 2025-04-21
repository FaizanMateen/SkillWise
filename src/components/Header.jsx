"use client";

import { useDisableOnWidth } from "@/hooks/useDisableOnWidth";
import Image from "next/image";

function Header({ onNavToggle, onNavOpen }) {
  const isDisabled = useDisableOnWidth(640, onNavOpen);

  return (
    <header className="flex h-16 items-center justify-between border-b-1 border-gray-200 bg-white p-4">
      <button
        disabled={isDisabled}
        onClick={onNavToggle}
        className="flex items-center justify-center"
      >
        <Image
          src="/Whatbyte-logo.svg"
          width={48}
          height={48}
          className="ml-2"
          alt="WhatBytes Logo"
        />
        <span className="justify-self-text-2xl hidden self-center font-bold sm:block">
          WhatBytes
        </span>
      </button>

      <div className="mr-2 flex rounded-sm border-solid border-gray-200 md:border-2">
        <Image
          src="/rahil-siddique.jpg"
          width={48}
          height={48}
          className="mt-1 mr-1 mb-1 ml-1 h-6 w-6 rounded-full object-cover"
          alt="Person Image"
        />
        <span className="mt-1.5 mr-1 mb-1 text-sm font-bold sm:block">Rahil Siddique</span>
      </div>
    </header>
  );
}

export default Header;
