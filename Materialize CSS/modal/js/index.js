// JS initializatyion:

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.modal');
//     let options = {
//         dismissible : false,
//         opacity : 0.9
//     }
//     M.Modal.init(elems, options);
//   });


// Jquery initialization : 

$(document).ready(function(){
    let allModals = $('.modal');
    allModals.modal()
})

// Js 

// function openModal2(){
//     let modalElem = document.querySelectorAll("#modal2");
//     modalElem[0].M_Modal.open()
// }

// Jquery
function openModal2(){
    console.log("Jquery")
    $("#modal2").modal('open')
}