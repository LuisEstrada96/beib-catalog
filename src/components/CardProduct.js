import React from "react";
import ModalImage from "react-modal-image";
import '../stylesheet/cardProduct.css';
import { host } from '../config/config.js';

export const CardProduct = ({img}) => {
  return (
    <div className="card-product">
        <div className="card-image">
            <ModalImage
                small={ img.indexOf("http") ? host+img : img  }
                large={ img.indexOf("http") ? host+img : img  }
                alt={ img.substring(img.lastIndexOf('/') + 1) }
                className="imagev"
            />;
        </div>
    </div>	
  );
}

export default CardProduct