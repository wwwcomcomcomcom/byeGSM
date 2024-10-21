"use client";

import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";

const components: { title: string; href: string }[] = [
  {
    title: "Bye GSM이란?",
    href: "/",
  },
  {
    title: "원서 작성하기",
    href: "/oneseo",
  },
  {
    title: "Why use bye GSM?",
    href: "/why",
  },
];

export default function Navigation() {
  return (
    <div className="w-full py-2 border-b flex justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          {components.map((component) => MenuItem(component))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

function MenuItem({ title, href }: { title: string; href: string }) {
  const currentPath = useLocation().pathname;
  return (
    <Link to={href}>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        {title}
      </NavigationMenuLink>
      {currentPath === href ? (
        <div className="w-full h-1 bg-black"></div>
      ) : null}
    </Link>
  );
}
