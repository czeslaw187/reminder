'use client'

import { logging } from "@/lib/features/dataSlice"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from "reactstrap"

export default function NavBar() {

    const data = useSelector(state=>state.data)
    const dispatch = useDispatch()
    const [isOpen,setIsOpen] = useState(false)
    const toggle =()=> setIsOpen(!isOpen)
    
    function signOut() {
        dispatch(logging(!data.isLogged))
    }

    return(
        <Navbar className="w-screen h-auto bg-gradient-to-bl from-lime-200 to-lime-200 shadow-gray-100">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="flex flex-row justify-end" navbar>
                    <NavItem>
                        <Button size="sm" color="secondary" onClick={signOut}>Sign Out</Button> 
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}