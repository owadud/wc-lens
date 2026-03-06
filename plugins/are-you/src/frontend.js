import React, { useState, useEffect } from "react"
import { createRoot } from "react-dom/client"
import "./frontend.scss"

const divsToUpdate = document.querySelectorAll(".paying-attention-update-me")

console.log('Found divs to update:', divsToUpdate.length)

divsToUpdate.forEach(function (div) {
  const preElement = div.querySelector("pre")
  if (preElement) {
    try {
      const data = JSON.parse(preElement.innerHTML)
      console.log('Parsed data:', data)
      // Clear the div and add the frontend class for styling
      div.innerHTML = ""
      div.classList.add("paying-attention-frontend")
      const root = createRoot(div)
      root.render(React.createElement(Quiz, data))
    } catch (error) {
      console.error('Error parsing JSON:', error, 'HTML content:', preElement.innerHTML)
    }
  } else {
    console.error("No <pre> element found in div with class 'paying-attention-update-me'")
  }
})

function Quiz(props) {
  const [isCorrect, setIsCorrect] = useState(undefined)
  const [isCorrectDelayed, setIsCorrectDelayed] = useState(undefined)

  useEffect(() => {
    if (isCorrect === false) {
      setTimeout(() => {
        setIsCorrect(undefined)
      }, 2600)
    }

    if (isCorrect === true) {
      setTimeout(() => {
        setIsCorrectDelayed(true)
      }, 1000)
    }
  }, [isCorrect])

  function handleAnswer(index) {
    if (index === props.correctAnswer) {
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }
  }

  if (!props.question || !Array.isArray(props.answers) || props.answers.length === 0) {
    return React.createElement("div", null, "No quiz data available")
  }

  return React.createElement(
    "div",
    { className: "paying-attention-frontend", style: { backgroundColor: props?.bgColor || '' } },
    React.createElement("p", null, props.question),
    React.createElement(
      "ul",
      null,
      props.answers.map((answer, index) => {
        const liClass =
          (isCorrectDelayed === true && index === props.correctAnswer ? "no-click" : "") +
          (isCorrectDelayed === true && index !== props.correctAnswer ? " fade-incorrect" : "")
        return React.createElement(
          "li",
          {
            key: index,
            className: liClass,
            onClick: isCorrect === true ? undefined : () => handleAnswer(index)
          },
          isCorrectDelayed === true && index === props.correctAnswer
            ? React.createElement(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  className: "bi bi-check",
                  viewBox: "0 0 16 16"
                },
                React.createElement("path", {
                  d: "M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"
                })
              )
            : null,
          isCorrectDelayed === true && index !== props.correctAnswer
            ? React.createElement(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "20",
                  height: "20",
                  className: "bi bi-x",
                  viewBox: "0 0 16 16"
                },
                React.createElement("path", {
                  d: "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                })
              )
            : null,
          answer
        )
      })
    ),
    React.createElement(
      "div",
      {
        className:
          "correct-message" +
          (isCorrect === true ? " correct-message--visible" : "")
      },
      React.createElement("p", null, "That is correct!")
    ),
    React.createElement(
      "div",
      {
        className:
          "incorrect-message" +
          (isCorrect === false ? " correct-message--visible" : "")
      },
      React.createElement("p", null, "Sorry, try again.")
    )
  )
}