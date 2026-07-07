
const Form = () =>{
     
    return (
        <form action="" className="flex flex-col gap-5 w-100 h-500 border ml-25">

          <fieldset className="border flex flex-col items-center ml-6 gap-1 w-75">
          <legend className="ml-5">User Details</legend>
            <input 
            
            className="border w-55" type="text" placeholder="Name" />
            <input className="border w-55" type="number" placeholder="tel" />
            <input className="border w-55" type="email" placeholder="email" />
            <input className="border w-55" type="password" placeholder="password" />
            <button 
            
            className="px-2 w-35 py-1 bg-purple-500 rounded">Submit</button>
          </fieldset>
          
          <fieldset className="border flex flex-col items-center ml-6 gap-2 w-75">
            <legend className="ml-5">Other Inputs handling in form</legend>

            <div className="flex items-center gap-2">
              <label htmlFor="city-select">Select City : </label>
              <select id="city-select" value="city" className="bg-amber-300 rounded">
                <option value="">--Select--</option>
                <option value="Lucknow">Lucknow</option>
                <option value="Pune">Pune</option>
                <option value="Hydrabad">Hydrabad</option>
                <option value="Chennai">Chennai</option>
              </select>     
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="gender">Select Gender</label>
              <label><input type="radio" name="gender" value="male"/>Male</label>
              <label><input type="radio" name="gender" value="female" />Female</label>
              <label><input type="radio" name="gender" value="others" />Others</label>
            </div>

            <div className="flex items-center gap-1">
              <label htmlFor="intrest">Select Intrest</label>
              <label><input type="checkbox" value="music" />Music</label>
              <label><input type="checkbox" value="gaming" />Gaming</label>
              <label><input type="checkbox" value="coding"/>Coding</label>
            </div>

          </fieldset>
        </form>
    )
}

export default Form;