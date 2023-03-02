import React, { useContext } from 'react'
import { useGlobalContext } from '../store/context'
import { allQuestions } from '../Utils/Quesetions'

function QuestionsContainer() {

    const {currentQuestion}:any = useGlobalContext()



    console.log(currentQuestion, 'quetions in container')
    return (
        <div className="QuestionsContainer">
      {/* {displaying the current question} */}
      <h2>
        {currentQuestion + 1} {allQuestions.questions[currentQuestion].question}
        {allQuestions.questions[currentQuestion].validation ? (
          <span style={{ color: "red" }}>*</span>
        ) : null}
      </h2>
      <form id="myForm">
        {/* {iterating over current questions options} */}
        {allQuestions.questions[currentQuestion].questionoption?.map((Option) => {
          return (
            <div key={Option.optionid}>
              <input
              className='border'
                defaultValue={Option.optionvalue}
                // assigning name based on input type
                name={ 
                    allQuestions.questions[currentQuestion].questiontype ===
                  "Checkbox"
                    ? (Option.optionid).toString()
                    : (allQuestions.questions[currentQuestion].questionid).toString()
                }
                // selecting input type
                type={allQuestions.questions[currentQuestion].questiontype}
              />
              <label>{Option.optionvalue}</label>
            </div>
          );
        })}
      </form>
    </div>
    )
}

export default QuestionsContainer