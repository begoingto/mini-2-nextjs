import React from 'react';

function CardCategory({id,name,image}) {
    return (
        <div className="flex flex-col iteclassNamenter pb-10 text-center">
            <div className="flex justify-center">
                <img className="w-32 h-32 mb-3 rounded-full shadow-lg object-cover" src={ image ? image : "https://bit.ly/44Oio4m"} alt="Bonnie image"/>
            </div>
            <h5 className="mb-1 text-xl text-gray-900 dark:text-white capitalize">
                { name ? name : "Bonnie Green" }
            </h5>
        </div>
    );
}

export default CardCategory;