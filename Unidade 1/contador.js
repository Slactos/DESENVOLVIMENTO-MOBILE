class BotaoContador extends HTMLElement {
    constructor(){
        super();
        this.contador=0;
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML = `
        <button id="diminui">-</button>
        <span>${this.contador}</span>
        <button id="auemnta">+</button>
        `;
    }
    connectedCallBack(){
        this.shadowRoot.querySelector(#aumenta).onclick =
        () => this.atualizar(+1);
        this.shadowRoot.querySelector(#diminui).onclick =
        () => this.atualizar(-1);
    }
    atualizar(valor){
        this.contador += valor;
        this.shadowRoot.querySelector("span").textContent = this.contador;
    }
}
customElements.define('botao-contador',BotaoContador);