import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Rate from './js/rates.js';

function getElements(amount, response) {
  if (response.conversion_result) {
    $('#test').text(`${amount} ${response.base_code} to ${response.target_code} is ${response.conversion_result}`);
    
  } else {
    $('#test2').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(country1,country2,amount) {
  const response = await Rate.getRate(country1,country2,amount);
  getElements(amount,response);
}



$(document).ready(function() {
  $('#btn').click(function() {
    const country1 = $('#currency1').val();
    const country2 = $('#currency2').val();
    const amount = $('#amount').val();
    makeApiCall(country1,country2, amount);
  });
});