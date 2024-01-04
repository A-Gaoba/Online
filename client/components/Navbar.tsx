"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState("/menu.svg");
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const newIcon = isOpen ? "/menu.svg" : "/close.svg";
    setMenuIcon(newIcon);
  };

  const closeMenu = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setIsOpen(false);
      setMenuIcon("/menu.svg");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  return (
    <nav className="flexBetween relative z-30 lg:py-2 py-5" ref={menuRef}>
      <Link href="/">
        <Image
          src="/logo1.png"
          alt="logo"
          width={84}
          height={24}
          className="w-12 md:h-full md:w-full"
        />
      </Link>

      {/* Responsive Menu */}
      <div className="lg:hidden ">
        <Image
          src={menuIcon}
          alt="menu"
          width={24}
          height={24}
          className="inline-block cursor-pointer"
          onClick={toggleMenu}
        />
        {isOpen && (
          <div className="absolute flex top-full right-0 bg-[#e9edc9] p-4 rounded w-40">
            <ul className="flex flex-col items-start space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    key={link.key}
                    className="regular-16 text-gray-50 cursor-pointer transition-all hover:font-bold"
                  >
                    <p>{link.label}</p>
                  </Link>
                </li>
              ))}
              <Button
                type="button"
                title="login"
                icon="/user.svg"
                variant="btn_login"
              />
            </ul>
          </div>
        )}
      </div>

      {/* Regular Menu */}
      <ul className="hidden lg:flex h-full gap-12">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              <p>{link.label}</p>
            </Link>
          </li>
        ))}
      </ul>

      {/* Login Button */}
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="login"
          icon="/user.svg"
          variant="btn_green"
        />
      </div>
    </nav>
  );
};

export default Navbar;
