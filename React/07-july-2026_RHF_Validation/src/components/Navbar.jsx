
const Navbar = ({setToggle}) =>{


    return (
        <div>
            <nav className="flex justify-between bg-purple-500">
                <div>
                    <img src="./public/vite.svg" />
                </div>

                <div className="flex gap-5">
                    <div>Home</div>
                    <div>About</div>
                    <div>Contact</div>
                </div>

                <button onClick={()=>
                    setToggle((prev)=>!prev)
                }
                className="px-2 py-1 rounded bg-sky-500 text-white">Create</button>
            </nav>
        </div>
    )
}

export default Navbar;