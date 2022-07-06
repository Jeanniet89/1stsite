import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// $(document).ready(function(){

//   let $btns = $('.project-area .button-group button');
  
//   $btns.click(function(e){

//       $('.project-area .button-group button').removeClass('active');
//           e.target.classList.add('active');

//       let selector = $(e.target).attr('data-filter');
//       $('.project-area .grid').isotope({
//           filter: selector
//       });

//       return false;
//   })

//   $('.project-area .button-group #btn1').trigger('click');

//   $('.project-area .grid .test-popup-link').magnificPopup({
//       type: 'image',
//       gallery:{enabled:true}
//     });

//     //sticky nav

//     let nav_offset_top = $('.header_area').height() + 50;
    
//     function navbarFixed(){
//         if ($('.header_area').length){
//             $(window).scroll(function(){
//                 let scroll = $(window).scrollTop();
//                 if(scroll >= nav_offset_top){
//                     $('.site-main .header_area .main-menu').addClass('navbar_fixed');
//                 } else {
//                     $('.site-main .header_area .main-menu').removeClass('navbar_fixed');
//                 }
//             })
//         }
//     }
//     navbarFixed();
// });
