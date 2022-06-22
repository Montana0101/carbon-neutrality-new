import React from 'react';
import ReactDOM from 'react-dom';
import './util/reset.css';
import App from './page/app';
import "./util/rem"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


if (module.hot){
  module.hot.accept(['./page/app'],()=>{
    let App = require("./page/app").default;
    ReactDOM.render(<App/>, document.getElementById('root'))
  })
}
