import Link from "next/link"
import { ModeToggle } from "./ModeToggle"
import { CodeIcon } from "lucide-react"
import { SignedIn, UserButton } from "@clerk/nextjs"
import DashboardBtn from "./DashboardBtn"

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* LEFT SIDE -LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
        >
          <span className="bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
            HireGo
          </span>
        </Link>

        {/* RIGHT SIDE - ACTIONS */}
        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DashboardBtn />
            <ModeToggle />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  )
}

export default Navbar
