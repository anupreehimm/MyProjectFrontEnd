import axios from "axios";

const url="http://localhost:8080/MyProject"

const m="murugan:kgmurugan"
    const tok=btoa(m)

export const callLogout=async()=>{
    await axios.get(`${url}/logout`)
    sessionStorage.removeItem("valid")
    return;
}

export const callLogin=async(obj)=>{
    const credentials=obj.username+":"+obj.password
    const token=btoa(credentials)
    //alert(token)

    try{
        const t = await axios.get(`${url}/`,{headers:{"Authorization":`Basic ${token}`}})
        if(t.data){
            sessionStorage.setItem("valid",token)
        }
        return t;
    }
    catch(hai){
        alert(hai)
    }

}
export const callSimpleReturn=async()=>{
    const receiv=await axios.get(`${url}/askint`,{
        headers:{"Authorization":`Basic ${tok}`}
    })
    
    return receiv;
}

export const passByBody=async()=>{
    const oj={
        "tvId":12568,
        "model":"Ultra",
        "brand":"Panasonic",
        "cost":42000,
        "inches":31.5,
        "type":"HD"
    }
    await axios.post(`${url}/posting`,oj,{
        headers:{"Authorization":`Basic ${tok}`}
    })
}


export const sampleCall=async()=>{
    const hey="Anu and Silviya";
    const hehe=444;

    await axios.get(`${url}/pass/${hey}/${hehe}`,{
    headers:{"Authorization":`Basic ${tok}`}
    })
}

export const testCall=async()=>{
    
    await axios.get(`${url}/haithere`,{
        headers:{"Authorization":`Basic ${tok}`}
    })


}