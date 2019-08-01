import React from 'react';
import { Link } from 'react-router-dom';
import {headerStyles,imageStyles, buttonStyles} from '../styles';
 

export const IntroToCookbook = () =>{
    return(
        <div>
            <h1 style = {headerStyles}>Welcome to Shopping List</h1>
            <img src = "https://cdn.pixabay.com/photo/2016/01/27/22/10/shopping-1165437_960_720.jpg" alt = "Cookbook logo" style = {imageStyles}/><br/>
            <Link to = "/recipes/new"> <button className = "btn btn-default" style = {buttonStyles}>Add new recipe!</button></Link>
        </div>
    );
};