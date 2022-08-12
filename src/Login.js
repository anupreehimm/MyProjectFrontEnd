import { AccountCircle, Window } from "@mui/icons-material"
import { WindowSharp } from "@mui/icons-material"
import { Button, InputAdornment, TextField } from "@mui/material"
import FaceIcon from '@mui/icons-material/Face';
import ResetTvIcon from '@mui/icons-material/ResetTv';
import { useState } from "react";
import { callLogin, sampleCall, testCall } from "./Contact";

export const Login=()=>{

    const[user,setUser]=useState({
        "username":"",
        "password":""
    })

    const onCollect=(eve)=>{
        const{name,value}=eve.target
        setUser((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const onLogin=async()=>{
        alert(JSON.stringify(user)+" trying to login")
        const ter= await callLogin(user)
        Window.location.assign("/")
       
    }

    const onReset=()=>{
        setUser(()=>{
            return{
                "username":"",
                "password":""
            }
        })
    }

    return(
        <>
             <div className="mt-5 container">
                <h1 className="text-center text-primary">Login into Television</h1>
                        <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-10 col-sm-12 shadow p-5">
                        <TextField
                            id="input-with-icon-textfield"
                            className="form-control"
                            label="username"
                            name="username"
                            onChange={onCollect}
                            value={user.username}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <AccountCircle />
                                </InputAdornment>
                            ),
                            }}
                            variant="outlined"
                        />

                    <TextField
                    
                        id="outlined-password-input"
                        label="password"
                        name="password"
                        value={user.password}
                        onChange={onCollect}
                        type="password"
                        autoComplete="current-password"
                        className="mt-3 form-control"
                    />

                    <div className="mt-4 row justify-content-around">
                        <Button variant="contained" className="col-1" color="success" onClick={()=>onLogin()}>
                            <FaceIcon />
                        </Button>
                        <Button variant="contained" className="col-1" color="error" onClick={()=>onReset()}>
                            <ResetTvIcon />                          
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        
        </>

    )
}