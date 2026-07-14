
const Login = ({setToggle}) => {

    return (
        <div className="bg-white w-90 p-6 rounded-xl">
            <form action="" className="">
            <fieldset className="border border-gray-300 flex flex-col gap-5">
                <legend className="ml-2">Login</legend>
                    <input className="p-2 border border-gray-300 rounded" type="Email" placeholder="Email" />
                    <input className="p-2 border border-gray-300 rounded" type="password" placeholder="Password" />
                    <button className="hover:bg-purple-500 py-2 bg-sky-500 text-white rounded">Submit</button>
            </fieldset>
            </form>

            <p>Didn't have an Account? <span onClick={()=>{
                setToggle((prev)=>!prev)
                // setToggle(false);
            }}
            
            className="text-blue-600 cursor-pointer">Register here</span></p>

        </div>
    )
}

export default Login;