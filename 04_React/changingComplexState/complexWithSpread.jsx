import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleDetails(e) {
    const { name, value } = e.target;
    setContact((prevValue) => {
      //prevValue (1st arguement of the 
      //callback inside the setStateItems ) 
      // holds tye most recent state of variable (contact in this case)
      return {
        ...prevValue,
        [name]:value
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleDetails}
          value={contact.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleDetails}
          value={contact.lName}
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleDetails}
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;


//The spread operator ensures that the 
//previous properties are preserved, and 
/*[name]: value updates only the matched 
property in the object. Since name always 
corresponds to a valid property of contact, 
no new or unexpected properties are created.
*/