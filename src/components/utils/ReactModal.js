import React from 'react';
import Modal from 'react-modal';

const ReactModal = (props) => (
    <Modal isOpen={!!props.showModal}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >

        <h3 className="modal__title">Selected Option </h3>
        <p className="modal__body">{props.showModal}</p>
    </Modal>
);

export default ReactModal;
