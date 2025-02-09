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
            <div className="w-screen h-screen flex flex-col bg-gradient-to-bl from-indigo-200 to-indigo-300">
                <NavBar/>
                <HomeButton />
                {
                    data.items.map((item,id)=>{
                        return(
                            <Card className="w-[18rem] mx-5" key={id}>
                                <CardHeader>
                                    <CardText>{item.name}</CardText>
                                </CardHeader>
                                <CardBody>
                                    <CardText>{item.description}</CardText>
                                </CardBody>
                                <CardFooter>
                                    <CardText>{item.price}</CardText>
                                </CardFooter>
                            </Card>
                        )
                    })
                }
            </div>
        </>
    )
}