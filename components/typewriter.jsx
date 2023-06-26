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
            {wait && 
            
                <p className="text-bold text-xl text-green-200
                animate-twPulse animate-infinite">
                 Aguarde...
               </p>
            }
            {first && 
                <p className="text-white text-lg animate-backInLeft
                border border-white p-4 bg-black bg-opacity-30">
                    Olá, eu me chamo Eudes Azevedo. 
                </p>
            }

            {second && 
                <p className="text-white text-lg animate-backInLeft
                border border-white p-4 bg-black bg-opacity-30">
                    É um prazer conhecê-lo (a).
                </p>
            }

            {third && 
                <p className="text-white text-lg animate-backInLeft
                border border-white p-4 bg-black bg-opacity-30">
                    Este é meu web curriculum vitae.
                </p>
            }

            {fourth && 
                <p className="text-white text-lg animate-backInLeft
                border border-white p-4 bg-black bg-opacity-30">
                    Clique / toque em minha foto
                </p>
            }

            {fifth && 
                <p className="text-white text-lg animate-backInLeft
                border border-white p-4 bg-black bg-opacity-30">
                    para ver o Menu.
                </p>
            }

        </div>
    )
}