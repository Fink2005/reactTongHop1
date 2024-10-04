import React, { useState } from "react";

export default function Form() {
  // Initialize the state for values and errors
  let [state, setState] = useState({
    values: { like: 0, firstName: "", lastName: "" },
    errors: { like: 0, firstName: "", lastName: "" },
  });

  // Handle the "like" increment
  let handleEnhance = () => {
    setState((prevState) => ({
      ...prevState,
      values: { ...prevState.values, like: prevState.values.like + 1 },
    }));
  };

  // Handle input changes for firstName and lastName
  let handleOnchange = (event) => {
    let { name, value } = event.target;

    setState((prevState) => ({
      ...prevState,
      values: { ...prevState.values, [name]: value },
    }));

    // Error validation logic: field cannot be empty
    if (value === "") {
      setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, [name]: "Field cannot be empty" },
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        errors: { ...prevState.errors, [name]: "" },
      }));
    }
  };

  return (
    <div>
      <p>{state.values.like}</p>
      <button onClick={handleEnhance} className="btn btn-primary">
        +
      </button>
      <p>First Name: {state.values.firstName}</p>
      <p>Last Name: {state.values.lastName}</p>

      <input
        placeholder="First Name"
        onChange={handleOnchange}
        name="firstName"
      />
      <p className="text text-danger">{state.errors.firstName}</p>

      <input
        placeholder="Last Name"
        name="lastName"
        onChange={handleOnchange}
      />
      <p className="text text-danger">{state.errors.lastName}</p>
    </div>
  );
}
