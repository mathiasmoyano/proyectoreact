import { useState,createContext } from "react";

const Notification = ({message, severity}) =>{
    const notificationStyles = {
      position: 'absolute',
      top: 220,
      right: 550,
      width: 'auto',
      height: 'auto',
      backgroundColor: severity === 'success' ? 'green' : 'red',
      color: 'white',
      padding: '10px 20px 10px 20px'
    }

    if(message === '') return

    return (
      <div style={notificationStyles}>
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