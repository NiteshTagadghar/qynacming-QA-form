import React from 'react'
import { useGlobalContext } from '../store/context';

function FinalResult() {

    const { setCurrentQuestion, result, setResult }: any = useGlobalContext()


    const onRestart = () => {
        setCurrentQuestion(0);
        setResult([]);
    };


    return (

        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                    <div className="relative transform overflow-hidden  rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="">
                 <div>


    <div className="finalResult">

       {result.map((element: any, i: any) =>
                                //   check if the question type is equal to chekcbox
                                element.questionType === "checkbox" ? (
                                    <ul key={i} >
                                        <li  >
                                            <b>
                                                {i + 1}) {element.question}
                                            </b>
                                        </li>
                                        {/* {iterate over the answers selected with checkbox} */}
                                        {element.answer.map(
                                            (element: any, i: any) =>
                                                element.answer && (
                                                    <li key={i}>
                                                        {i + 1}) {element.answer}
                                                    </li>
                                                )
                                        )}
                                    </ul>
                                ) : (
                                    // {iterate over non checkbox element}
                                    <ul key={i}>
                                        <li>
                                            <b>
                                                {" "}
                                                {i + 1}) {element.question}
                                            </b>
                                        </li>
                                        {element.answer ? (
                                            // if the answer is selected
                                            <li className='ml-4 '>{element.answer}</li>
                                        ) : (
                                            // if no answer is selected
                                            <mark>No option selected</mark>
                                        )}
                                    </ul>
                                )
                            )}
                                        {/* {calling restart handler} */}
                                        <div className='flex justify-end'>
                                        <button className="bg-blue-500 mt-4  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onRestart}>Restart</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default FinalResult