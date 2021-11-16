/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./assets/js/testConsole.js
/**
 *  Fct say hello
 */
const sayHi = function(who) {
    console.log(`Hi ${who}`);
}
// Ne jms oublie l'export sinon rien ne fonctionnera


/**
 *  With object literal
 */
const person = {

    firstname: "Donald",
    lastname: 'Doe',

    /**
     * Fct hello to the object
     */
    sayHello: function() {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    },

    /**
     * Fct goodbye to the object
     */
    sayBye: function() {
        console.log(`sayBye ${this.firstname} ${this.lastname}`)
    }

};



/**
 *  With an object instantiable
 */
const people = function() {

    this.firstname = "Daisy";
    this.lastname =  'Doe';

    /**
     * Fct hello to the object
     */
    this.hello =  function() {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    };

    /**
     * Fct goodbye to the object
     */
    this.goodbye = function() {
        console.log(`sayBye ${this.firstname} ${this.lastname}`)
    };

};



/**
 *  With an class
 */
class myClass {

    constructor() {
        this.firstname = "Dédé";
        this.lastname = "Doe";
    }
    /**
     * Fct hello to the object
     */
    sayHello =  function() {
        console.log(`Hello ${this.firstname} ${this.lastname}`);
    };

    /**
     * Fct goodbye to the object
     */
    sayGoodbye = function() {
        console.log(`sayBye ${this.firstname} ${this.lastname}`)
    };
}


;// CONCATENATED MODULE: ./assets/front.js
// first import





sayHi("Bubulle Doe !");

person.sayHello();
person.sayBye();


/******/ })()
;