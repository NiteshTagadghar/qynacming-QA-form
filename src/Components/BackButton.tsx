
import { useGlobalContext } from '../store/context';

function BackButton() {


        // state from context file
        const { currentQuestion, setCurrentQuestion }: any = useGlobalContext()

        //update currentquestion state for previous question
        const handleBackButton = () => {
          if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
          }
        };

    return (
        <div onClick={()=>handleBackButton()} className="mt-3 inline-flex w-full cursor-pointer justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
            <button >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
            </svg>
            </button>

        </div>
    )
}

export default BackButton