import "./body.css";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import mainProductBg1 from "../images/mainProductBg1.png";
import mainProduct1 from "../images/mainProduct1.png";
import arrownext from "../images/arrownext.png";
import cardListImage2 from "../images/cardListImage2.png";
import cardListImage3 from "../images/cardListImage3.png";
import downArrowBlack from "../images/downArrowBlack.png";
import starYellow from "../images/starYellow.svg";
import starGray from "../images/starGray.svg";
import productVariants from "../images/productVariants.png";
import ml300 from "../images/ml300.png";
import removeIcon from "../images/removeIcon.svg";

export default function Body() {
	return (
		<>
			<Container className="bodyContainer">
				<div className="productContainer">
					<img src={mainProductBg1} alt="product" className="mainProductBg1" />
					<img src={mainProduct1} alt="product" className="mainProduct1" />
				</div>
				<div className="productDetailsContainer">
					<p className="productName">Gentle Skin Cleanser</p>
					<p className="beTheFirst">Be the first to review this product</p>
					<div className="starContainer">
						<img src={starYellow} alt="star" className="star" />
						<img src={starYellow} alt="star" className="star" />
						<img src={starYellow} alt="star" className="star" />
						<img src={starYellow} alt="star" className="star" />
						<img src={starGray} alt="star" className="star" />
						<p className="ratings36">36Ratings</p>
					</div>
					<hr />
					<div className="priceDiv">
						<p className="price">Rs. 7,250</p>
						<p className="priceText">- 300 Ml</p>
					</div>
					<hr />
					<p className="description">
						Formulated with pure fermented green tea extract in lieu of
						distilled water, TonyMoly Chok Chok Green Tea Watery Cream provides
						intense hydration without being sticky or too heavy on skin.
					</p>
					<hr />
					<div className="quantityContainer">
						<p className="quantity">Quantity:</p>
						<div className="quantityRectangle">
							<p className="minusSign"> - </p>
							<p className="oneSign"> 1 </p>
							<p className="plusSign"> + </p>
						</div>
					</div>
					<hr />
					<p className="availability">Availability: In stock</p>
					<div className="productVariantsContainer">
						<div className="productVariantsImageDiv">
							<img
								src={productVariants}
								alt="product variants"
								className="productVariantsImage"
							/>
							<div className="ml300">
								<img src={ml300} alt="300 ML" />
							</div>
						</div>
						<div className="productVariantsImageDiv">
							{" "}
							<img
								src={productVariants}
								alt="product variants"
								className="productVariantsImage"
							/>
						</div>
						<div className="productVariantsImageDiv">
							{" "}
							<img
								src={productVariants}
								alt="product variants"
								className="productVariantsImage"
							/>
						</div>
						<div className="productVariantsImageDiv">
							<img
								src={productVariants}
								alt="product variants"
								className="productVariantsImage"
							/>
						</div>
					</div>
					<hr />
					<button className="cartButton">Add to Cart</button>
					<button className="buyButton">Buy Now</button>
				</div>
				{/* <div className="content"> */}
				<Container>
					<Card className="card ">
						<div className="cardHeader">
							<p className="myCartHeading">MY CART</p>
							<div className="coloredDiv">
								<p>3</p>
							</div>
							<p className="itemRemovedText">item removed.</p>
							<p className="undoText">Undo</p>
						</div>
						<ListGroup variant="flush">
							<ListGroup.Item className="cardList">
								<div className="cardListImageDiv ">
									<img
										src={productVariants}
										alt="product"
										className="cardListImage"
									/>
								</div>
								<div className="listFirstLine">
									<p className="listProductName">Skin Cleanser - 550ML</p>
									<img
										src={downArrowBlack}
										alt="down arrow icon"
										className="downArrow"
									/>
									<div className="listSecondLine">
										<div className="listQty">
											<p className="qtyText">Qty</p>
											<p className="qty1">1</p>
											<img
												src={downArrowBlack}
												alt="down arrow icon"
												className="listDownArrow"
											/>
										</div>
										<div className="remove">
											<img
												src={removeIcon}
												alt="remove icon"
												className="removeIcon"
											/>
											<p className="removeText">Remove</p>
										</div>
										<div>
											<p className="listPrice">Rs. 7,250</p>
										</div>
									</div>
								</div>
							</ListGroup.Item>
							<ListGroup.Item className="cardList">
								<div className="cardListImageDiv ">
									<img
										src={cardListImage2}
										alt="product"
										className="cardListImage2"
									/>
								</div>
								<div className="listFirstLine">
									<p className="listProductName">Hand Cream - 300ML</p>
									<img
										src={downArrowBlack}
										alt="down arrow icon"
										className="downArrow"
									/>
									<div className="listSecondLine">
										<div className="listQty">
											<p className="qtyText">Qty</p>
											<p className="qty1">1</p>
											<img
												src={downArrowBlack}
												alt="down arrow icon"
												className="listDownArrow"
											/>
										</div>
										<div className="remove">
											<img
												src={removeIcon}
												alt="remove icon"
												className="removeIcon"
											/>
											<p className="removeText">Remove</p>
										</div>
										<div>
											<p className="listPrice">Rs. 1200</p>
										</div>
									</div>
								</div>
							</ListGroup.Item>
							<ListGroup.Item className="cardList">
								<div className="cardListImageDiv ">
									<img
										src={cardListImage3}
										alt="product"
										className="cardListImage3"
									/>
								</div>
								<div className="listFirstLine">
									<p className="listProductName">Eye Cream - 300ML</p>
									<img
										src={downArrowBlack}
										alt="down arrow icon"
										className="downArrow"
									/>

									<div className="listSecondLine">
										<div className="listQty">
											<p className="qtyText">Qty</p>
											<p className="qty1">1</p>
											<img
												src={downArrowBlack}
												alt="down arrow icon"
												className="listDownArrow"
											/>
										</div>
										<div className="remove">
											<img
												src={removeIcon}
												alt="remove icon"
												className="removeIcon"
											/>
											<p className="removeText">Remove</p>
										</div>
										<div>
											<p className="listPrice">Rs. 1150</p>
										</div>
									</div>
								</div>
							</ListGroup.Item>
						</ListGroup>
						<div className="cardListCheckout">
							<p className="checkout">Checkout - Rs. 9600</p>
							<div className="arrowNextContainer">
								<img src={arrownext} alt="arrow next" className="arrownext" />
							</div>
						</div>
					</Card>
					<p className="placeText">Place your minimum order of Rs. 1200</p>
				</Container>
			</Container>
		</>
	);
}
