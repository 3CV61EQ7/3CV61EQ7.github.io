class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Equipo 7 3CV61 Computacion Ubicua UPIICSA.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
