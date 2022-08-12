import { useEffect, useState } from "react"
import { callLogout } from "./Contact"
import { WindowSharp } from "@mui/icons-material"
import { Login } from "./Login"
import { Button } from "@mui/material"


export const Home=()=>{

    const[logview,Setlogview]=useState(false)

    const check=()=>{
        const t=sessionStorage.getItem("valid")

        if(t){
            Setlogview(false)
        }
        else
        {
            Setlogview(true)
        }

    }

    useEffect(()=>{
        //sessionStorage.removeItem("valid")
        check()
    },[])


    return(
        <>
            {
                (logview)? <Login/>
                :
                <>
                    <h1>This is Home page</h1>
                    <Button color="warning" onClick={async()=>{
                        await callLogout()
                        window.location.assign("/")
                    }}>

                    Logout  
                    </Button>

                </>
            }

        </>
    )

}