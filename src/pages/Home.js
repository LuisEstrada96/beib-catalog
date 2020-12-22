import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from '../helpers/cockpit';
import CardProduct from "../components/CardProduct.js";
import Nav from "../components/Nav.js";
import Loader from "../components/Loader.js";
import '../stylesheet/home.css';

export const HomePage = () => {
  let { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();

  useEffect (() => {
    setLoading(true);
    getProducts(category)
    .then( result => { 
        setProducts(result);
        setLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}, [category]);


  return (
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-lg-5 col-xl-3">
                <Nav category={ category }/>
            </div>
            <div className="col-md-8 col-lg-7 col-xl-9">
                <div className="row">
                    { 
                        loading ?
                        (<Loader />) : (
                            products.length == 0 ? (
                                <p>No hay productos en esta categoría</p>
                            ) : (
                                products.map( product => {
                                    return(
                                        <div className="col-md-12 col-xl-6 col-lg-12" key={ product._id }>
                                            <CardProduct img={ product.image }/>
                                        </div>
                                    );
                                })
                            )
                        )
                    }
                </div>
            </div>
        </div>
    </div>
  );
}

export default HomePage