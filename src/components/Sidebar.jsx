"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar({ isNavOpen, onNavToggle }) {
  const pathname = usePathname();

  const handleNav = () => {
    if (typeof window !== "undefined" && window.innerWidth < 640) onNavToggle();
  };

  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/skill-test", label: "Skill Test" },
    { href: "/internship", label: "Internship" },
  ];

  return (
    <aside
      className={`absolute top-0 left-0 h-full w-full -translate-x-100 border-r-1 border-gray-200 bg-white py-8 shadow-md duration-200 sm:static sm:translate-x-0 ${isNavOpen ? "w-54 translate-x-0" : "w-0 -translate-x-100 opacity-0"} bg-gray-300/60 px-3 backdrop-blur-md`}
    >
      <nav className="flex flex-col gap-2 font-semibold">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`w-80% inline-block rounded-sm p-2 text-left ${
              pathname === href ? "bg-gray-100 text-blue-600" : "text-gray-700"
            } hover:text-blue-600`}
          >
            <span onClick={handleNav} className="cursor-pointer">
              {label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
