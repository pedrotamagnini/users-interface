import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { showAlertModal } from "../utils/Alert";
import './FormUsers.css';

const getFormattedCurrentDateTime = () => {
    const currentDateTime = new Date();
    const year = currentDateTime.getFullYear();
    const month = String(currentDateTime.getMonth() + 1).padStart(2, '0');
    const day = String(currentDateTime.getDate()).padStart(2, '0');
    const hours = String(currentDateTime.getUTCHours()).padStart(2, '0');
    const minutes = String(currentDateTime.getUTCMinutes()).padStart(2, '0');
    const seconds = String(currentDateTime.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(currentDateTime.getUTCMilliseconds()).padStart(3, '0');
    const timezoneOffsetHours = String(Math.floor(currentDateTime.getTimezoneOffset() / 60)).padStart(2, '0');
    const timezoneOffsetMinutes = String(Math.abs(currentDateTime.getTimezoneOffset() % 60)).padStart(2, '0');
    const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}+${timezoneOffsetHours}:${timezoneOffsetMinutes}`;
    return formattedDateTime;
};

function FormUser() {
    const { dispatch } = useAppContext(); // Use o gancho personalizado para acessar o contexto
    const [newUser, setNewUser] = useState({
        id: "",
        userId: "",
        title: "",
        due_on: getFormattedCurrentDateTime(), // Preencha automaticamente com a data e hora atuais
        status: "pending",
    });
    const [showPopup, setShowPopup] = useState(false);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowConfirmationModal(true);
    };

    const handleConfirm = () => {
        // Enviar os dados do novo usuário para a API ou outra lógica de armazenamento
        // Substitua este comentário pela lógica apropriada

        // Adicione o novo usuário à lista de usuários
        dispatch({ type: 'ADD_USER', payload: newUser });

        setShowPopup(false); // Feche o popup do formulário
        setShowConfirmationModal(false);
        showAlertModal("Sucesso!", "Formulário enviado com sucesso!");

        // Limpe os campos do formulário
        setNewUser({
            id: "",
            userId: "",
            title: "",
            due_on: getFormattedCurrentDateTime(), // Atualize a data e hora quando um novo usuário é adicionado
            status: "",
        });
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
                        <form className="form" onSubmit={handleSubmit}>
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
                                        value={newUser.id}
                                        onChange={handleChangeInput}
                                    />
                                </label>
                            </p>
                            <p>
                                <label className="boxTitle">
                                    USER ID
                                    <input
                                        className="inputBox"
                                        placeholder="Enter USER ID"
                                        type="text"
                                        name="userId"
                                        required
                                        value={newUser.userId}
                                        onChange={handleChangeInput}
                                    />
                                </label>
                            </p>
                            <p>
                                <label className="boxTitle">
                                    TITLE
                                    <input
                                        className="inputBox"
                                        placeholder="Enter TITLE"
                                        type="text"
                                        name="title"
                                        required
                                        value={newUser.title}
                                        onChange={handleChangeInput}
                                    />
                                </label>
                            </p>
                            <p>
                                <label className="boxTitle">
                                    DUE_ON
                                    <input
                                        className="inputBox"
                                        placeholder="Enter DUE_ON"
                                        type="text"
                                        name="due_on"
                                        required
                                        value={newUser.due_on}
                                        onChange={handleChangeInput}
                                    />
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
                                            value="completed"
                                            checked={newUser.status === "completed"}
                                            onChange={handleChangeInput}
                                        />
                                        Completed
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="status"
                                            value="pending"
                                            checked={newUser.status === "pending"}
                                            onChange={handleChangeInput}
                                        />
                                        Pending
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
                    <div onClick={toggleModal} className=" overlay"></div>
                    <div className="modal-content">
                        <p className="confirmMessage">Are you sure you want to submit this form?</p>
                        <div className="form-data">
                            {/* Exiba os dados do novo usuário aqui */}
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
