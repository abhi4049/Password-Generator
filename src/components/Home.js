import React, { useState, useEffect } from 'react'
import "./mystyle.css";

const Home = () => {
    const [password, setPassword] = useState('')
    const [passwordLength, setPasswordLength] = useState(15)
    const [uppercase, setUppercase] = useState(false)
    const [lowercase, setLowercase] = useState(false)
    const [numbers, setNumbers] = useState(false)
    const [symbols, setSymbols] = useState(false)
    const [errors, setErrors] = useState({})

    const copyToClipboard = () => {
        const newTextArea = document.createElement('textarea')
        newTextArea.innerText = password
        document.body.appendChild(newTextArea)
        newTextArea.select()
        document.execCommand('copy')
        newTextArea.remove()
      }

    const handleCopyPassword = (e) => {
        if (password === '') {
          return alert('Nothing To Copy');
        } else {
          copyToClipboard()
          return alert('Password successfully copied to clipboard');
        }
      }

    const generatePassword = () => {
        setErrors({})
        if (!uppercase && !lowercase && !numbers && !symbols) {
            return alert('At least one character type must be selected');
        } else if (passwordLength === '0') {
            return alert('Password length cannot be 0');
        } else if (passwordLength === '') {
            return alert('Invalid password length');
        } else if (passwordLength > 15) {
            return alert('Password length cannot exceed 15 characters');
        }

        let password = '';
        for (let i = 0; i < passwordLength; i++) {
            let choice = random(0, 3)
            if (lowercase && choice === 0) {
                password += randomLower()
            } else if (uppercase && choice === 1) {
                password += randomUpper()
            } else if (symbols && choice === 2) {
                password += randomSymbol()
            } else if (numbers && choice === 3) {
                password += random(0, 9)
            } else {
                i--
            }
        }
        setPassword(password)
    }

    const random = (min = 0, max = 1) => {
        return Math.floor(Math.random() * (max + 1 - min) + min)
    }

    const randomLower = () => {
        return String.fromCharCode(random(97, 122))
    }

    const randomUpper = () => {
        return String.fromCharCode(random(65, 90))
    }

    const randomSymbol = () => {
        const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>"
        return symbols[random(0, symbols.length - 1)]
    }

    // useEffect(() => {
    //     generatePassword()
    // }, [])

    return (
        <section className="container">
            <h2>Password Generator</h2>
            <div className="result-container">
                <span id="result">{password}</span>
                <button onClick={handleCopyPassword} className="btn" id="clipboard">📋</button>
            </div>
            <div className="settings">
                <div className="setting">
                    <label>Password length</label>
                    <input type='number' name='length' min='4' max='15' defaultValue={passwordLength} onChange={(e) => setPasswordLength(e.target.value)} />
                </div>

                <div className='setting'>
                    <label>Include Uppercase Letters</label>
                    <input
                        type='checkbox' name='uppercase' defaultChecked={uppercase} onChange={(e) => setUppercase(e.target.checked)}
                    />
                </div>

                <div className='setting'>
                    <label>Include Lowercase Letters</label>
                    <input
                        type='checkbox' name='lowercase' defaultChecked={lowercase} onChange={(e) => setLowercase(e.target.checked)}
                    />
                </div>

                <div className='setting'>
                    <label>Include Numbers</label>
                    <input
                        type='checkbox' name='numbers' defaultChecked={numbers} onChange={(e) => setNumbers(e.target.checked)}
                    />
                </div>

                <div className='setting'>
                    <label>Include Symbols</label>
                    <input
                        type='checkbox' name='symbols' defaultChecked={symbols} onChange={(e) => setSymbols(e.target.checked)}
                    />
                </div>

                {errors.length && <li className='error'>{errors}</li>}

                <div className='btn'>
                    <input
                        type='submit' name='generate' id='generate' value='Generate' onClick={generatePassword}
                    />
                </div>
            </div>
        </section>
    )
}

export default Home