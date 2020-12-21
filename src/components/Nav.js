import React, { useState, useEffect }  from "react";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { getCategories } from '../helpers/cockpit';
import SocialFb from "../components/SocialFb.js";
import '../stylesheet/nav.css';

export const Nav = ({ category }) => {
    const [categories, setCategories] = useState([])
    const [categoryActive, setCategoryActive] = useState(category);
    const [isNav, setIsNav] = useState(false);
    const browserHistory = useHistory();

    const handleCategory = (id) => {
        if(!id) browserHistory.push(`/`)
        else browserHistory.push(`/category/${id}`)
        setCategoryActive(id);
    }

    const handleNav = () => {
        let domElement = document.getElementById("nav")
        if(!isNav) domElement.classList.add("show")
        else domElement.classList.remove("show")
        setIsNav(!isNav);
    }

    useEffect (() => {
        getCategories()
        .then( result => { 
            setCategories(result)
        })
    }, []);


    return (
        <>
        <nav id="nav">
            <ul>
                <li className="title">CATEGORIAS <i className="fas fa-times" onClick={ () => handleNav() }></i></li>
                <li className={ !categoryActive ? "active" : "" } onClick={ () =>{ handleCategory(); handleNav() }}>
                    <Router>
                        <Link to={`/`} onClick={ () => handleNav() }>Todos</Link>
                    </Router>
                    <i className="fas fa-chevron-right"></i>
                </li>
                {
                    categories.map( ( category ) => (
                        <li key={ category._id } className={ category._id === categoryActive ? "active" : "" } onClick={ () => { handleCategory(category._id); handleNav() } }>
                            <Router>
                                <Link to={`/category/${category._id}`}>{ category.name }</Link>
                            </Router>
                            <i className="fas fa-chevron-right"></i>
                        </li>
                    ))
                }
            </ul>
            <SocialFb />
        </nav>
        <button className="show-btn btn btn-primary mb-3" onClick={ () => handleNav() }><i className="fas fa-filter"></i> Categorias</button>
        </>
    );
}

export default Nav