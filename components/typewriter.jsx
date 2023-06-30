import { useState } from "react"

export default function Typewriter (){

    const [wait, setwait] = useState(true);
    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [fourth, setFourth] = useState(false);
    const [fifth, setFifth] = useState(false);

    function writer (){

        setTimeout(() => {
            setwait(false);
        },1000)
        
        setTimeout(() => {
            setFirst(true);
        }, 1000)
        
        setTimeout(() => {
            setSecond(true)
        },2000)

        setTimeout(() => {
            setThird(true)
        },3000)

        setTimeout(() => {
            setFourth(true)
        },4000)

        setTimeout(() => {
            setFifth(true)
        },5000)
    }


    writer()


    return(
        <div className="flex flex-col items-center gap-y-1 mt-2
        ">
            {first ? 
            <p 
            className="text-white text-lg font-bold animate-backInLeft
            border border-white rounded-r-xl rounded-b-xl p-2 bg-black
            bg-opacity-60">
                Olá, eu me chamo Eudes Azevedo.
            </p>

            :

            <p className="font-bold text-xl text-white mt-10 animate-twPulse
            animate-infinite bg-black p-8 rounded-full">
                CARREGANDO...
            </p> 
            } 

            {second && 
                <p className="text-white text-lg font-bold animate-backInLeft
                border border-white rounded-r-xl rounded-b-xl p-2 bg-black bg-opacity-60">
                    É um prazer conhecê-lo (a).
                </p>
            }

            {third && 
                <p className="text-white text-lg font-bold animate-backInLeft
                border border-white rounded-r-xl rounded-b-xl p-2 bg-black bg-opacity-60">
                    Este é meu web curriculum vitae.
                </p>
            }

            {fourth && 
                <p className="text-white text-lg font-bold animate-backInLeft
                border border-white rounded-r-xl rounded-b-xl p-2 bg-black bg-opacity-60">
                    Clique / toque em minha foto
                </p>
            }

            {fifth && 
                <p className="text-white text-lg font-bold animate-backInLeft
                border border-white rounded-r-xl rounded-b-xl p-2 bg-black bg-opacity-60">
                    para ver o Menu.
                </p>
            }

        </div>
    )
}