import React, { useState } from "react";
import { useAppContext } from "../../context/AppProvider";
import { showAlertModal } from "../utils/Alert";
import './FormComments.css';

function FormComments() {
    const { dispatch } = useAppContext();
    const [newComment, setNewComment] = useState({
        id: "",
        user_id: "",
        name: "",
        email: "",
        body: "",
    });
    const [showPopup, setShowPopup] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowConfirmationModal(true);
    };

    const handleConfirm = () => {
        dispatch({ type: 'addComment', payload: newComment });

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
        setNewComment((prevInputs) => ({ ...prevInputs, [name]: value }));
    };

    return (
        <div>
            <button className="button-Add-Comment" onClick={() => setShowPopup(!showPopup)}>
                {showForm ? "Add Comment" : "Add Comment"}
            </button>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-button" onClick={() => setShowPopup(false)}>
                            X
                        </button>
                        <form className="form-comments" onSubmit={handleSubmit}>
                            <h1>Add Comment</h1>
                            <p>
                                <label className="boxTitle">
                                    ID
                                    <input
                                        className="inputBox"
                                        placeholder="Enter ID"
                                        type="text"
                                        name="id"
                                        required
                                        value={newComment.id}
                                        onChange={handleChangeInput}
                                    />
                                </label>
                            </p>
                            <p>
                                <label className="boxTitle">
                                    User ID
                                    <input
                                        className="inputBox"
                                        placeholder="Enter User ID"
                                        type="text"
                                        name="user_id"
                                        required
                                        value={newComment.user_id}
                                        onChange={handleChangeInput}
                                    />
                                </label>
                            </p>
                            <p>
                                <label className="boxTitle">
                                    Name
                                    <input
                                        className="inputBox"
                                        placeholder="Enter Name"
                                        type="text"
                                        name="name"
                                        required
                                        value={newComment.name}
                                        onChange={handleChangeInput}
                                    />
                                </label>
                            </p>
                            <p>
                                <label className="boxTitle">
                                    Email
                                    <input
                                        className="inputBox"
                                        placeholder="Enter Email"
                                        type="email"
                                        name="email"
                                        required
                                        value={newComment.email}
                                        onChange={handleChangeInput}
                                    />
                                </label>
                            </p>
                            <p>
                                <label className="boxTitle">
                                    Comment
                                    <textarea
                                        className="inputBox-textarea"
                                        placeholder="Enter Comment"
                                        name="body"
                                        required
                                        value={newComment.body}
                                        onChange={handleChangeInput}
                                    />
                                </label>
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
                            <p>ID: {newComment.id}</p>
                            <p>User ID: {newComment.user_id}</p>
                            <p>Name: {newComment.name}</p>
                            <p>Email: {newComment.email}</p>
                            <p>Comment: {newComment.body}</p>
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

export default FormComments;
