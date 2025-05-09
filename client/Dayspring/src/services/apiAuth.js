const API_URL = "http://localhost:8000/api/auth"
const API = "http://localhost:8000/api"
export async function CreateUser(userData){
    try{
        const res = await fetch(`${API_URL}/register`,{
            method:'POST',body:JSON.stringify(userData),
            headers:{
                'Content-Type':'application/json'
            }
        }
        )
        if (!res.ok) throw Error()
            const data = await res.json()
        
        return data
    }catch{
        throw Error('Failed in Creating Users')
    }
   
}
export async function LoginUser(userData){
    try{
        const res = await fetch(`${API_URL}/login`,{
            method:'POST',body:JSON.stringify(userData),
            headers:{
                'Content-Type':'application/json'
            }
        }
        )
        if (!res.ok) throw Error()
            const data= await res.json()
        console.log(data)
        return data
        
    }catch{
        throw Error('Invalid Credentials')
    }
   
}
export async function GetProduct (){
    try{
        const res = await fetch(`${API}/products`)
        if(!res.ok) throw  Error()
            const data = await res.json()
        console.log(data)
        return data
    }catch{
        throw Error ("could not get products")
    }
}
