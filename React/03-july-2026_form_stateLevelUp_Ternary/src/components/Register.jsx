import { useState } from "react";

const Register = ({setToggle, setUsers}) => {
    //to get and handle input
    const [formInput, setFormInput] = useState({
        name : "",
        email: "",
        password: "",
    });
    //to store users data in array
    // const[users, setUsers] = useState([]);
    // console.log(users);
    // recreate in App.jsx

    const handleOnChange = (e) => {
        let {name, value} = e.target;   
        setFormInput({...formInput, [name]:value}); 
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(formData);
        // users.push(formData); //will work but do not rerender
        // setUsers([...users, formInput]);
        setUsers((prev)=>[...prev, formInput]);
        setFormInput({
            image: "",
            name: "",
            email: "",
            password: "",
        })
    }


return (
    <div className="bg-white w-90 p-6 rounded-xl">
        <form onSubmit={handleSubmit} action="">
        <fieldset className="border border-gray-300 flex flex-col gap-5">
            <legend className="ml-2">Register</legend>
                <input 
                required
                value={formInput.image} // for two way binding
                onChange={handleOnChange}
                name="image"
                className="p-2 border border-gray-300 rounded"
                type="url" placeholder="Image Url" />

                <input 
                required
                value={formInput.name} // for two way binding
                onChange={handleOnChange}
                name="name"
                className="p-2 border border-gray-300 rounded"
                type="text" placeholder="Name" />

                <input 
                required
                value={formInput.email}
                onChange={handleOnChange}
                name="email"
                className="p-2 border border-gray-300 rounded"
                type="Email" placeholder="Email" />

                <input 
                required
                onChange={formInput.password}
                onChange={handleOnChange}
                name="password"
                className="p-2 border border-gray-300 rounded"
                type="password" placeholder="Password" />
                <button className=" hover:bg-purple-500 py-2 bg-sky-500 text-white rounded">Submit</button>
        </fieldset>
        </form>
        <p>Already have an Account? <span onClick={()=>{
            setToggle((prev)=>!prev);
            // setToggle(true);
            // console.log("clicked");
        }} 
        className="text-blue-600 cursor-pointer">Login here</span></p>
    </div>
    )
}

export default Register;