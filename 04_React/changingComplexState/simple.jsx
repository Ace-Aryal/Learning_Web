import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function displayName(e) {
    if (e.target.name === "fName") {
      setFirstName(e.target.value);
      return;
    }
    setLastName(e.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {firstName} {lastName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={displayName}
          value={firstName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={displayName}
          value={lastName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;