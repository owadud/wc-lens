import React from 'react';
import ReactDom from 'react-dom';
import "./frontend.scss";

const divsToUpdate = document.querySelectorAll(".are-you-frontend");

divsToUpdate.forEach(function (div){
   ReactDom.render(<Quiz/>,div)
    div.classList.remove("are-you-frontend");
})

function Quiz(){
    return (
        <div className=".are-you-frontend">
            Hello from React

        </div>
    )
}