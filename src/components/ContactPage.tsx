import React from 'react'
import { Button } from 'flowbite-react'

function ContactPage() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#F7DC6F]" style={{ fontFamily: 'Habanero, sans-serif' }}>
                  Ready to Start Your Solo Adventure?
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/90 md:text-xl text-[#FCF6F5FF] py-8" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Sign up now and get exclusive access to travel tips, destination guides, and community features.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 text-[#FCF6F5FF]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                <form className="flex space-x-2">
                  <input className="max-w-lg flex-1 bg-primary-foreground text-black" placeholder="Enter your email" type="email" />
                  <Button type="submit" >
                    Sign Up
                  </Button>
                </form>
                <p className="text-xs text-primary-foreground/90">
                  By signing up, you agree to our{" "}
                  <a className="underline underline-offset-2" href="#terms">
                    Terms & Conditions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default ContactPage
