import React from 'react';

class Banner extends React.Component{
    render(){
        return    <section class="site-banner jumbotron jumbotron-fluid">
        <div class="container">
         <div class="site-title">
             <h3 class="title-text">Hey!</h3>
             <h1 class="title-text text-uppercase">I'm Jeannie.</h1>
             <h4 class="title-text text-uppercase">Full Stack Web Developer</h4>
             <div class="site-buttons">
                 <div class="d-flex flex-row flex-wrap">
                     <a href="mailto:jeanniet89@gmail.com" rel="noopener noreferrer" target="_blank" class="btn button primary-button text-uppercase" type="button" role="button"aria-label="email">Hire me</a>
                     <a href="https://docs.google.com/document/d/1qNkhrYK5gTDhB-iHQyVLz2-z49nv2do8q_L_cEBHdG8/edit?usp=sharing" rel="noopener noreferrer" target="_blank" class="btn button primary-button text-uppercase" type="button" role="button" aria-label="file">Get cv</a>                
                     </div>
             </div>
         </div>
        </div>
     </section>
    }
}

export default Banner;