import { useState } from "react";

const SignUp = ({users, setUsers}) => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const handleValidation = () => {
    let errorMessage = ""

    // Check if name or email already exists
    if (users.find((user) => user.fullname === fullname)){
        errorMessage = "An account with this name already exists"
    }
    if (users.find((user) => user.email === email)){
        errorMessage = "An account with this email address already exists"
    }

    // Check that passwords is equal to confirm password
    if (password !== confirmPassword){
        errorMessage = "This does not match the password you entered above"

    // Check that none of the fields are blank
    if (fullname === "" || email === "" || password === ""){
        errorMessage = "Please fill in all of the fields"
    }

    setError(errorMessage)
    return errorMessage !== "";

}

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    if (!handleValidation()) {
        const newUsers = users;
        newUsers.push({
            fullname,
            email,
            password,
            confirmPassword
        });
        setUsers(newUsers);
    }
    
  }
    
};

export default SignUp;

