import { useForm } from "react-hook-form"
import { nanoid } from 'nanoid'

const Form = ({setUsers, setToggle, users, updateUser}) => {


    let {register, 
        handleSubmit, 
        reset, 
        formState:{ errors },
    } = useForm({mode:"onChange",
        defaultValues : updateUser,
        // {
        //     name: "atik",
        //     email: "atik@gmail.com"
        // },
    });

    let formSubmit = (inputData) =>{
        // console.log(inputData);
        // setUsers([...users, inputData]); //'users' to hamare pas hai nhi to parent me bane useState ka prev use karenge  
        if(updateUser){

            //update logic
            setUsers((prev)=>{
                //map - method jo array ko manupulate nahin karta, 
                // array will be same just change the  
                return prev.map((userObj)=>{
                    //if the ID of existing userObj is same with current updateUser's ID
                    //then update new-current inputData > will be updated by new ref obj at same place in array
                    //if not same reutrn same userObj
                    return userObj.id === updateUser.id ? {...inputData} : userObj; 
                })

            })

        }else{
            let updatedUsers = [...users, {...inputData, id: nanoid()}]; //to add unique id with obj of user
            // let updatedUsers = [...users, inputData];
            setUsers(updatedUsers);
            localStorage.setItem("users", JSON.stringify(updatedUsers))
        }
        // let updatedUsers = [...users, inputData];
        // setUsers(updatedUsers);  //1 step piche chal rhe the so at the time of setUsers, we storing data in local storage too
        // // setUsers((prev)=>[...prev, inputData])
        // localStorage.setItem("users", JSON.stringify(updatedUsers));
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