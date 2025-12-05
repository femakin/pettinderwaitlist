"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

export function Navbar() {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md border-border/40 py-3 shadow-sm" : "bg-transparent py-6"
      )}
    >
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-8 h-8 transition-transform group-hover:scale-110 duration-300">
            <Image
              src="/pettinderlogo-dark.svg"
              alt="Petinder Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-2xl font-extrabold tracking-tight">Petinder</span>
        </div>
        <nav className="flex items-center gap-6">
          <Button 
             size="sm" 
             onClick={scrollToWaitlist}
             className={cn(
               "rounded-full font-semibold transition-all duration-300",
               isScrolled ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-foreground text-background hover:bg-foreground/90"
             )}
          >
            Join Waitlist
          </Button>
        </nav>
      </Container>
    </motion.header>
  )
}
