import axios from 'axios'

export const fetchSecrets = async(id) =>{
    // console.log(id)
    const {data} =  await axios.get(`http://localhost:3700/secrets/${id}`);
    console.log(data)
    return data
}


 export const addSecret = async (secret)=>{
    const res = await axios.post('http://localhost:3700/secrets', secret);
    // console.log(res.data)
    return res.data.id
}


export const validSecret = async(id, password) =>{
    try {
        console.log(id, password)
        const res = await axios.post(`http://localhost:3700/private/${id}`,{password});
        // console.log(res)
        
        return res.data

    } catch (error) {
        // console.log(error.data)
        return error.data
        
    }
   
}
