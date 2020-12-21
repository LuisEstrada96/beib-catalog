import React from "react";
import '../stylesheet/header.css';
import { phoneNumber } from '../config/config.js';

export const Header = () => {
  return (
    <header>
		<div className="first-nav">
			<div className="container">
				<p className="phone-numbers">
					Teléfono:  
					<a href={`tel:${ phoneNumber }`} target="_blank"> { phoneNumber }</a>
				</p>
				<p className="social-media">
					<a href="https://facebook.com/PedidosBeiBShoes/" target="_blank">
						<i className="fab fa-facebook-square"></i>
					</a>
					<a href={ `https://wa.me/${ phoneNumber }` } target="_blank">
						<i className="fab fa-whatsapp"></i>
					</a>
				</p>
			</div>
		</div>
		<div className="brand text-center">
			<img src={process.env.PUBLIC_URL + '/logo.png'} />
		</div>
		<div className="nav-categories">
			<div className="container text-center">
				<p className="text-white font-weight-bold pt-1">
					<i className="fas fa-crown"></i>&nbsp;&nbsp;Todos nuestros catálogos se actualizan automáticamente&nbsp;&nbsp;<i className="fas fa-crown"></i>
				</p>
			</div>
		</div>
    </header>
  );
}

export default Header