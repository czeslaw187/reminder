'use client'

import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addForm, checkDetails } from "@/lib/features/dataSlice";

export default function Home() {

  const [cont,setCont] = useState({})
  const data = useSelector(state => state?.data)
  const dispatch = useDispatch()

  function handleChange(e) {
    setCont({...cont, [e.target.name]:e.target.value})
  }

  function onSubmit(e) {
  e.preventDefault()
  console.log(cont)
  dispatch(checkDetails(cont))
}  

  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-bl from-indigo-200 to-indigo-300">
      <Form>
        <FormGroup className="w-[15rem] h-auto mx-auto mt-5 shadow-sm shadow-slate-800 border-1 rounded-md px-3 py-5 flex flex-col justify-center">
          <Label for="name">Name</Label>
          <Input id="name" name="name" placeholder="Enter your name..." onChange={(e)=>{handleChange(e)}} value={cont?.name || ''}/>
          <Label for="password">Item</Label>
          <Input id="password" name="password" type="password" placeholder="Enter your password..." onChange={(e)=>{handleChange(e)}} value={cont?.password || ''}/>
          <Button size="lg" color="success" className="my-3" onClick={(e)=>{onSubmit(e)}}>Submit</Button>
        </FormGroup>
      </Form>
    </div>
  );
}
