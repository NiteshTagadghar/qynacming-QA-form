import React, { useContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MyGlobalContext } from './store/context';
import { allQuestions } from './Utils/Quesetions';
import FinalResult from './Components/FinalResult';
import BackButton from './Components/BackButton';
import QuestionsContainer from './Components/QuestionsContainer';
import NextButton from './Components/NextButton';

function App() {

  // const result: any = useContext(currentQuestionContext)
  // const [, , result]:any=React.useContext(currentQuestionContext)
  const [currentQuestion, setCurrentQuestion] = useState<any>(0)
  const [result, setResult] = useState<any>([])




  console.log(result, 'result in app js')
  return (
    <MyGlobalContext.Provider
      value={{ currentQuestion, setCurrentQuestion, result, setResult }}
    >
      <div>
        {
          result.length === allQuestions.questions.length ?
            <FinalResult /> :
            (
              <>
                <div>
                  <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div className="relative transform overflow-hidden  rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">

                              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <QuestionsContainer />
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 justify-between">

                              <NextButton />

                              <BackButton />

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>


              </>
            )
        }

      </div>

    </MyGlobalContext.Provider>
  )
}

export default App;
