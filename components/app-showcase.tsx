"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export function AppShowcase() {
  return (
    <section className="py-32 overflow-hidden bg-background">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight sm:text-5xl mb-6"
          >
            Designed for Joy & Simplicity
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-muted-foreground text-xl"
          >
            A beautiful interface that makes managing your pet's life effortless.
          </motion.p>
        </div>

        <div className="relative flex justify-center items-center perspective-[2000px]">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent w-full h-[120%] -z-10 rounded-[100px] blur-3xl" />
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-12 items-center justify-items-center max-w-5xl mx-auto">
             <motion.div 
                initial={{ opacity: 0, y: 50, rotateY: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-[240px] h-[500px] md:w-[280px] md:h-[580px] md:translate-y-12 z-10"
             >
               <Image
                 src="/home_screen_one.svg"
                 alt="Petinder Home Screen 1"
                 fill
                 className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
               />
             </motion.div>
             
             <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-[260px] h-[540px] md:w-[320px] md:h-[660px] z-20"
             >
               <Image
                 src="/Home_screen.svg"
                 alt="Petinder Main Screen"
                 fill
                 className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
               />
             </motion.div>

             <motion.div 
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative w-[240px] h-[500px] md:w-[280px] md:h-[580px] md:translate-y-12 z-10"
             >
               <Image
                 src="/home_screen_two.svg"
                 alt="Petinder Home Screen 2"
                 fill
                 className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
               />
             </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
