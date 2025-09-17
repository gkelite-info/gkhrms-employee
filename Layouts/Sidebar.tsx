"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, User, Buildings, Wallet, ChatCircle, UsersThree, TrendUp, } from "phosphor-react";

const navItems = [
  { label: "Home", href: "/dashboard", icon: House },
  { label: "Me", href: "/manager_dash", icon: User },
  { label: "My Team", href: "/e", icon: UsersThree },
  { label: "Org", href: "/f", icon: Buildings },
  { label: "Performance", href: "/g", icon: TrendUp },
  { label: "My Finance", href: "/h", icon: Wallet },
  { label: "Engage", href: "/i", icon: ChatCircle },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-[100px] bg-white h-full flex flex-col items-center text-center gap-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            style={{ backgroundColor: isActive ? "#C5C1FF" : "" }}
            className="w-full p-2.5"
          >
            <h3
              className={`flex flex-col items-center gap-1 text-sm font-medium cursor-pointer transition-colors ${isActive
                ? "text-[#1F2937] text-xs"
                : "text-[#1F2937] hover:text-red-400 text-xs"
                }`}
            >
              <Icon
                weight="bold"
                className={`h-4 w-4 transition-all duration-200 ${!isActive ? "hover:h-5 hover:w-5" : ""
                  }`}
              />
              {item.label}
            </h3>
          </Link>
        );
      })}
    </div>
  );
}
