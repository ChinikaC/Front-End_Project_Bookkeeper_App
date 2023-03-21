import { useEffect, useState } from "react";

const UserForm = ({currentUser}) => {
    const [changeUserDetails, setChangeUserDetails] = useState({
        fullName: "",
        email: ""
    })

    // useEffect(() => {

    // })

    const handleChange = (e) => {
        const propertyName = e.target.name;
        const copiedUserDetails = {...currentUser};
        copiedUserDetails[propertyName] = e.target.value;
        setChangeUserDetails(copiedUserDetails);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setChangeUserDetails({
            fullName: "",
            email: ""
        })
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input 
            type="text" 
            name="fullName"
            placeholder="Full Name"
            value={changeUserDetails.name}
            onChange={handleChange}
            />

            <input 
            type="email" 
            name="email"
            placeholder="Email Address"
            value={changeUserDetails.email}
            onChange={handleChange}
            />

           < button type="submit"></button>
        </form>
    );

};

export default UserForm;