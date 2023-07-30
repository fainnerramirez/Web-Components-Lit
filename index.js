import { LitElement, html } from "lit";

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
            <h1>Hola ${this.name}</h1>
        `;
    }
}

customElements.define('my-app', App)