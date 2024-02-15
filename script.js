$(document).ready(()=>{

//difine btn element
const showBtn = $('.btn1');
const fadeBtn = $('.btn2');
const slideBtn = $('.btn3');
const subBtn = $('.sbTn')
//difine paragraph element
const showPar = $('.par1');
const fadePar = $('.par2');
const slidePar = $('.par3');
//difine append div
const appeN = $('.append');
//difine input form
const inputForm = $('.name');
//use hide method to hide paragraph
showPar.hide()
// fadePar.hide()
slidePar.hide()
//add event show to showBtn 
showBtn.click(()=>{
    showPar.show().addClass('color_me')
});
//add event fade to fadeBtn
fadeBtn.click(function(){
    fadePar.fadeIn('slow')
});
//add fadeout anim on dubble click event
fadeBtn.dblclick(()=>{
    fadePar.fadeOut('slow')
});
// add slide down method on click event 
slideBtn.click(()=>{
    slidePar.slideDown()
});
//create new element inside appeN div with html & append methods
appeN.html('<h1>Hello !</h1>')
appeN.append('<p> I am append child</p>')

//take a value from input with val method
subBtn.click(()=>{
    inputForm.val();
    window.alert('Thanks');
})
})