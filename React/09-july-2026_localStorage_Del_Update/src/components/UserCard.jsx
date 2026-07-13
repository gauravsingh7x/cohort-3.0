

const UserCard = ({user, setToggle, deleteUser, id}) =>{

    
    return (
        <div className="p-5 flex flex-col items-center gap-5 bg-sky-300 h-80 w-60">
            <div className="w-40 h-40 border flex items-center justify-center border-amber-300">
                <img src={user.image} alt="Image"/>
            </div>

            <div className="flex flex-col pl-5 self-start">
            <h1>Name - {user.name} </h1>
            <h1>Email - {user.email} </h1>
            <h1>Email - {user.email} </h1>
            <h1>Contact - {user.password} </h1>
            </div>

            <div className="flex gap-1">
                <button onClick={()=>{
                    setToggle((prev)=>!prev)
                }}
                className="bg-purple-500 px-2 rounded-xl">Update</button>
     
                <button 
                onClick={()=>deleteUser(id)
                // onClick={()=>deleteUser(user.name)
                // onClick={()=>console.log(user.idx);
                }
                className="bg-purple-500 px-2 rounded-xl">Delete</button>
            </div>

        </div>
    )
}


export default UserCard;