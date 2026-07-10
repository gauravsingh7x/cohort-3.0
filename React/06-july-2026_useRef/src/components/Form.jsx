import { useRef, useState } from "react";

const Form = () => {
    console.log("Rerendering..")
   
    // const nameRef = useRef(null);
    // const mobileRef = useRef(null);
    // const cityRef = useRef(null);
    // const imgRef = useRef(null);

    const [inputData, setInputData] = useState();

    let inputRef = useRef({});
    console.log(inputRef);

    const submit = (e) => {
        e.preventDefault();
        //Below > brute force
        // console.log(nameRef.current.value)
        // console.log(mobileRef.current.value)
        // console.log(cityRef.current.value)
        // console.log(imgRef.current.value)

        //this were better but to show > need to set in state so by new ref object
        // console.log(inputRef.current.name.value);
        // console.log(inputRef.current.mobile.value);
        // console.log(inputRef.current.city.value);
        // console.log(inputRef.current.imgURL.value);
        //to show them all > store in new object
        
        let obj = {
        name:inputRef.current.name.value,
        mobile:inputRef.current.mobile.value,
        city:inputRef.current.city.value,
        imgURL:inputRef.current.imgURL.value,
    }
        setInputData(obj);
    }

    return (
        <div className="w-80 h-screen">
            <form 
            onSubmit={submit}
            className="flex flex-col bg-gray-700 gap-4 p-6 rounded" action="">
           
                <input 
                ref={(e)=>inputRef.current.name = e }
                // ref={nameRef}
                // ref={(e)=>(inputRef.current.value =e)}
                // onChange={(e)=>setInputData({...inputData, name:e.target.value})}
                className="p-2 border border-gray-400 rounded"
                type="text" placeholder="Name" />

                <input 
                ref={(ele)=>inputRef.current.mobile = ele}
                // ref={mobileRef}
                // onChange={(e)=>setInputData({...inputData, number:e.target.value})}
                className="p-2 border border-gray-400 rounded"
                type="number" placeholder="Number" />

                <label htmlFor="">City : </label>
                <select 
                ref={(ele)=>inputRef.current.city = ele}
                // ref={cityRef}
                // onChange={(e)=>setInputData({...inputData, city:e.target.value})}
                className="p-2 border border-gray-400 rounded"
                name="city">
                    <option value=""> Select </option>
                    <option value="lucknow">Lucknow</option>
                    <option value="delhi">Delhi</option>
                    <option value="pune">Pune</option>
                    <option value="banglore">Banglore</option>
                </select>

                <input 
                ref={(ele)=>inputRef.current.imgURL = ele}
                // ref={imgRef}
                // onChange={(e)=>setInputData({...inputData, url:e.target.value})}                
                className="p-2 border border-gray-400 rounded"
                type="text" placeholder="imageURL" />

                <button 
                className="p-2 bg-blue-600 text-white rounded">Create User</button>
            </form>

                <h1>Name : {inputData?.name}</h1>
                <h1>Mobile : {inputData?.mobile}</h1>
                <h1>City : {inputData?.city}</h1>
                <h1>ImageURL : {inputData?.imgURL}</h1>


            <label 
            htmlFor="gender"> Select Gender: 
                Male <input name="gender" type="radio" id="gender" value="male" /> &nbsp;
                Female <input name="gender" type="radio" id="gender" value="female" /> &nbsp;
                Others <input name="gender" type="radio" id="gender" value="others" /> &nbsp;
            </label>

            <label 
            htmlFor="intrest"> Hobbies : 
                Coding <input name="intrest" type="checkbox" id="intrest" value="coding"/>&nbsp;
                Travel <input name="intrest" type="checkbox" id="intrest" value="travel"/>&nbsp;
                Fame <input name="intrest" type="checkbox" id="intrest" value="fame"/>&nbsp;
            </label>


        </div>
    )
}

export default Form