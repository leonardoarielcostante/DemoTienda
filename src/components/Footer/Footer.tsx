"use client"
import React from "react"

export type FooterProps = {
  // types...
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="h-36 w-full bg-black text-white p-4  text-lg">
      <div className="w-full flex items-center relative">
        <div className="text-nowrap">
          <p className="text-xl font-bold">CONTACT US</p>
          <p>Testemail@gmail.com</p>
          <p>1234 Elm Street, Springfield, IL 62701</p>
          <p>563 291 0475</p>
        </div>
        <div className="w-full flex justify-center absolute">
          <p>© DemoStore all rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
