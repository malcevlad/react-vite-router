import React from "react";
import cl from './Modal.module.scss'

type ModalProps = {
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {

	return (
		<div className={cl.modalOverlay}>
			<div className={cl.modalContainer}>
				<button className={cl.modalCloseButton} onClick={onClose}>
					×
				</button>
				<div className={cl.modalContent}>{children}</div>
			</div>
		</div>
	);
};

export default Modal;