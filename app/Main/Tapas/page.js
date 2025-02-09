'use client'

import HomeButton from "@/app/Components/homeButton";
import NavBar from "@/app/Components/navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Tapas() {

    const data = useSelector(state=>state.data)
    const router = useRouter()

    useEffect(()=>{
        if (!data.isLogged) {
            router.push('/')
        }
    },[router])
    
    return(
        <>
            <NavBar/>
            <HomeButton />
            <div>Tapas Page</div>
        </>
    )
}