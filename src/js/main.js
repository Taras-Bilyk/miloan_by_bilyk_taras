var hamburger = document.querySelector(".burger")
var menu = document.querySelector(".burger_open")

hamburger.onclick = function(){
    hamburger.classList.toggle("burger_click")
    menu.classList.toggle("menu_open")
}

var li1 = document.querySelector(".li1")
var submenu_ul = document.querySelector(".submenu_ul")

li1.onclick = function(){
    li1.classList.toggle("li1_click")
    submenu_ul.classList.toggle("submenu_ul_1_open")
}

var li2 = document.querySelector(".li2")
var submenu_ul_2 = document.querySelector(".submenu_ul_2")

li2.onclick = function(){
    li2.classList.toggle("li2_click")
    submenu_ul_2.classList.toggle("submenu_ul_2_open")
}

var li3 = document.querySelector(".li3")
var submenu_ul_3 = document.querySelector(".submenu_ul_3")

li3.onclick = function(){
    li3.classList.toggle("li3_click")
    submenu_ul_3.classList.toggle("submenu_ul_3_open")
}

var question_1 = document.querySelector(".asks_and_answers_question_1")

question_1.onclick = function(){
    question_1.classList.toggle("asks_and_answers_answer_1")
}

var question_2 = document.querySelector(".asks_and_answers_question_2")

question_2.onclick = function(){
    question_2.classList.toggle("asks_and_answers_answer_2")
}

var question_3 = document.querySelector(".asks_and_answers_question_3")

question_3.onclick = function(){
    question_3.classList.toggle("asks_and_answers_answer_3")
}

var question_4 = document.querySelector(".asks_and_answers_question_4")

question_4.onclick = function(){
    question_4.classList.toggle("asks_and_answers_answer_4")
}

var question_5 = document.querySelector(".asks_and_answers_question_5")

question_5.onclick = function(){
    question_5.classList.toggle("asks_and_answers_answer_5")
}

var question_6 = document.querySelector(".asks_and_answers_question_6")

question_6.onclick = function(){
    question_6.classList.toggle("asks_and_answers_answer_6")
}

var question_7 = document.querySelector(".asks_and_answers_question_7")

question_7.onclick = function(){
    question_7.classList.toggle("asks_and_answers_answer_7")
}

var question_8 = document.querySelector(".asks_and_answers_question_8")

question_8.onclick = function(){
    question_8.classList.toggle("asks_and_answers_answer_8")
}

var credit_types_gradient = document.querySelector(".credit_types_gradient")
var credit_types_div = document.querySelector(".credit_types_div")
var credit_types_gradient = document.querySelector(".credit_types_gradient")
var credit_types_button = document.querySelector(".credit_types_button")

credit_types_gradient.onclick = function(){
    credit_types_div.classList.toggle("credit_types_div_height_auto")
    credit_types_gradient.classList.toggle("credit_types_gradient_none")
    credit_types_button.classList.toggle("credit_types_button_transform")
}

credit_types_button.onclick = function(){
    credit_types_div.classList.toggle("credit_types_div_height_auto")
    credit_types_gradient.classList.toggle("credit_types_gradient_none")
    credit_types_button.classList.toggle("credit_types_button_transform")
}
