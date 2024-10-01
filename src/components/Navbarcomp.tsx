import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export function Navbarcomp() {
  return (
    <Navbar fluid className="bg-background py-6">
      <NavbarBrand href="#abt">
        <span className="self-center whitespace-nowrap text-4xl font-bold text-[#FCF6F5FF]" style={{ fontFamily: 'Habanero, sans-serif' }}>Sv</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <NavbarToggle className="bg-[##97bfbd]" />
      </div>
      <NavbarCollapse className="bg-[##97bfbd]">
        <NavbarLink className="text-[#FCF6F5FF] text-xl font-bold" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }} href="#abt">About Us</NavbarLink>
        <NavbarLink className="text-[#FCF6F5FF] text-xl font-bold" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }} href="#destinations">Destinations</NavbarLink>
        <NavbarLink className="text-[#FCF6F5FF] text-xl font-bold" style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }} href="#contact">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
