import { useState } from "react";

const SignUp = ({users, setUsers, createNewUser}) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");

    const handleValidation = () => {
        let errorMessage = ""

        // Check if name or email already exists
        if (users.find((user) => user.fullName === fullName)) {
            errorMessage = "An account with this name already exists"
        }
        if (users.find((user) => user.email === email)) {
            errorMessage = "An account with this email address already exists"
        }

        // Check that passwords is equal to confirm password
        if (password !== confirmPassword) {
            errorMessage = "The passwords you have entered do not match" }

            // Check that none of the fields are blank
            if (users.fullName === "" || users.email === "" || password === "") {
                errorMessage = "Please fill in all of the fields"
            }

            setError(errorMessage)
            return errorMessage !== "";
        };

        const handleSubmit = (e) => {
            e.preventDefault();

        if (!handleValidation()) {
            const newUser = ({
                fullName: fullName,
                email: email,
                password: password,
                confirmPassword: confirmPassword
        });
            createNewUser(newUser)
            setFullName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

        };
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => {setFullName(e.target.value) }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value) }}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value) }}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => {setConfirmPassword(e.target.value) }}
                />
                <button 
                type="submit">Submit</button>
            </form>

            {error !=="" ? <p>{error}</p> : <></>}
        </div>
    );
};


export default SignUp;

