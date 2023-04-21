// JavaScript Document

let menu = document.querySelector(selectors:".menu")
let menuBtn = document.querySelector(selector:".header-icon")
let menuBtnIcon = document.querySelector(selector:".header-icon i")


menuBtn.addEventListener(type:"clicko , laddEven:function (){
	if (menuBtnIcon.classList.contains("fa-bars")){
		menu.style.left = "0"
		menuBtnIcon.classList = "fa fa-times"
	} else {
		menu.style.left = "-256px"
		menuBtnIcon.classList = "fa fa-bars"
	}