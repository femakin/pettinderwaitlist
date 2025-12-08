"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { WaitlistForm } from "@/components/waitlist-form"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden bg-background">
      {/* Modern Gradient Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/10 blur-[120px] rounded-full opacity-50 pointer-events-none" />
      
      <Container className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-8 text-center lg:text-left"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit mx-auto lg:mx-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Coming Soon
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] text-balance">
              Petinder: Because Your Pet Deserves <span className="text-primary">Love</span> Too
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed text-balance">
              Love, Companionship & Wellness, All in One Place. Join the exclusive waitlist for the ultimate pet community.
            </p>
          </div>

          <div id="waitlist-form" className="w-full max-w-md mx-auto lg:mx-0 bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-2">
             <WaitlistForm />
          </div>
          
          <div className="flex items-center gap-4 justify-center lg:justify-start text-sm text-muted-foreground">
             <div className="flex -space-x-2">
               {[1,2,3,4].map((i) => (
                 <div key={i} className="w-8 h-8 rounded-full bg-muted border-2 border-background flex items-center justify-center overflow-hidden text-xs font-medium">
                   <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} unoptimized alt="User" width={32} height={32} />
                 </div>
               ))}
             </div>
             <p>Join pet lovers waiting</p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[600px] aspect-square lg:order-last"
        >
          {/* Abstract Shapes */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
          
          <div className="relative w-full h-full">
            <Image
              src="/dog_pet_four.svg"
              alt="Happy Pet"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
            
            {/* Floating Elements - Glassmorphism Cards */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute top-50 -left-4 md:left-0 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 max-w-[180px] z-20 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ArrowRight className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Match Found!</p>
                  <p className="text-[10px] text-muted-foreground">Rocky matches with Bella</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -right-4 md:right-0 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 max-w-[180px] z-20 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <span className="font-bold">98%</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Compatibility</p>
                  <p className="text-[10px] text-muted-foreground">Based on preferences</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
