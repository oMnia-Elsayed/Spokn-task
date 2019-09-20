import React from 'react';
import './Newspaper.scss';

const NewsPaperCard = ( { NewsPaperItem }) => {

    return( 
        <div className="newspaper">
            <div className="newspaper__logo">
                <img  alt="Newspaper logo"  src= { NewsPaperItem.logo }/>
            </div>
            <div className="newspaper__details">
                <h4> { NewsPaperItem.name } </h4>
                <span> { NewsPaperItem.items } Items</span>
            </div>
        </div>
    ) 
}

export default NewsPaperCard;