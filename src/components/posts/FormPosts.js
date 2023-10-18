import React, { useState } from "react";
import { useAppContext } from "../../context/AppProvider";
import { showAlertModal } from "../utils/Alert";
import './FormPosts.css'

function FormPosts() {
    const { dispatch } = useAppContext();
    const [newPost, setNewPost] = useState({
        id: "",
        user_id: "",
        title: "",
        body: "",
    });
    const [showPopup, setShowPopup] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const sendPostData = (postData) => {
        return new Promise((resolve, reject) => {
            // Simulação de envio de dados para a API
            setTimeout(() => {
                // Simulando uma resposta bem-sucedida
                resolve({ status: 'success', data: postData });
                // Ou simular um erro
                // reject(new Error('Erro na chamada à API'));
            }, 1000); // Simulação de uma chamada assíncrona
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowConfirmationModal(true);
    };

    const handleConfirm = () => {
        // Aqui, você precisa chamar `dispatch` com uma ação para atualizar seu estado.
        // Supondo que você tenha uma ação chamada 'addPost', você faria algo assim:
        dispatch({ type: 'addPost', payload: newPost });

        setShowForm(false); // Feche o formulário
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
        setNewPost((prevInputs) => ({ ...prevInputs, [name]: value }));
    };

    return (
        <div>
            <button className="button-Add-Post" onClick={() => setShowPopup(!showPopup)}>
                {showForm ? "Add Post" : "Add Post"}
            </button>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-button" onClick={() => setShowPopup(false)}>
                            X
                        </button>
                        <form className="form" onSubmit={handleSubmit}>
                        <h1>Add Post</h1>
                        <p>
                            <label className="boxTitle">
                                ID
                                <input
                                    className="inputBox"
                                    placeholder="Enter ID"
                                    type="text"
                                    name="id"
                                    required
                                    value={newPost.id}
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
                                    value={newPost.user_id}
                                    onChange={handleChangeInput}
                                />
                            </label>
                        </p>
                        <p>
                            <label className="boxTitle">
                                Title
                                <input
                                    className="inputBox"
                                    placeholder="Enter Title"
                                    type="text"
                                    name="title"
                                    required
                                    value={newPost.title}
                                    onChange={handleChangeInput}
                                />
                            </label>
                        </p>
                        <p>
                            <label className="boxTitle">
                                Post
                                <textarea
                                    className="inputBox-textarea"
                                    placeholder="Enter Post"
                                    name="post"
                                    required
                                    value={newPost.post}
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
                            <p>ID: {newPost.id}</p>
                            <p>User ID: {newPost.user_id}</p>
                            <p>Title: {newPost.title}</p>
                            <p>Post: {newPost.post}</p>
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

export default FormPosts;
