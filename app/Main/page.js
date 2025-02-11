'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import NavBar from "../Components/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import { getItems } from "@/lib/features/dataSlice"
import { Nav } from "reactstrap"
import CatButton from "../Components/catButton"

export default function Main() {

    const router = useRouter()
    const data = useSelector(state=>state.data)
    const dispatch = useDispatch()

    useEffect(()=>{
        if (!data.isLogged) {
            router.push('/')
        } 
        dispatch(getItems())
    }, [dispatch, router])
    const catNum = data.items.filter((val, id, self)=> id === self.findIndex((t)=> (t.category === val.category)))
    console.log(catNum, 'page main')
    return(
        <>
            <NavBar />
            <div className="w-screen h-screen flex flex-row flex-wrap bg-gradient-to-bl from-indigo-200 to-indigo-300">
                <Nav>
                {
                    catNum.map((el,id)=>{
                        return(
                            <CatButton key={id} id={id} el={el} />
                        )
                    })
                }
                </Nav>   
            </div>
        </>
    )

    
}