'use client'

import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addItem, addName } from "@/lib/features/dataSlice";
import { getDataToken } from "@/lib/features/dataSlice";

export default function Home() {

  const [cont,setCont] = useState({})
  const data = useSelector(state => state.data)
  const dispatch = useDispatch()

  function handleChange(e) {
    setCont({...cont, [e.target.name]:e.target.value})
  }

  function onSubmit(e) {
  e.preventDefault()
  console.log(data)
  dispatch(addName({name:''}))
  dispatch(getDataToken(cont))
}  
  return (
    <div className="w-screen h-screen flex flex-col bg-gradient-to-bl from-indigo-200 to-indigo-300">
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input id="name" name="name" placeholder="Enter your name..." onChange={(e)=>{handleChange(e)}} />
          <Label for="item">Item</Label>
          <Input id="item" name="item" placeholder="Enter items name..." onChange={(e)=>{handleChange(e)}}/>
        </FormGroup>
        <Button size="lg" color="success" onClick={(e)=>{onSubmit(e)}}>Submit</Button>
      </Form>
    </div>
  );
}
