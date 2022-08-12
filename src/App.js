import { Login } from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from "@mui/material";
import axios from "axios";
import { sampleCall, testCall } from "./Contact";
import { Home } from "./Home";

const App=()=>{
  return(
    <>
    <Home/>

    
    {/* <Login/> */}
    {/* <Button variant="outlined" color="error" onClick={async()=>{
      await testCall()
    }}>
      call without para and return      
    </Button><br/>

    <Button variant="outlined" color="warning" onClick={async()=>{
          await sampleCall()
        }}>
          call with para as pathvariable and return
        </Button><br/>
    <Button variant="outlined" color="primary" onClick={async()=>{
          await sampleCall()
        }}>
          call with para as pathvariable and return
        </Button><br/> */}

    </>
  )

}

export default App;