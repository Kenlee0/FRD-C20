import React, { useState } from 'react'

export default function RegisterPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    // React.FormEvent -> 唔洗import
    // 就咁FormEvent -> 就要import { FormEvent } from 'react'
    // 兩者都可以，無話邊個比較Common
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // 👇️ Prevent Page refresh
        e.preventDefault()
        console.log('Hello', e)
        console.log(e.currentTarget)
        console.log(e.currentTarget.elements);
        console.log(e.currentTarget.elements[0]);
    }

    return (
        <div>
            <h1>RegisterPage</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        placeholder='email'
                        type='email' // Just reminder: email type: if someone missed the @ in the text box, it will pop the message box
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Username:
                    <input
                        placeholder='username'
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </label>
                <label>
                    Password:
                    <input
                        placeholder="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
