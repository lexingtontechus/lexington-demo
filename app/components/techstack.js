"use client";
import Link from "next/link";
import {FaExternalLinkAlt} from "react-icons/fa";

export default function TechStack() {
  return (
    <div className="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      {/* Page content here */}
      <label htmlFor="my-drawer-4" className="drawer-button btn w-64">Tech Stack</label>
    </div> 
    <div className="drawer-side">
      <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
      <h1 className="py-4 text-3xl font-semibold uppercase">Tech Stack</h1>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
     <li className="text-2xl font-semibold">
     <Link
              href="https://nextjs.org"
              target="_blank"
              className="font-bold text-primary"
            >     
              NextJS App Router <FaExternalLinkAlt/>
           </Link> </li>
            <p className="p-4 text-sm text-left">Peerless performance, efficiency and developer experience.</p>
          
      <li className="text-2xl font-semibold"><Link
              href="https://daisyui.com"
              target="_blank"
              className="font-bold text-primary"
            >
              DaisyUI <FaExternalLinkAlt/>
            </Link></li>
            <p className="p-4 text-sm text-left">DaisyUI adds class names to Tailwind CSS for all common UI components. Component class names to Tailwind CSS to make beautiful websites faster than ever.</p>
              <li className="text-2xl font-semibold"><Link
              href="https://clerkdev.com"
              target="_blank"
              className="font-bold text-primary"
            >
              ClerkDev <FaExternalLinkAlt/>
            </Link></li>
            <p className="p-4 text-sm text-left">B2B SaaS Authentication & User Management</p>
    </ul>
  
  </div>
</div>  );
}
