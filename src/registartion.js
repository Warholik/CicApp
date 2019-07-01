import React from 'react';
import './login.css';
import CicApp_Logo from '../src/1024px-Toicon-icon-fandom-fly.png'

function Registration() {
    return (
      <div class="AppBackround">
        <div class="LoginWrapper">
          <img class="AppLogo" src={CicApp_Logo} alt="CicApp Logó" />
          <div class="boxLayout">
          <h1>Regisztráció</h1>
            <form class="FormWrapper">
              <div>
                <label for="UserName">FELHASZNÁLÓNÉV:
                <input type="text" id="UserName" name="UserName" placeholder="UncsiNév" required />
                </label>
                <div>Add meg a felhasználóneved</div>
              </div>
              <div>
                <label for="EmailAddress">EMAIL CÍM:
                <input type="text" id="EmailAddress" name="EmailAddress" placeholder="Cirmos@cica.hu" required />
                </label>
                <div>Add meg a felhasználóneved</div>
              </div>
              <div>
                <label for="Password">JELSZÓ:
                <input type="password" id="UserName" name="Password" placeholder="NinjaMacska0101" required />
                  <div>Add meg a jelszavad</div>
                </label>
              </div>
              <div>
                <label for="Password">JELSZÓ:
                <input type="password" id="UserName" name="Password" placeholder="NinjaMacska0101" required />
                  <div>Add meg a jelszavad</div>
                </label>
              </div>
              <button class="LogInButton rainbow"> Regisztrálok </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
export default Registration;
