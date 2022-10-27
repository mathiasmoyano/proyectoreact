import { useState,createContext } from "react";
import './NotificationService.scss'


const Notification = ({message, severity}) =>{
    const notificationStyles = {
      backgroundColor: severity === 'success' ? 'green' : 'red',
    }

    if(message === '') return

    return (
      <div className='NotificationCloud' style={notificationStyles}>
        {message}
      </div>
    )
  }

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMesagge] = useState('')
    const [severity, setSeverity] = useState('success')

    const setNotification = (severity, message) =>{
        setSeverity(severity)
        setMesagge(message)

        setTimeout(() =>{
            setMesagge('')
        }, 2000)
    }

    return (
        <NotificationContext.Provider value={{setNotification}}>
            <Notification severity={severity} message={message}/>
            {children}
        </NotificationContext.Provider>
    )
}