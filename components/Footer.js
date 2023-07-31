import { LitElement, html } from "lit";

class Footer extends LitElement {

    render(){
        return html`
            <h1>Footer app</h1> 
        `;
    }
}

customElements.define('my-footer', Footer)