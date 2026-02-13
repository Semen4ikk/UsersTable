import React from 'react';
import style from './userModal.module.css';

export default function UserModal({ user, onClose }) {
    if (!user) return null;


    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={style.modalContainer} onClick={handleOverlayClick}>
            <div className={style.modalContent}>
                <img
                    src={user.image}
                    alt="Avatar"
                    className={style.modalAvatar}
                />
                <h3 className={style.modalName}>{`${user.firstName} ${user.lastName}`}</h3>

                <div className={style.modalInfoBlock}>
                    <div className={style.modalInfoItem}>
                        <p><strong>Возраст:</strong> {user.age}</p>
                    </div>
                    <div className={style.modalDivider}></div>

                    <div className={style.modalInfoItem}>
                        <p><strong>Пол:</strong> {user.gender}</p>
                    </div>
                    <div className={style.modalDivider}></div>

                    <div className={style.modalInfoItem}>
                        <p><strong>Рост:</strong> {user.height} см</p>
                    </div>
                    <div className={style.modalDivider}></div>

                    <div className={style.modalInfoItem}>
                        <p><strong>Вес:</strong> {user.weight} кг</p>
                    </div>
                    <div className={style.modalDivider}></div>

                    <div className={style.modalInfoItem}>
                        <p><strong>Телефон:</strong> {user.phone}</p>
                    </div>
                    <div className={style.modalDivider}></div>

                    <div className={style.modalInfoItem}>
                        <p><strong>Email:</strong> {user.email}</p>
                    </div>
                    <div className={style.modalDivider}></div>

                    <div className={style.modalInfoItem}>
                        <p><strong>Адрес:</strong> {`${user.address?.address}, ${user.address?.city}`}</p>
                    </div>
                </div>

                <button onClick={onClose} className={style.modalCloseBtn}>
                    Закрыть
                </button>
            </div>
        </div>
    );
}