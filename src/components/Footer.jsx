import "./Footer.css";
import appStore from "../images/appStore.png";
import playStore from "../images/playStore.png";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";

export default function Footer() {
	return (
		<>
			<hr />
			<div className="footer">
				<footer>
					<div className="container">
						<div className="row">
							<div className="col-sm-6 col-md-3 item">
								<h3>Contact Us</h3>
								<ul>
									<li>
										<a href="#About Us">About Us</a>
									</li>
									<li>
										<a href="#Privacy Policy">Privacy Policy</a>
									</li>
									<li>
										<a href="#Terms & Conditions">Terms & Conditions</a>
									</li>
								</ul>
							</div>
							<div className="col-sm-6 col-md-3 item secondColumn">
								<h3>GharPar on The Go</h3>
								<p id="secondText">
									Visit Apps Store and Google Play to download GharPar official
									app:
								</p>
								<img src={appStore} alt="app store" className="downloadImage" />
								<img
									src={playStore}
									alt="play store"
									className="downloadImage"
								/>
							</div>
							<div className="col-md-6 thirdColumn">
								<h3>Follow Us On</h3>
								<div className="col item social">
									<img src={facebook} alt="facebook" className="socialIcons" />
									<img
										src={instagram}
										alt="instagram"
										className="socialIcons"
									/>
									<img src={twitter} alt="twitter" className="socialIcons" />
								</div>
							</div>
						</div>
					</div>
					<hr />
					<p className="copyright">
						Copyright © 2020 <span>GharPar</span>. All Rights Reserved
					</p>
				</footer>
			</div>
		</>
	);
}
