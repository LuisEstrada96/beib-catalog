import React, { useState, useEffect }  from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { getCategories } from '../helpers/cockpit';
import Nav from "../components/Nav.js";


export const Main = () => {

    const [categories, setCategories] = useState([])
    const browserHistory = useHistory();

    const handleCategory = (id) => {
        browserHistory.push(`/category/${id}`)
    }

    useEffect (() => {
        getCategories()
        .then( result => { 
            setCategories(result)
        })
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-lg-5 col-xl-3">
                    <Nav category={""} />
                </div>
                <div className="col-md-8 col-lg-7 col-xl-9 text-center">
                {
                    categories.map( ( category ) => (
                        <button className="btn category-item text-center pl-4 pr-4 p-2 mb-2" key={ category._id } onClick={ () => { handleCategory(category._id);} }>
                            { category.name }
                        </button>
                    ))
                }
                </div>
            </div>
        </div>
    );
}

export default Main