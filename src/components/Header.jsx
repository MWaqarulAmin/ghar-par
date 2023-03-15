import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import gharParLogo from "../images/gharParLogo.svg";
import notificationIcon from "../images/notificationIcon.svg";
import locationIcon from "../images/locationIcon.svg";
import downArrowIcon from "../images/downArrowIcon.svg";
import cartIcon from "../images/cartIcon.svg";
import gradientNavbar from "../images/gradientNavbar.png";

export default function Header() {
	return (
		<>
			{/* First nav bar */}

			<Navbar className="firstNavbar sticky-top">
				<Container>
					<Navbar.Brand href="#home" className="firstNavBarHeading">
						Welcome to gharpar services portal
					</Navbar.Brand>
					<Nav className="justify-content-end">
						<Nav.Link href="#home" className="firstNavbarLinks">
							info@gharpar.co - +92 304 111 44 27
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>

			{/* Second Nav Bar */}

			<div class="main-navbar  ">
				<div class="top-navbar topNavbar ">
					<div class="container-fluid ">
						<div class="row ">
							<div class="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
								<img src={gharParLogo} alt="logo" className="gharParLogo" />
							</div>
							<div class=" col-md-5 my-auto ">
								<ul
									class="navbar-nav me-auto mb-2 mb-lg-0 "
									id="secondNavBarLinks"
								>
									<li class="nav-item">
										<a class="nav-link" href="#services">
											Services
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#products" id="productsLink">
											Products
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#my orders">
											My Orders
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#loyalty points" id="loyaltyLink">
											Loyalty Points
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#contact us">
											Contact Us
										</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#FAQ's">
											FAQ's
										</a>
									</li>
								</ul>
							</div>
							<div class="col-md-5 my-auto rightDiv">
								<ul class="nav justify-content-end ">
									<li class="nav-item rightIcons">
										<div className="notificationIconContainer">
											<img
												src={notificationIcon}
												alt="notification icon"
												id="notificationIcon"
											/>
											<div className="notificationIconDiv"></div>
										</div>
									</li>
									<li class="nav-item rightIcons">
										<p className="locationIconName">Hi, Muzammil</p>
										<div>
											<img
												src={locationIcon}
												alt="location icon"
												className="locationIcon"
											/>
											<p className="locationIconCity">Lahore</p>
										</div>
									</li>
									<li className="downArrowContainer rightIcons">
										<a class="nav-link" href="#down arrow ">
											<img
												src={downArrowIcon}
												alt="downArrow icon"
												className="downArrowIcon"
											/>
										</a>
									</li>
									<li>
										<a
											class="nav-link"
											href="#cart"
											className="cartIconContainer rightIcons"
										>
											<div className="cartIconBackground">
												<img
													src={cartIcon}
													alt="cart icon"
													className="cartIcon"
												/>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/* Gradient Nav Div */}

				<div>
					<img
						src={gradientNavbar}
						alt="gradient nav bar"
						id="gradientNavbar"
					/>
				</div>
			</div>

			{/* Third Nav Bar */}

			<nav class="navbar navbar-expand-lg thirdNavbar">
				<div class="container-fluid">
					<a href="#home" class="navbar-brand">
						<img src={gharParLogo} alt="logo" id="thirdNavbarLogo" />
					</a>
					<button
						type="button"
						class="navbar-toggler"
						data-bs-toggle="collapse"
						data-bs-target="#navbarCollapse"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarCollapse">
						<div class="navbar-nav">
							<ul class="navbar-nav me-auto mb-2 mb-lg-0">
								<li class="nav-item">
									<a class="nav-link" href="#All" id="linkAll">
										All
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#SKIN">
										SKIN
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#NAIL PAINT">
										NAIL PAINT
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#SCRUB">
										SCRUB
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#MAKEUP">
										MAKEUP
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#WAX">
										WAX
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#CLEANSER">
										CLEANSER
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="# FACE POLISHER">
										FACE POLISHER
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
