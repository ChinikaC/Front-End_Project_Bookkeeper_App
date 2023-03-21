const UserList = ({users, currentUser, updateCurrentUser}) => {
    const userList = users.map((user) => {
        return (
            <currentUser
            key={currentUser.id}
            currentUser={currentUser}
            updateCurrentUser={updateCurrentUser}
            />
        );
    });

    return (
        <>
        <h2>currentUser</h2>
        <hr/>
        {userList}
        </>
    );

};

export default UserList;