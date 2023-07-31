import { LitElement, html } from "lit";
import "./components/Header.js";
import "./components/Footer.js"

export class App extends LitElement {

    static properties = {
        name: {}
    }

    constructor(){
        super()
        this.name = "Fainner Ramirez"
    }

    render(){
        return html`
            <my-head></my-head>
            <my-footer></my-footer> 
            <h1>Hola ${this.name}</h1>
        `;
    }
}

customElements.define('my-app', App)