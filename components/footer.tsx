import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <Container className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <span className="text-xl font-bold">Petinder</span>
        </div>
        <div className="flex gap-8 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Petinder. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}

