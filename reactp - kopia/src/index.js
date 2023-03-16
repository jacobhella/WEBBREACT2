import React from 'react';
import $ from 'jquery';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*FOURTH TASK animation*/
function hideLoader() {
  $('#overlay').fadeOut(4000);
}

$(window).ready(hideLoader);

/*FOURTH TASK point two*/

$(document).ready(function(){
  $("#buttonFadeOut").click(function(){
      $("h2").fadeTo("slow", 0.2, "swing");
  });
});

$(document).ready(function(){
  $("#buttonFadeIn").click(function(){
      $("h2").fadeTo("slow", 1, "swing");
  });
});
