import React, { createContext, useContext, useState } from 'react'


const MessageNotificationContext = createContext();

export const MessageNotificationProvider = ({ children }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalState, setModalState] = useState();
    const handleClose = () => {
        setModalOpen(false);
    }
    return (
        <MessageNotificationContext.Provider value={{ modalOpen, setModalOpen, handleClose, setModalState, modalState }}>
            {children}
        </MessageNotificationContext.Provider>
    )
}

export const useMessNotifContext = () => {
    const context = useContext(MessageNotificationContext);
    return context;
}
