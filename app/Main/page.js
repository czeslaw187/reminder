'use client'

import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"

export default function Main() {

    const data = useSelector(state=>state.data)
    const router = useRouter()

    if (!data.isLogged) {
        router.push('/')
    }

    return(
        <div className="w-screen h-screen flex flex-col bg-gradient-to-bl from-indigo-200 to-indigo-300">
            <div className="text-lg text-black">Main Page</div>
        </div>
    )
}