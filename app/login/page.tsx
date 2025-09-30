import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"
import { Users } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/10">
      <Link href="/" className="flex items-center gap-2 mb-8">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
          <Users className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="text-xl font-bold text-foreground">SkillSwap Hub</span>
      </Link>
      <LoginForm />
    </div>
  )
}
