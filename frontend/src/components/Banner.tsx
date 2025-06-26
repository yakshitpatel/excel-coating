import { HugeiconsIcon } from '@hugeicons/react';
import { Linkedin02Icon, InstagramIcon, YoutubeIcon } from '@hugeicons-pro/core-solid-standard';
import Link from "next/link";

// Reusable IconButton component
function IconButton({ href, icon, label }: { href: string; icon: any; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="me noopener noreferrer"
      aria-label={label}
      className="hover:bg-black/10 rounded-sm p-1 transition-colors"
    >
      <HugeiconsIcon icon={icon} className="w-4 h-4" />
    </a>
  );
}

// Reusable LinkButton component
function LinkButton({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="hover:underline">
      {label}
    </Link>
  );
}

// List of social icons
const socialIcons = [
  { href: "https://instagram.com/excelcoatings_india/", icon: InstagramIcon, label: "Instagram" },
  { href: "https://www.youtube.com/@excelcoatings-heatreflecti1903", icon: YoutubeIcon, label: "Youtube" },
  { href: "https://www.linkedin.com/company/excel-coatings-india/", icon: Linkedin02Icon, label: "LinkedIn" },
  // Add more icons here as needed
];

// List of quick links
const quickLinks = [
  { href: "/price-calculator", label: "Price Calculator" },
  { href: "/find-dealer", label: "Find Dealer" },
  { href: "/track-order", label: "Track your order" },
  // Add more links here as needed
];

export default function Banner() {
  return (
    <div className="w-full bg-yellow-500 text-black text-sm py-2 px-5 md:px-10 lg:px-20">
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">
        <div className="flex items-center gap-2">
          {socialIcons.map((item) => (
            <IconButton key={item.label} {...item} />
          ))}
        </div>
        <div className="flex items-center gap-6 font-medium">
          {quickLinks.map((item) => (
            <LinkButton key={item.label} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
