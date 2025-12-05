"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Heart, Stethoscope, ShoppingBag, Users } from "lucide-react"

const features = [
  {
    title: "Smart Matchmaking for Pets",
    description: "Our algorithm finds the perfect playdates based on breed, energy level, and personality compatibility.",
    icon: Heart,
    color: "bg-rose-500/10 text-rose-500",
  },
  {
    title: "Find Verified Vet Doctors",
    description: "Instant access to a network of trusted, rated, and verified veterinary professionals in your area.",
    icon: Stethoscope,
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Shop Premium Pet Food & Accessories",
    description: "Curated marketplace featuring high-quality nutrition and stylish accessories for your furry friends.",
    icon: ShoppingBag,
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    title: "A Social Media Space Designed for Pets",
    description: "Share adorable moments, join breed-specific groups, and connect with a community that understands.",
    icon: Users,
    color: "bg-purple-500/10 text-purple-500",
  },
]

export function Features() {
  return (
    <section className="py-32 bg-secondary/50 relative overflow-hidden">
       {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <Container className="relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight sm:text-5xl mb-6"
          >
            What Makes Petinder Different?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-xl"
          >
            We're not just an app; we're a lifestyle ecosystem for modern pet parents.
          </motion.p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card p-8 rounded-3xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
            >
              <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
