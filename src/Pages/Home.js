import React from "react";
import Config from "../config.json";
import "../App.css";


class Home extends React.Component{
	render() {
		return (
			<main class="site-main">
				<section class="about-area" id="about">
						<div class="container">
							<div class="row">
								<div class="col-lg-6 col-md-12">
									<div class="about-image">
										<img src="../img/me.jpeg" alt="about me" class="img-fluid" />
									</div>
								</div>
								<div class="col-lg-6 col-md-12 about-title">
									<h2 class="text-uppercase pt-5">
										<span>Let me</span>
										<span>introduce</span>
										<span>myself</span>
									</h2>
									<div class="paragraph text-align">
										<p class="para"> 
											My name is Jeannie Torres, I am a Full Stack web Developer with a passion for front end designs.
											I'm currently working within the Jamstack; connecting dynamic React front-ends
											to flexible & scalable content management systems.
										</p>
										<p class="para">
											As a developer I am persistent, passionate, & eager to continue growing in the field. 
											After spending over 6 years as an account manager; I realized that it was not the right path for me.
											I strive for challenge & mental stimulation to keep myself motivated, 
											which is why I fell in love with software development & ultimately found my calling.
										</p>
									</div>
									<button href="https://docs.google.com/document/d/1qNkhrYK5gTDhB-iHQyVLz2-z49nv2do8q_L_cEBHdG8/edit?usp=sharing" rel="noopener noreferrer" target="_blank" class="btn button primary-button text-uppercase" type="button" aria-label="file">Download CV</button>
								</div>
							</div>
						</div>
					</section>
	
					<section class="skills-area" id="skills">
						<div class="container">
							<div class="row">
								<div class="col-lg-12 skills-title">
									<h1 class="text-uppercase title-text"> Skills </h1>
								</div>
							</div>
						</div>
						<div class="container skills-list">
							<div class="row">
								<div class="col-lg-3 col-md-6 col-sm-12">
									<div class="skills">
										<div class="py-4">
											<img class="skills-img rounded-circle" src="img/css-3.svg" alt="CSS3 logo"/>
											<div class="card-body text-center">
												<h5 class="card-title text-uppercase font-roboto">CSS3</h5>
												<p class="card-text text-secondary">
													Language used to style HTML documents and implemented its style standards and guides.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-12">
									<div class="skills">
										<div class="py-4">
											<img class="skills-img rounded-circle" src="img/html-1.svg" alt="HTML5 logo"/>
											<div class="card-body text-center">
												<h5 class="card-title text-uppercase font-roboto">HTML5</h5>
												<p class="card-text text-secondary">
													Designed web applications using this markup language.
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-12">
									<div class="skills">
										<div class="py-4">
											<img class="skills-img rounded-circle" src="img/javascript-1.svg" alt="JS logo"/>
											<div class="card-body text-center">
												<h5 class="card-title text-uppercase font-roboto">Javascript</h5>
												<p class="card-text text-secondary">
													Implemented the front-end logic that defines the behavior of the visual elements of a web application.   
												</p>
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-12">
									<div class="skills">
										<div class="py-4">
											<img class="skills-img rounded-circle" src="img/gatsby.svg" alt="Gatsby logo"/>
											<div class="card-body text-center">
												<h5 class="card-title text-uppercase font-roboto">Gatsby</h5>
												<p class="card-text text-secondary">
												An open-source static site generator framework based on React that helps developers build blazing fast websites and apps.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="container skills-list">
							<div class="row">
							<div class="col-lg-3 col-md-6 col-sm-12">
								<div class="skills">
									<div class="py-4">
										<img class="skills-img rounded-circle" src="img/Bootstrap.png" alt="Bootstrap logo"/>
										<div class="card-body text-center">
											<h5 class="card-title text-uppercase font-roboto">Bootstrap</h5>
											<p class="card-text text-secondary">
												Front-end framework used to create UI interface elements, modern websites, and web apps.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 col-sm-12">
								<div class="skills">
									<div class="py-4">
										<img class="skills-img rounded-circle" src="img/react-1.svg" alt="Reactjs logo"/>
										<div class="card-body text-center">
											<h5 class="card-title text-uppercase font-roboto">React.js</h5>
											<p class="card-text text-secondary">
												Built cross-browser compatible and accessibility compliant websites using React.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 col-sm-12">
								<div class="skills">
									<div class="py-4">
										<img class="skills-img rounded-circle" src="img/nodejs-1.svg" alt="Nodejs logo"/>
										<div class="card-body text-center">
											<h5 class="card-title text-uppercase font-roboto">Nodejs</h5>
											<p class="card-text text-secondary">
												Experience developing and writing server-side web application logic or back-end components in JavaScript.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-3 col-md-6 col-sm-12">
								<div class="skills">
									<div class="py-4">
										<img class="skills-img rounded-circle" src="img/Wordpresslogo.png" alt="WP logo"/>
										<div class="card-body text-center">
											<h5 class="card-title text-uppercase font-roboto">WordPress Developer</h5>
											<p class="card-text text-secondary">
												Well versed in the infrastructure and ecosystem of the WordPress platform. 
											</p>
										</div>
									</div>
								</div>
							</div>  
							</div>
						</div>
					</section>
				
					<section class="project-area" id="projects">
						<div class="container">
							<div class="project-title">
								<h1 class="text-uppercase">Projects</h1>
							</div>
					
							<div class="button-group">
								<button type="button" class="active" id="btn1" data-filter="*"> All </button>
								<button type="button" data-filter=".wordpress"> WordPress Websites </button>
								<button type="button" data-filter=".portfolio"> My Projects </button>
							</div>
					
							<div class="row grid responsive">
								<div class="col-lg-3 col-md-6 col-sm-12 element-item portfolio">
									<div class="my-projects">
										<div class="img">
											<a class="test-popup-link" href="img/Got-tech.png"> 
												<img class="img-fluid" src="img/Got-tech.png" alt="Portfolio1"/>
											</a>
										</div>
										<div class="title text-center py-4">
											<h4 class="text-uppercase">
												Got Tech?
											</h4>
											<span class="text-secondary"> Portfolio<br/> A Job Search engine focusing on SoftWare Development. </span>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-12 element-item portfolio">
									<div class="my-projects">
										<div class="img">
											<a class="test-popup-link" href="img/cuentaapp.png"> 
												<img class="img-fluid" src="img/cuentaapp.png" alt="Portfolio2"/>
											</a>
										</div>
										<div class="title text-center py-4">
											<h4 class="text-uppercase">
												Cuenta
											</h4>
											<span class="text-secondary"> Portfolio<br/> A bill splitting App. </span>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-12 element-item wordpress">
									<div class="my-projects">
										<div class="img">
											<a class="test-popup-link" href="./img/RnRwordpress.png"> 
												<img class="img-fluid" src="./img/RnRwordpress.png" alt="WordPress1"/>
											</a>
										</div>
										<div class="title text-center py-4">
											<h4 class="text-uppercase">
												R&R
											</h4>
											<span class="text-secondary"> WordPress Sites<br/>A heavy construction road and bridge and industrial specialty services provider. </span>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 col-sm-12 element-item wordpress">
									<div class="my-projects">
										<div class="img">
											<a class="test-popup-link" href="img/dlabsteam2.png">                         
												<img class="img-fluid" src="img/dlabsteam2.png" alt="WordPress2"/>
											</a>
										</div>
										<div class="title text-center py-4">
											<h4 class="text-uppercase">
												DLab Team
											</h4>
											<span class="text-secondary"> WordPress Sites<br/>Upcoming Redesign of DLab Team website.</span>
										</div>
									</div>
								</div>
							</div>
						</div>
				</section>
			</main>
		);
	} 
}

export default Home;
