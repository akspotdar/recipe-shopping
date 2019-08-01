import React from 'react';
import {Link} from 'react-router-dom';
import {headerStyles, imageStyles, buttonStyles, paragraphStyles} from '../styles';
import PropTypes from 'prop-types';


export const Recipe = (props) => {
    return(
        <div>
            <h2 style = {headerStyles}>{props.title}</h2>
            <img alt = "Recipe logo" style = {imageStyles} src = {props.image}/>
            <p style = {paragraphStyles}><h3>Ingredients</h3>{props.ingredients}</p>
            <p style = {paragraphStyles}><h3>Description</h3>{props.description}</p>
            <Link to  = {`/recipes/${props.id}/edit`}><button type = "button" className = "btn btn-default"  style = {buttonStyles}>Edit this recipe</button></Link>
            <Link to  = "/recipes"><button type = "button" className = "btn btn-default"  style = {buttonStyles}>Back to recipes</button></Link>
        </div> 
    );
};

Recipe.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};
 