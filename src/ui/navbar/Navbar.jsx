import React from 'react'
import { usePathname } from 'react-router-dom'

const links = [
	{ label: "Home", href: "/home" },
	{ label: "About", href: "/about" },
	{ label: "Links", href: "/links" },
];
  
export const Navbar = () => {
  const pathname = `/${usePathname().split("/")[1]}`

  return (
	<div>Navbar</div>
  )
}
