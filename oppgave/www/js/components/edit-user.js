import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  render() {
    return html`
      <div>
      	<form action="api/updateUser.php" method="POST">
      		<p>Brukernavnet per er nå <b>${this.user.uname}</b></p>
      		<li>Nytt brukernavn: <input type="text" id="uname" name="uname"></li>
      		<p>Fornavnet per er nå <b>${this.user.firstName}</b></p>
      		<li>Nytt fornavn: <input type="text" id="firstName" name="firstName"></li>
      		<p>Etternavnet per er nå <b>${this.user.lastName}</b></p>
      		<li>Nytt etternavn: <input type="text" id="lastName" name="lastName"></li>
      		<li>Endre passord: <input type="text" id="pwd" name="pwd"></li>
      		<br>
      		<p>Bruker ID'en er <b>${this.user.uid}</b></p>
      		<li>Ny ID: <input type="text" id="uid" name="uid"></li>
      		<button type="submit">Oppdater informasjon</button>
      	</form>
      </div>
    `;
  }

}
customElements.define('edit-user', EditUser);
