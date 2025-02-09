'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import NavBar from "../Components/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { getItems } from "@/lib/features/dataSlice"
import { Card, CardBody, CardHeader, NavItem, NavLink, Nav } from "reactstrap"

export default function Main() {

    const router = useRouter()
    const data = useSelector(state=>state.data)
    const dispatch = useDispatch()

    useEffect(()=>{
        if (!data.isLogged) {
            router.push('/')
        } else {
            dispatch(getItems())
        }
    }, [dispatch])
    
    return(
        <>
            <NavBar />
            <div className="w-screen h-screen flex flex-row flex-wrap bg-gradient-to-bl from-indigo-200 to-indigo-300">
                <Nav>
                    <NavItem>
                        <NavLink href={'#'}>
                            <Card className="w-[20rem] mx-4 my-2 text-lg hover:shadow-md hover:shadow-black">
                                <CardBody className="text-center">
                                    TAPAS
                                </CardBody>
                            </Card>
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </>
    )

    
}