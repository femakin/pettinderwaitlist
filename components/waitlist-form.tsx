"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { CheckCircle2, Loader2, MapPin, Mail, PawPrint } from "lucide-react"
import { cn } from "@/lib/utils"

export function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    
    setStatus("success")
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-8 text-center bg-background/50 rounded-xl border border-primary/20"
      >
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ type: "spring", bounce: 0.5 }}
        >
          <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
        <p className="text-muted-foreground text-sm">
          We'll notify you as soon as Petinder is ready for you and your pet.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative group">
        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <Input
          required
          type="email"
          placeholder="Enter your email address"
          className="pl-10 bg-background/80 backdrop-blur-sm border-border/60 focus:border-primary focus:ring-primary/20 transition-all h-12"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="relative group">
           <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
           <Input
            required
            placeholder="City"
            className="pl-10 bg-background/80 backdrop-blur-sm border-border/60 focus:border-primary focus:ring-primary/20 transition-all h-12"
          />
        </div>
        <div className="relative group">
          <PawPrint className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary z-10 transition-colors" />
          <Select required defaultValue="" className="pl-10 bg-background/80 backdrop-blur-sm border-border/60 focus:border-primary focus:ring-primary/20 transition-all h-12">
            <option value="" disabled>Pet Type</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="both">Both</option>
            <option value="other">Other</option>
          </Select>
        </div>
      </div>
      
      <Button
        type="submit"
        size="lg"
        className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-0.5"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Joining...
          </>
        ) : (
          "Join the Waitlist"
        )}
      </Button>
    </form>
  )
}
