'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdownmenu';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link'
import React,{ useState }  from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  return (
    <>
       <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
             <div className=" flex h-16 items-center justify-between  px-4 md:px-6">
               <div className="flex items-center gap-2">
                 <Link href="/" className="flex items-center gap-2">
                   <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                     <span className="text-xl font-bold text-white">E</span>
                   </div>
                   <span className="text-xl font-bold tracking-tight">E-Doctor</span>
                 </Link>
               </div>
     
               {/* Desktop Navigation */}
               <nav className="hidden md:flex items-center gap-6">
                 <Link href="/browse-doctor" className="text-sm font-medium hover:text-blue-600 transition-colors">
                   Doctors
                 </Link>
                 <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
                   About
                 </Link>
                 <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
                   Contact
                 </Link>
                 <DropdownMenu>
                   <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-blue-600 transition-colors outline-none">
                     Register
                     <ChevronDown className="h-4 w-4 transition-transform" />
                   </DropdownMenuTrigger>
                   <DropdownMenuContent align="end">
                     <DropdownMenuItem asChild>
                       <Link href="/doctor-register">Doctor</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem asChild>
                       <Link href="/user-register">Patient</Link>
                     </DropdownMenuItem>
                   </DropdownMenuContent>
                 </DropdownMenu>
               </nav>
     
               {/* Mobile Menu Button */}
               <button
                 className="md:hidden rounded-full p-2 text-gray-500 hover:bg-gray-100"
                 onClick={toggleMenu}
                 aria-label="Toggle menu"
               >
                 {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
               </button>
             </div>
     
             {/* Mobile Navigation */}
             {isMenuOpen && (
               <div className="md:hidden border-t py-4 px-6 bg-white">
                 <nav className="flex flex-col space-y-4">
                   <Link
                     href="/browse-doctor"
                     className="text-sm font-medium hover:text-blue-600 transition-colors"
                     onClick={() => setIsMenuOpen(false)}
                   >
                     Doctors
                   </Link>
                   <Link
                     href="/about"
                     className="text-sm font-medium hover:text-blue-600 transition-colors"
                     onClick={() => setIsMenuOpen(false)}
                   >
                     About
                   </Link>
                   <Link
                     href="/contact"
                     className="text-sm font-medium hover:text-blue-600 transition-colors"
                     onClick={() => setIsMenuOpen(false)}
                   >
                     Contact
                   </Link>
                   <div className="pt-2 border-t">
                     <p className="text-sm font-medium mb-2">Register as:</p>
                     <div className="flex gap-2">
                       <Link
                         href="/doctor-register"
                         className="text-sm px-3 py-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                         onClick={() => setIsMenuOpen(false)}
                       >
                         Doctor
                       </Link>
                       <Link
                         href="/user-register"
                         className="text-sm px-3 py-2 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                         onClick={() => setIsMenuOpen(false)}
                       >
                         Patient
                       </Link>
                     </div>
                   </div>
                 </nav>
               </div>
             )}
           </header>
      {/* Add spacing below header */}
      
    </>
  );
};

export default Navbar;