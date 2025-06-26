import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="w-full bg-[#FFD600] text-black text-sm py-2 px-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF className="w-5 h-5" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn className="w-5 h-5" />
        </a>
      </div>
      <div className="flex items-center gap-6 font-medium">
        <Link href="/price-calculator" className="hover:underline">Price Calculator</Link>
        <Link href="/find-dealer" className="hover:underline">Find Dealer</Link>
        <Link href="/track-order" className="hover:underline">Track your order</Link>
      </div>
    </div>
  );
}
