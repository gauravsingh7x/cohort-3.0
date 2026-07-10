import { useForm } from "react-hook-form"


const Form = ({setUsers, setToggle}) => {




    let {register, 
        handleSubmit, 
        reset, 
        formState:{ errors },
    } = useForm({mode:"onChange"});

    let formSubmit = (inputData) =>{
        console.log(inputData);
        // setUsers([...users, inputData]); //'users' to hamare pas hai nhi to parent me bane useState ka prev use karenge  
        setUsers((prev)=>[...prev, inputData])
        reset(); 
        setToggle((prev)=>!prev);
    }


    return (
        <div className="flex flex-col items-center gap-2">
            <h1>Create User</h1>
            <form onSubmit={handleSubmit(formSubmit)}
            className="flex flex-col gap-3 w-90 p-4 bg-black rounded border-2 border-white" >          

            <input {...register("name",{required:"Name is Required"})} 
            className="p-2 rounded outline-0 border border-white text-white" type="text" placeholder="Name" />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}

            <input {...register("email",{required:"Email is Required",
                pattern:{
                    value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message:"Please enter the valid email"
                }
            })}
            className="p-2 rounded outline-0 border border-white text-white" type="email" placeholder="Email" />
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}

            <input {...register("mobile",{required:"Mobile is Required",
                minLength:{
                    value:10,
                    message:"Min Length is 10"
                },
                maxLength:{
                    value:10,
                    message:"Max Length is 10"
                }
            })}
            className="p-2 rounded outline-0 border border-white text-white" type="number" placeholder="Mobile" />
            {errors.mobile && <span className="text-red-500">{errors.mobile.message}</span>}

            <input {...register("password",{required:"Password is Required",
                pattern:{
                    value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:"8-character mixed criteria"
                }
            })}
            className="p-2 rounded outline-0 border border-white text-white" type="password" placeholder="Password" />
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}

            <input {...register("url", {required:"Image URL is Required"})}
            className="p-2 rounded outline-0 border border-white text-white" type="url" placeholder="Image Url" />
            {errors.url && <span className="text-red-500">{errors.url.message}</span>}

            <button 
            className="text-white bg-blue-700 px-1 py-0.5 rounded-xl cursor-pointer">Submit</button>                
            </form>

        </div>
    )
}

export default Form;