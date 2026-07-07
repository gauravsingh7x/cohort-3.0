import { useState } from "react";

const Form = () => {

    // 1. Bruteforce approach => jitne inputs utne useState 
    // const [name, setName] = useState("");
    // console.log(name);
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");


    // 2. better -> to avoid repeated code like jitne inputs utne setInputs  
    const [formData, setFormData] = useState({
        // name: "",
        // email: "",
        // password: "",
    });
    console.log("formData->", formData)
    let handleOnChange = (e) => {
        // console.log(e.target.name); //name unique input se target hoga
        // console.log(e.target.value); 

        // setFormData({...setFormData, [e.target.name]: e.target.value})

        let {name, value} = e.target;
            // destructre
        setFormData({...formData, [name]:value})   
    }
    


    return (
        <div className="flex flex-col gap-5 w-60 m-25">
            <h1>Name is - {formData.name}</h1>
            <h1>Email is - {formData.email} </h1>
            <h1>Password is - {formData.password} </h1>

            <input 
            name="name"
            onChange={ handleOnChange
                // setFormData(e.target.value) 
                // setName(e.target.value)
                // console.log(e.target.value)
            }
            className="border-2"
            type="text"
            placeholder="Name"/>
            
            <input 
            name="email"
            onChange={handleOnChange}
            className="border-2" 
            type="email" 
            placeholder="Email"/>

            <input 
            name="password"
            onChange={handleOnChange}
            className="border-2" 
            type="password" 
            placeholder="Password" />

            <button 
            className="px-5 py-1 bg-amber-600 rounded">Submit</button>

        </div>
    )
}

export default Form;