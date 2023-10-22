import React, { useState } from "react";
import { useAppContext }from "../../context/AppProvider";
import { showAlertModal } from "../utils/Alert";
import './FormUsers.css';
import ConfirmationModal from '../../ConfirmationModal/ConfirmationModal'
import {createUserAction} from '../../context/Actions'

function FormUser() {
    const { dispatch } = useAppContext();
    const [newUser, setNewUser] = useState({
        id: "",
        name: "",
        email: "",
        gender: "",
        status: "inactive",
    });
    const [showPopup, setShowPopup] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUserWithId = {
            ...newUser,
        };
        
        console.log("data:", newUser)

        setShowConfirmationModal(true);
        setNewUser(newUserWithId);
    };

    const handleConfirm = () => {
        createUserAction(dispatch, newUser)

        setShowForm(false);
        setShowConfirmationModal(false);
        showAlertModal("Success!", "Form submitted successfully!");
    };

    const handleCancel = () => {
        setShowConfirmationModal(false);
    };

    const toggleModal = () => {
        setShowConfirmationModal(!showConfirmationModal);
    };

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setNewUser((prevInputs) => ({ ...prevInputs, [name]: value }));
    };

    return (
        <div>
            <button className="button-Add-User" onClick={() => setShowPopup(!showPopup)}>
                {showPopup ? "Add User" : "Add User"}
            </button>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-button" onClick={() => setShowPopup(false)}>
                            X
                        </button>
                        <form className="form-users" onSubmit={handleSubmit}>
                            <h1>Add User</h1>
                            <p>
                                <label className="boxTitle">
                                    ID
                                    <input
                                        className="inputBox"
                                        placeholder="Enter ID"
                                        type="text"
                                        name="id"
                                        required
                                        title="ℹ Maximum of 7 digits"
                                        value={newUser.id}
                                        onChange={handleChangeInput}
                                        maxLength={7}
                                    />
                                </label>
                            </p>
                            <p>
                                <label className="boxTitle">
                                    NAME
                                    <input
                                        className="inputBox"
                                        placeholder="Enter NAME"
                                        type="text"
                                        name="name"
                                        required
                                        value={newUser.name}
                                        onChange={handleChangeInput}
                                        maxLength={25}
                                        pattern="[A-Za-z\s]+"
                                        title="ℹ Only letters and spaces are allowed"
                                    />
                                </label>
                            </p>
                            <p>
                                <label className="boxTitle">
                                    EMAIL
                                    <input
                                        className="inputBox"
                                        placeholder="Enter EMAIL"
                                        type="text"
                                        name="email"
                                        required
                                        value={newUser.email}
                                        onChange={handleChangeInput}
                                        pattern=".*@.*"
                                        title="ℹ Please enter a valid email address with @"
                                    />
                                </label>
                            </p>
                            <p>
                                <label className="boxTitle">
                                    GENDER
                                    <select
                                        className="inputBox"
                                        name="gender"
                                        required
                                        value={newUser.gender}
                                        onChange={handleChangeInput}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </label>

                            </p>
                            <p>
                                <label className="boxTitle">
                                    STATUS
                                </label>
                                <div className="radioButtons">
                                    <label>
                                        <input
                                            type="radio"
                                            name="status"
                                            value="inactive"
                                            checked={newUser.status === "inactive"}
                                            onChange={handleChangeInput}
                                        />
                                        Inactive
                                    </label>
                                </div>
                            </p>
                            <p>
                                <input className="button-Submit" type="submit" value="Submit" />
                            </p>
                        </form>
                    </div>
                </div>
            )}
            {showConfirmationModal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <p className="confirmMessage">Are you sure you want to submit this form?</p>
                        <div className="form-data">
                            <p>ID: {newUser.id}</p>
                            <p>NAME: {newUser.name}</p>
                            <p>EMAIL: {newUser.email}</p>
                            <p>GENDER: {newUser.gender}</p>
                            <p>STATUS: {newUser.status}</p>
                        </div>
                        <p></p>
                        <div className="modal-buttons-container">
                            <button className="cancel-modal" onClick={handleCancel}>
                                CANCEL
                            </button>
                            <button className="confirm-modal" onClick={handleConfirm}>
                                CONFIRM
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FormUser;