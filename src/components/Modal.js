import React from 'react'

function Modal({closeModal, currentUser, deleteUser}) {

    const handleDelete = (e) => {
        deleteUser(currentUser.id);
        closeModal(false);
    }

  return (
    <div className="modalBackground">
        <div className="modalContainer">
            <div className="title">
                <p>Are you sure you want to delete your account?</p>
                </div>
                <div className="body">
                    <p>Your account will be deleted foreverrrr!</p>
                </div>
                <div className="footer">
                    <button id="cancelButton" onClick={() => {closeModal(false)}}>Cancel</button>
                    <button onClick={handleDelete}>Continue</button>
                </div>
            </div>
    </div>
  );
};

export default Modal;