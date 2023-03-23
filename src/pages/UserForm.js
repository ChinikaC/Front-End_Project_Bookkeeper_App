import { useState } from "react";

const UserForm = ({updateUserDetails}) => {
    const [changeUserDetails, setChangeUserDetails] = useState({
        fullName: "",
        email: ""
    })

    const handleChange = (e) => {
        const propertyName = e.target.name;
        const copiedUserDetails = {...changeUserDetails};
        copiedUserDetails[propertyName] = e.target.value;
        setChangeUserDetails(copiedUserDetails);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateUserDetails(changeUserDetails);
        setChangeUserDetails({
            fullName: "",
            email: ""
        })
    }

    return (
        <div className="updateDetails">
        <h1>Update My Account Details</h1>
        <h2>Enter the details below that you wish to update</h2>
        <form onSubmit={handleFormSubmit}>
        <label>Enter your full name
            <input 
            type="text" 
            name="fullName"
            placeholder="Full Name"
            value={changeUserDetails.fullName}
            onChange={handleChange}
            />
            </label>
            <label>Enter your email address
            <input 
            type="email" 
            name="email"
            placeholder="Email Address"
            value={changeUserDetails.email}
            onChange={handleChange}
            />
            </label>

           <button type="submit">Submit</button>
        </form>
        </div>
    );

};

export default UserForm;