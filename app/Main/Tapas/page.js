'use client'

import HomeButton from "@/app/Components/homeButton";
import NavBar from "@/app/Components/navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Lora } from "next/font/google";

const lora = Lora({
    subsets: ['latin'],
    weight: '400'
})

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
            <div className="w-screen h-auto flex flex-col md:flex-row flex-wrap justify-between bg-gradient-to-tr from-amber-200 to-slate-950">
                
                
                {
                    data.items.map((item,id)=>{
                        return(
                            <div key={id} className={`w-full md:w-[30%] h-[30rem] flex flex-col flex-wrap bg-gradient-to-tr from-cyan-200 to-slate-700 rounded-sm mx-3 my-2 text-sm ${lora.className}`}>
                                <div className="w-full h-[60%] relative">
                                    <Image alt={item.name} src={`/${item.name}.jpg`} objectFit="fill" fill/>
                                </div>
                                <div className="text-center text-lg border-b-2 my-1">{item.name}</div>
                                <div className="text-center my-auto">{item.description}</div>
                                <div className="text-left mt-auto p-1 text-lg">Price: £{item.price}</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}