import React from 'react'
import { useGlobalContext } from '../store/context'
import { allQuestions } from '../Utils/Quesetions'


function NextButton() {

    const { currentQuestion, setCurrentQuestion, result, setResult }: any = useGlobalContext()




    // const {setCurrentQuestion}:any = useGlobalContext()

    const handleNext = () => {
        const form: HTMLFormElement = document.querySelector('#myForm')!
        // getting the form element by ID
        let formData = new FormData(form)
        // checking validation and options selections

        console.log(formData.get((currentQuestion+1)),'form data')
        if (allQuestions.questions[currentQuestion].validation && !(formData.get((currentQuestion + 1).toString()))) {
            alert("Choose any option")
            return
        }
        // checking current question is less then questions length & incrementing currentquestion 
        if (currentQuestion >= 0 && currentQuestion + 2 <= allQuestions.questions.length) {
            setCurrentQuestion(currentQuestion + 1)
        }
        // checking weather the selected question type is checkbox
        if (allQuestions.questions[currentQuestion].questiontype === "Checkbox") {
            const chekboxdata: any = []
            // iterating over selected checkbox
            allQuestions.questions[currentQuestion].questionoption.forEach((Option) => {
                let ans = {
                    answer: formData.get((Option.optionid).toString())
                }
                chekboxdata.push(ans)
            })
            // updating Result context state of checkbox questions
            setResult([...result, {
                questionType: "checkbox",
                question: allQuestions.questions[currentQuestion].question,
                answer: chekboxdata
            }])

        }
        else {

            let ans = {
                question: allQuestions.questions[currentQuestion].question,
                answer: formData.get((currentQuestion + 1).toString()),
                questionType: allQuestions.questions[currentQuestion].questiontype

            }
            // updating Result context state of other question type
            setResult([...result, ans])
        }
        setCurrentQuestion(currentQuestion + 1)
    }



    return (
        <div onClick={() => handleNext()} className= {`inline-flex w-full cursor-pointer justify-center rounded-md border border-transparent ${allQuestions.questions.length !== (currentQuestion + 1) ? 'bg-blue-600 hover:bg-blue-700 ':'bg-green-600 hover:bg-green-700 ' }  px-4 py-2 text-base font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm`}>
            <button >
                {allQuestions.questions.length !== (currentQuestion + 1) ?

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                    </svg> :

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                }


            </button>
        </div>


    )
}

export default NextButton