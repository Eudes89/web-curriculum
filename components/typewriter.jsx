'use client'
import { useState, useEffect } from "react"

export default function Typewriter (){

    const [text1, setText1] = useState('');

    const firstText = 'Ollá, meu nome é Eudes Azevedo. ' + 
    'É um prazer conhecê-lo(a)! ' +
    'Clique ou Toque em minha foto para saber mais sobre mim.'
    
    useEffect(() => {
        let currentIndex = 0;

        const addNextLetter = () => {
            setText1((prevText) => prevText + firstText[currentIndex]);
            currentIndex++;

            if(currentIndex < firstText.length - 1){
                setTimeout(addNextLetter, 50);
            }
        };

        setTimeout(addNextLetter, 50);

        return () => clearTimeout();

    }, [firstText]);


    return(
        <div className="flex flex-col items-center gap-y-2 mt-4
        text-center bg-black bg-opacity-80 rounded-lg mx-2 my-2
        w-[350px] h-[150px] ring-2 ring-zinc-500 shadow-md shadow-white
         animate-zoomIn"> 

            <p className="text-green-400 text-lg font-bold px-8 py-4">
                {text1}
            </p>
           
        </div>
    )
}