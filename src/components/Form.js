import React,{useEffect, useState} from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
  } from "@chakra-ui/react";

import '../App.css';
import useSubmit from '../hooks/useSubmit';



const Form = () =>{

    // form attributes
    const{isLoading, response, submit} = useSubmit();
    const[date, SetDate] = useState();

    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            guests:"",
            date: date,
            special:"",
        },
        onSubmit: (value)=>{
            submit('https://john.com/contactme', value);
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string().email('Invalid email address').required("Required"),
            guests: Yup.number().required().positive().integer(),
            date: Yup.string().required("Required")
        })
    });

    // reset
    useEffect(()=>{
        if(response){
            if(response.type ==='success'){
                formik.resetForm();
            }
        }
    },[response]);


    return(
        <VStack w='1024px' p={32} alignItems="flex-start">
            <Heading as='h1' id='booking-table'>Booking Table</Heading>
            <Box p={6} rounded="md" w="100%">
                <FormControl isInvalid={!!formik.errors.name && formik.touched.name}>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input
                        id="name"
                        name="name"
                        {...formik.getFieldProps("name")}
                    />
                    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        {...formik.getFieldProps("email")}
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!formik.errors.guests && formik.touched.guests}>
                    <FormLabel htmlFor="guests">Guests</FormLabel>
                    <Input
                        id="guests"
                        name="guests"
                        {...formik.getFieldProps("guests")}
                    />
                    <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="date">Time</FormLabel>
                        <DatePicker
                            selected={date}
                            onChange={e=>SetDate(e)}
                            showTimeSelect
                            dateFormat="Pp"
                        />
                    
                </FormControl>

                <Button type="submit" colorScheme="blue" width="full" isLoading={isLoading}>
                  Submit
                </Button>
            </Box>
        </VStack>
    );
};


export default Form;

{/* <div className='booking-table'>
<form onSubmit={handleSubmit}>
    <fieldset>
        <h2>Booking Table</h2>

        <div className='field'>
            <label>Name: </label>
            <input value={Name}
                    onChange={e=>setName(e.target.value)}
                    placeholder='Please enter your name'
                    required
            />
        </div>

        <div className='field'>
            <label>Guest: </label>
            <input value={number}
                    onChange={e=>setNumber(e.target.value)}
                    placeholder='please enter total guests'
                    required
            />
        </div>

        <div className='field'>
            <label>Email: </label>
            <input value={email}
                    onChange={e=>setEmail(e.target.value)}
                    placeholder='Please enter email'
                    required
            />
        </div>

        <div className='field'>
            <label>Time: </label>
            <DatePicker
                selected={date}
                onChange={handleDateChange}
                showTimeSelect
                dateFormat="Pp"
            />
        </div>


        <button type='submit'>
            Submit
        </button>

    </fieldset>

</form>
</div> */}