import { LitElement, html } from "lit";

class Header extends LitElement {

    render(){
        return html`
            <h1>Header</h1>
        `;
    }
}

customElements.define('my-head', Header);