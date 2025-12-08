"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

const pets = [
  { src: "/cat_pet_one.svg", alt: "Curious Cat", delay: 0 },
  { src: "/dog_pet_one.svg", alt: "Happy Dog", delay: 0.1 },
  { src: "/cat_dot_pet_two.svg", alt: "Playful Cat", delay: 0.2 },
]

export function PetShowcase() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/30 -skew-y-3 origin-top-left scale-110" />
      
      <Container className="relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl font-bold tracking-tight sm:text-5xl mb-6"
          >
            Join the Petinder Pack
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-muted-foreground text-xl"
          >
            Every pet has a story. Join thousands of others waiting to share theirs.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center items-end gap-12 md:gap-24">
          {pets.map((pet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: pet.delay, 
                type: "spring", 
                stiffness: 100 
              }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative w-48 h-48 md:w-72 md:h-72 transition-transform duration-300">
                 <Image
                   src={pet.src}
                   alt={pet.alt}
                   fill
                   className="object-contain drop-shadow-xl"
                   sizes="(max-width: 768px) 192px, 288px"
                 />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
