import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Rate from './js/rates.js';
import Coin from './js/coin.js';


function displayData(data) {
    for (const property in data) {
        $('.coinOut').append(`<p class="${property}"><b>${property}:<b></p>`);
        Object.keys(data[property]).forEach(key => {
            $('.coinOut').append(`<p class="${property}">${key}: ${data[property][key]}</p>`);
        })
    }
}
    //zz

function getElements(data) {
    if (data) {
      displayData(data);
    } else {
      $('.coinOut').append(`<p>There was an error loading crypto data</p>`);
    }
}

async function coinPrice() {
    const response = await Coin.getCoinRate();
    return response; 
}

function grabCoinPrice() {
    let result = coinPrice();
    result.then(function(data) {
        getElements(data)
    })
}



$(document).ready(function() {
    grabCoinPrice();
    $('#btn').click(async function() {
    const country1 = $('#currency1').val();
    const country2 = $('#currency2').val();
    const amount = $('#amount').val();

    if (country1 === "ZB" || country2 === "ZB") {
        $("#test").text(`Error: ZB is not a supported currency...yet`);
        return 
      } else if (!Number(amount)) {
        $("#test").text(`Please enter a number!`);
        return
      } else if (Math.sign(amount) !== 1) {
        $("#test").text(`Please enter a positive value!`);
        return
      } else {
        let response = await Rate.getRate(country1,country2,amount);
        if (response.conversion_result) {
        $('#test').text(`${amount} ${response.base_code} = ${response.conversion_result} ${response.target_code}`);
        $('.output').slideDown();
        } else {
        $('#test2').text(`There was an error: ${response}`);
        $('.output').slideDown();
        } 
      }
  });
});
