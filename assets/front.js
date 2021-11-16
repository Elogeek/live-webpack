// first import
import {sayHi} from "./js/testConsole";
import {person} from "./js/testConsole";
import * as $ from "jquery";
import Chart from 'chart.js/auto';

sayHi("Bubulle Doe !");

person.sayHello();
person.sayBye();

$('body').css('backgroundColor', 'orange');

let ctx = document.querySelector('#myChart').getContext('2d');
let graphic = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Purple','Red','Yellow'],
        datasets: [{
            label: 'votes',
            data: [15,3,9],
            backgroundColor: [
                'rgba(255,99,132,1)',
                'rgba(55,199,132,1)',
                'rgba(5,99,132,1)'
            ]
        }]
    }
})