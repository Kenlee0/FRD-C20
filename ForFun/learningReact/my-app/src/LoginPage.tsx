import { useState, useEffect } from "react"
import './LoginPage.css'

export default function LoginPage() {
    const [textInput, setTextInput] = useState("")
    
    useEffect(() => {
        if (textInput.length < 6) {
            console.log('password length should > 6 characters')
        } else
            console.log('password length okay la')
    }, [textInput])

    return (
        <div>
            <h1>LoginPage</h1>
            <div className="login-form">
                <input placeholder="username" type="text" />
                <input placeholder="password" type="password" onChange={e => setTextInput(e.target.value)} />
            </div>
        </div>
    )
}
