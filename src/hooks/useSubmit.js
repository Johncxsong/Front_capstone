import {useState} from "react";

const wait = (ms) => new Promise((res)=>setTimeout(res,ms));

const useSubmit = () =>{

    const[isLoading, setLoading] = useState(false);
    const[response, setResponse] = useState(null);

    const submit = async (url,data)=>{
        const random = Math.random();
        setLoading(true);
        try{
            await wait(2000);
            if(random<0.5){
                throw new Error("Something went wrong");
            }
            setResponse({
                type:'success',
                message:`Thanks for your submission ${data.name}, we will get back to you shortly!`
            })
        }catch(e){
            setResponse({
                type:'Error',
                message:'Somthing went wrong, please try again later!',
            })
        }finally{
            setLoading(false);
            alert(response.message);
        }
    };


    return{isLoading, response, submit};
};

export default useSubmit;
