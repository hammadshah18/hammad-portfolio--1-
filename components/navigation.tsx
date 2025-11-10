"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* 🌐 Floating Navbar for Desktop */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-background/70 backdrop-blur-xl border border-border shadow-md rounded-full px-8 py-2 z-50 hidden md:block">
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* 📱 Mobile Navigation (Floating Menu Button) */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="rounded-full backdrop-blur-xl border border-border shadow-sm"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* 📋 Mobile Menu Drawer */}
      {isOpen && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 w-[90%] bg-card border border-border rounded-2xl shadow-lg py-4 text-center backdrop-blur-xl md:hidden z-40 animate-in fade-in slide-in-from-top-5">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors hover:text-primary hover:bg-primary/5 ${
                pathname === item.href ? "text-primary bg-primary/10" : "text-muted-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
