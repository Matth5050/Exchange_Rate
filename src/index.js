import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Rate from './js/rates.js';

function getElements(response) {
  if (response.result) {
    $('#test').text(`The test is ${response.conversion_result}`);
    
  } else {
    $('#test').text(`There was an error: ${response}`);
  }
}

async function makeApiCall() {
  const response = await Rate.getRate();
  getElements(response);
}

$(document).ready(function() {
  $('#btn').click(function() {
    makeApiCall();
  });
});