"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const navs = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Contact Us", link: "/contact-us" },
  ];
  return (
    <div>
      <div className="p-4 border-b">
        <nav>
          <ul className="flex">
            {navs.map((item) => (
              <li key={item.link} className="mr-4">
                <Link
                  className={item.link === pathname ? "text-blue-500" : "#333"}
                  href={`${item.link}`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
