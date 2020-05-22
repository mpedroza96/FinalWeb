import React from 'react'; 
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import PeliculaList from './PeliculaList';
import { IntlProvider } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  var x = window.navigator.language || navigator.browserLanguage
  console.log(x)
  if (x === 'en') {
    return (
      <IntlProvider locale="en" messages={localeEnMessages}>
        <PeliculaList messages={localeEnMessages}/>
      </IntlProvider>
    )
  }
  else {
    return (
      <IntlProvider locale="es-ES" messages={localeEsMessages}>
        <PeliculaList messages={localeEnMessages}/>
      </IntlProvider>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
