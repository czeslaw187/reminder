'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import NavBar from "../Components/navbar"

export default function Main() {

    const router = useRouter()
    const data = useSelector(state=>state.data)

    useEffect(()=>{
        if (!data.isLogged) {
            router.push('/')
        } 
    })
    
    return(
        <div className="w-screen h-screen flex flex-col bg-gradient-to-bl from-indigo-200 to-indigo-300">
            <NavBar />
            <div className="text-lg text-black">Main Page</div>
        </div>
    )

    
}