import React from 'react'
import ReactDOM from 'react-dom'
import "./frontend.scss"

const divsToUpdate = document.querySelectorAll(".paying-attention-update-me")

divsToUpdate.forEach(function(div) {
  // read any JSON-encoded props from the placeholder div's data attribute
  let data = {};
  try {
    data = div.dataset.props ? JSON.parse(div.dataset.props) : {};
  } catch (e) {
    console.warn('could not parse props data', e);
  }

  // prefer the modern root API if the page's ReactDOM supports it;
  // otherwise fall back to the classic render call so that the code
  // works with WordPress installations that still ship React 17.
  if (typeof ReactDOM.createRoot === 'function') {
    ReactDOM.createRoot(div).render(<Quiz {...data} />);
  } else {
    ReactDOM.render(<Quiz {...data} />, div);
  }

  // mark this element as handled so we don't try again later
  div.classList.remove("paying-attention-update-me");
})

function Quiz(props) {
  return (
    <div className="paying-attention-frontend">
      <p> {props.question} </p>
      <ul>
        {props.answers.map(function (answer){
          return <li>{answer}</li>
        })}
      </ul>  
      
    </div>
  )
}