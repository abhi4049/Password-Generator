import React, { Component } from 'react'
import "./mystyle.css";
import "./myscript.js";
class Navbar extends Component {
    render() {
        return (
            <section className="pwdgen">
                <div id="title">Password Generator</div>
                <div class="result-container">
                    <span id="result">xyz</span>
                    <button class="btn" id="clipboard">📋</button>
                </div>
                <div class="settings">
                    <div class="setting">
                        <label>Password length</label>
                        <input type="number" id="length" min='3' max='20' value='20' />
                    </div>
                    <div class="setting">
                        <label>Include uppercase letters</label>
                        <input type="checkbox" id="uppercase" unchecked />
                    </div>
                    <div class="setting">
                        <label>Include lowercase letters</label>
                        <input type="checkbox" id="lowercase" unchecked />
                    </div>
                    <div class="setting">
                        <label>Include numbers</label>
                        <input type="checkbox" id="numbers" unchecked />
                    </div>
                    <div class="setting">
                        <label>Include symbols</label>
                        <input type="checkbox" id="symbols" unchecked />
                    </div>
                </div>
                <button className="btn" id="generate">Generate password</button>
            </section>
        )
    }
}

export default Navbar