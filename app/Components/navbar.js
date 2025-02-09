'use client'

import { useState } from "react"
import { Button, Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from "reactstrap"

export default function NavBar() {

    const [isOpen,setIsOpen] = useState(false)
    const toggle =()=> setIsOpen(!isOpen)

    return(
        <Navbar className="w-screen h-auto bg-gradient-to-bl from-lime-200 to-lime-200 shadow-gray-100">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="flex flex-row justify-end" navbar>
                    <NavItem>
                        <Button size="sm" color="secondary">Sign Out</Button> 
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}