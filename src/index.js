import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Rate from './js/rates.js';


$(document).ready(function() {
    $('#btn').click(async function() {

    const country1 = $('#currency1').val();
    const country2 = $('#currency2').val();
    const amount = $('#amount').val();

    if (country1 === "ZB" || country2 === "ZB") {
        $("#test").text(`Error: ZB is not a supported currency...yet`);
        return 
      } else if (!Number(amount)) {
        $("#test").text(`Please enter a number!`);
      } else if (Math.sign(amount) !== 1) {
        $("#test").text(`Please enter a positive value!`);
      } else {
        let response = await Rate.getRate(country1,country2,amount);
        if (response.conversion_result) {
        $('#test').text(`${amount} ${response.base_code} to ${response.target_code} is ${response.conversion_result}`);
        } else {
        $('#test2').text(`There was an error: ${response}`);
        } 
      }
  });
});
//zz