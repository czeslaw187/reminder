'use client'

import HomeButton from "@/app/Components/homeButton";
import NavBar from "@/app/Components/navbar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, CardBody, CardFooter, CardHeader, CardText } from "reactstrap";

export default function Tapas() {

    const data = useSelector(state=>state.data)
    const router = useRouter()

    useEffect(()=>{
        if (!data.isLogged) {
            router.push('/')
        }
    },[router])
    console.log(data.items,'tapas page')
    return(
        <>
            <NavBar/>
            <HomeButton />
            <div className="w-screen h-screen flex flex-row bg-gradient-to-bl from-indigo-200 to-indigo-300">
                
                
                {
                    data.items.map((item,id)=>{
                        return(
                            <div key={id} className="w-[18rem] h-[20rem] flex flex-col flex-wrap bg-indigo-100 rounded-sm mx-3 my-2">
                                <div className="text-center text-lg border-b-2 my-3">{item.name}</div>
                                <div className="text-center my-auto">{item.description}</div>
                                <div className="text-left mt-auto p-2">Price: £{item.price}</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}