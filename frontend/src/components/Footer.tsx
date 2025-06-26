import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-gray-400 text-sm border-t border-gray-800 bg-black">
      © {new Date().getFullYear()} Excel Coatings. All rights reserved.
    </footer>
  );
} 