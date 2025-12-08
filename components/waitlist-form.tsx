"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { CheckCircle2, Loader2, MapPin, Mail, PawPrint, User } from "lucide-react"

interface PetType {
  id: number;
  name: string;
}

export function WaitlistForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [petTypes, setPetTypes] = useState<PetType[]>([])
  const [isLoadingPetTypes, setIsLoadingPetTypes] = useState(true)

  useEffect(() => {
    const fetchPetTypes = async () => {
      try {
        const response = await fetch('/api/pet-types')
        if (response.ok) {
          const data = await response.json()
          setPetTypes(data)
        }
      } catch (error) {
        console.error('Failed to fetch pet types', error)
      } finally {
        setIsLoadingPetTypes(false)
      }
    }

    fetchPetTypes()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    const formData = new FormData(e.currentTarget)
    const data = {
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      country: formData.get('country'),
      pet_type: Number(formData.get('pet_type')), // API expects number ID
      gender: formData.get('gender')
    }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.error || 'Something went wrong')
      }
      
      setStatus("success")
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Failed to join waitlist")
    }
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
       {/* Name Fields */}
       <div className="grid grid-cols-2 gap-4">
        <div className="relative group">
          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            required
            name="first_name"
            placeholder="First Name"
            className="pl-10 bg-background/80 backdrop-blur-sm border-border/60 focus:border-primary focus:ring-primary/20 transition-all h-12"
          />
        </div>
        <div className="relative group">
          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <Input
            required
            name="last_name"
            placeholder="Last Name"
            className="pl-10 bg-background/80 backdrop-blur-sm border-border/60 focus:border-primary focus:ring-primary/20 transition-all h-12"
          />
        </div>
      </div>

      <div className="relative group">
        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <Input
          required
          type="email"
          name="email"
          placeholder="Enter your email address"
          className="pl-10 bg-background/80 backdrop-blur-sm border-border/60 focus:border-primary focus:ring-primary/20 transition-all h-12"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="relative group">
           <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
           <Input
            required
            name="country"
            placeholder="Country"
            className="pl-10 bg-background/80 backdrop-blur-sm border-border/60 focus:border-primary focus:ring-primary/20 transition-all h-12"
          />
        </div>
        <div className="relative group">
          <PawPrint className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-focus-within:text-primary z-10 transition-colors" />
          <Select required name="pet_type" defaultValue="" className="pl-10 bg-background/80 backdrop-blur-sm border-border/60 focus:border-primary focus:ring-primary/20 transition-all h-12">
            <option value="" disabled>
              {isLoadingPetTypes ? "Loading..." : "Pet Type"}
            </option>
            {petTypes.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </Select>
        </div>
      </div>
      
      <div className="relative group">
         <Select required name="gender" defaultValue="" className="bg-background/80 backdrop-blur-sm border-border/60 focus:border-primary focus:ring-primary/20 transition-all h-12">
            <option value="" disabled>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="prefer_not_to_say">Prefer not to say</option>
          </Select>
      </div>

      {status === "error" && (
        <p className="text-xs text-destructive text-center font-medium">
          {errorMessage}
        </p>
      )}
      
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
