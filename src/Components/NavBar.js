import React from "react";
// import { NavBar } from "react-bootstrap";
import {NavLink} from "react-router-dom";


class NavBar extends React.Component {
	render() {
		return (
			<header class="header_area">
				<div class="main-menu">
					<nav class="navbar navbar-expand-sm navbar-light">
						<button class="navbar-brand" href="#">
							<img src="./img/jtechLogo.png" alt="logo" />
						</button>
						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
							<ul class="nav navbar-nav">
								<li class="nav-item" />
									<NavLink class="nav-link" to="/" exact activeClassName='active' /><i class="fa fa-fw fa-home" />Home
								<li class="nav-item" />
									<NavLink class="nav-link" to="/about" activeClassName='active' /><i class="fa-solid fa-user-gear" />About
								<li class="nav-item" />
									<NavLink class="nav-link" to="/skills" activeClassName='active' /><i class="fa-solid fa-puzzle-piece" />Skills   
								<li class="nav-item" />
									<NavLink class="nav-link" to="/projects" activeClassName='active' /><i class="fa-solid fa-code-pull-request" />Projects
							</ul>
						</div>  
					</nav>
				</div>
			</header>
		);
	}
};

export default NavBar;
