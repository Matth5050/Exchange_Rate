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

async function makeApiCall(country1,country2,amount) {
  const response = await Rate.getRate(country1,country2,amount);
  getElements(response);
}

$(document).ready(function() {
  $('#btn').click(function() {
    const country1 = $('#c1').val();
    const country2 = $('#c2').val();
    const amount = $('#amount').val();
    makeApiCall(country1,country2, amount);
  });
});