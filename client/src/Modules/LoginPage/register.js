import React, { useState, useEffect } from 'react';
import {FormProvider, useForm} from "react-hook-form";
import axios from "axios";
import clsx from "clsx";
import { useSignUpFormValidator } from "./hooks/SignUpValidate.js";
import { useNavigate, Link } from "react-router-dom"
import "../../assets/styles/css/login.css"


const SignupForm = (props) => {
    //useForm hook
    const {
        register,
        formState: { errors },
        getValues,
        handleSubmit
      } = useForm({
        mode: "all" // "onChange"
      });

    const methods = useForm();
    const [success, setSuccess] = useState(false);

    const onSubmit = methods.handleSubmit(data => {
        console.log(data);
        methods.reset()
        setSuccess(true);
    } )
    return (
        <div className="form-box">
            <h1>Signup</h1>
            <FormProvider {...methods}>        
            <form className="signup" onSubmit={e => e.preventDefault} noValidate>
                <div className="field">
                    <input {...register("name", {required: "Name must not be blank"})} 
                            type="text" className="formField" name="name" id="name" placeholder='Name'/>
                    {errors.name && <p className="errorMsg">{errors.name.message}</p>}
                </div>
                <div className="container">
                    <div className="field">
                        <input {...register("email", 
                                {required: "Email must not be blank",
                                pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Invalid email"}
                                })} type="email" className="formField" name="email" id="email" placeholder='Email'/>
                        {errors.email && <p className="errorMsg">{errors.email.message}</p>}
                    </div>
                    <div className="field">
                        <input {...register("phone",
                                {pattern: {
                                    value:/^\d{7,15}$/,
                                    message: "Invalid phone number",}
                                })} type="text" className='formField' name="phone" id="phone" placeholder="Phone number"/>
                        {errors.phone && <p className="errorMsg">{errors.phone.message}</p>}
                    </div>
                </div>
                    <div class="field">
                    <input type="text" name="address" id="address" placeholder='Address'/>
                </div>
                <div class="container">
                    <div class="field">
                        <input {...register("password", {
                                required: true,
                                validate: {
                                    checkLength: (value) => value.length >= 6, 
                                    matchPattern: (value) => /^(?=.*[\W_])(?=.*[A-Z]).+$/.test(value)}
                                })} type="password" name="password" id="password" placeholder='Password'/>
                        {errors.password?.type === "required" && <p className="errorMsg">Password is required</p> }
                        {errors.password?.type === "checkLength" && <p className="errorMsg">Password must have at least 6 characters</p> }
                        {errors.password?.type === "matchPattern" && <p className="errorMsg">Password must contains at least one capitalized letter and a special symbol</p> }
                        
                    </div>
                    <div class="field">
                        <input {...register("confirmPassword", {
                            validate: (match) => {
                                const password = getValues("password")
                                return match === password || "Password does not match"}
                            }), {required: "Please re-enter password"}}
                            type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm your password'/> 
                        {errors.confirmPassword && <p className="errorMsg">{errors.confirmPassword.message}</p>}
                    </div>
                </div>
                <br />
                <div className="field">
                    <input type="submit" onClick={onSubmit} value="Signup" />
                </div>
            </form>
            </FormProvider>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    )};

export default SignupForm;




