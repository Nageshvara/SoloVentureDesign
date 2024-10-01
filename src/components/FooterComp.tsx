import React from 'react'

function FooterComp() {
  return (
    <div>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t text-[#FCF6F5FF]">
        <p className="text-xs text-muted-foreground">© 2024 SoloVenture. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#terms">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#privacy">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}

export default FooterComp
