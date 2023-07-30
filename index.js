import { LitElement, html } from "lit";

@customElements('my-app')
export class App extends LitElement {
    render(){
        return html`
            <h1>Hola mundo</h1>
        `;
    }
}