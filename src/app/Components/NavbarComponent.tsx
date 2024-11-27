"use client";

import { Navbar, Drawer, IconButton, Typography } from "../MaterialComponents";

import Link from "next/link";
import { useMediaQuery } from "../hooks/useMediaQuery";

import { useEffect, useState } from "react";

const NavItems: { label: string; url: string }[] = [
  { label: "Inicio", url: "/" },
  { label: "Blogs", url: "blogs" },
  { label: "Nosotros", url: "about-us" },
];

function NavItem({ label, url }: { label: string; url: string }) {
  return (
    <Typography
      as={Link}
      href={url}
      className="text-lg text-blue-gray-900 hover:text-purple-400 transition-colors duration-300 font-bold"
    >
      {label}
    </Typography>
  );
}

function NavList() {
  return (
    <div className="mb-4 mt-2 mr-4 flex flex-col gap-3 items-end lg:m-y-0 lg:mr-0 lg:flex-row lg:items-center lg:gap-8">
      {NavItems.map((navItem) => (
        <NavItem key={navItem.url} {...navItem} />
      ))}
    </div>
  );
}

export function NavbarComponent() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const isDesktop = useMediaQuery("(min-width: 728px)");

  useEffect(() => {
    if (isDesktop) setOpen(false);
  }, [isDesktop]);

  return (
    <Navbar color="transparent" className="sticky top-0 bg-white h-20 z-50" fullWidth>
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          as={Link}
          href="/"
          className="mr-4 cursor-pointer text-xl font-bold text-purple-500"
        >
          MEDTech
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          variant="text"
          color="blue-gray"
          onClick={handleOpen}
          className="ml-auto inline-block text-blue-gray-900 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="24"
            height="24"
            strokeWidth="2"
          >
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        </IconButton>
      </div>
      <Drawer open={open} className="p-4" placement="right">
        <div className="flex flex-col items-end">
          <IconButton variant="text" color="blue-gray" onClick={handleOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
          <NavList />
        </div>
      </Drawer>
    </Navbar>
  );
}

export default NavbarComponent;
