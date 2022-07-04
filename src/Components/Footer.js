import React from 'react';
import Link from "./Link.js";

class Footer extends React.Component{
    render(){
        return (
        <footer class="footer-basic">
            <div class="">
                <div class="site-logo text-center py-2" >
                    <Link href="#" />
                    <img id="jtech-logo" src="img/jtechLogo.png" alt="jtechLogo" aria-hidden="true" />
                </div>
            </div>
            <div class="social">
                <Link href="https://github.com/Jeanniet89" rel="noopener noreferrer" target="_blank" aria-label="github" /><i class="fa-brands fa-github" />
                <Link href="https://www.linkedin.com/in/jeannie-torres/" rel="noopener noreferrer" target="_blank" aria-label="linkedin" /><i class="fa-brands fa-linkedin-in" />
                <Link href="mailto:jeanniet89@gmail.com" rel="noopener noreferrer" target="_blank" aria-label="email" /><i class="fa-solid fa-envelope" />
                <Link href="https://docs.google.com/document/d/1qNkhrYK5gTDhB-iHQyVLz2-z49nv2do8q_L_cEBHdG8/edit?usp=sharing" rel="noopener noreferrer" target="_blank" aria-label="file" /><i class="fa-solid fa-file" />
            </div>
            <ul class="list-inline">
                <li class="list-inline-item" /><Link href="#" />Home
                <li class="list-inline-item" /><Link href="#about" />About
                <li class="list-inline-item" /><Link href="#skills" />Skills
                <li class="list-inline-item" /><Link href="#projects" />Projects
            </ul>
            <div class="copyright">
                <p class="para">Copyright ©2022 All rights reserved | This template is made by<br />
                    <Link href="#" /><span>
                        J.Tech
                    </span>
                </p>
            </div>
        </footer>
        );
    }
}

export default Footer;