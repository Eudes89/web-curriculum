import { useState } from "react"

export default function Typewriter (){

    const [first, setFirst] = useState(false);
    const [second, setSecond] = useState(false);
    const [third, setThird] = useState(false);
    const [fourth, setFourth] = useState(false);
    const [fifth, setFifth] = useState(false);

    function writer (){
        
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
        <div className="flex flex-col items-center gap-y-3 mt-4">
            
            {first && 
                <p className="text-white text-lg animate-bounceIn
                ">
                    Olá, eu me chamo Eudes Azevedo. 
                </p>
            }

            {second && 
                <p className="text-white text-lg animate-bounceIn
                ">
                    É um prazer conhecê-lo (a).
                </p>
            }

            {third && 
                <p className="text-white text-lg animate-bounceIn
                ">
                    Este é meu web curriculum vitae.
                </p>
            }

            {fourth && 
                <p className="text-white text-lg animate-bounceIn
                ">
                    Clique / toque em minha foto
                </p>
            }

            {fifth && 
                <p className="text-white text-lg animate-bounceIn
                ">
                    para ver o Menu ^^
                </p>
            }

        </div>
    )
}