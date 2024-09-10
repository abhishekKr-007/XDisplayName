import { useState } from "react";

function Display() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
      setIsSubmitted(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {isSubmitted && (
        <div style={{ paddingTop: "15px" }}>
          <label>Full Name: {fullName}</label>
        </div>
      )}
    </div>
  );
}

export default Display;
