import iconAbout from '../public/images/icons/card.png';
import Image from 'next/image';
import { useState } from 'react';
import iconClose from '../public/images/icons/close.png';

export default function AboutMe () {

    const [classN, setClassN] = useState(false);
    const [ closeButton, setCloseButton] = useState(false);
    const [open, setOpen] = useState(false);

    function handleClick () {
        setClassN(true);
        
        setTimeout(() => {
            setClassN(false)
        },1000);

        setOpen(true);
    }

    function handleClose () {
        setCloseButton(true);
        
        setTimeout(() => {
            setCloseButton(false);
            setOpen(false);
        }, 2000);
        
    }

    return (
        <>
        
            <div id="aboutMe" onClick={handleClick}
            className={classN ? ' animate-rubberBand flex flex-col items-center border-2 border-black rounded-lg bg-white bg-opacity-60 text-center lg:w-64' : 
            "flex flex-col items-center border-2 border-black rounded-lg bg-white text-center lg:w-64 bg-opacity-50 hover:bg-opacity-90"
            }>

                <h3 className='text-lg font-bold
                border-b-2 border-black w-full bg-zinc-500
                bg-opacity-40'>
                    Sobre mim
                </h3>

                <Image 
                    src={iconAbout}
                    alt='icone sobre mim'
                    width={70}
                />

                <p className='font-bold'>
                    Um pouco <br/> sobre mim.
                </p>

            </div>

            {open && 

                <div id='openInfo'
                className={closeButton ? ' animate-zoomOut absolute bg-black bg-opacity-90 w-screen h-screen -top-[95%] -left-6' :
                     ' animate-zoomIn absolute bg-black bg-opacity-90 w-screen h-screen -top-[95%] -left-6 lg:w-[1600px] lg:-left-[77%] lg:min-h-[750px]'}
                >

                    <Image 
                        src={iconClose}
                        alt='Icone close'
                        width={40}
                        onClick={handleClose}
                        className='mt-2'
                    />

                    <div id='info' className=' text-center mt-2 mx-1
                    lg:ml-[18%] lg:mr-[35%] lg:mt-20'>
                        <p className='text-white'>
                            
                            É um grande prazer compartilhar um pouco
                            da minha história com você. <br/>
                            Eu nasci na cidade de Guararema - SP e me mudei
                            para Mogi das Cruzes - SP quando tinha 9 anos. <br/>
                            Comecei a trabalhar com 15 anos como
                            empacotador de supermercado, depois ajudei meu pai
                            com blindagens automotivas, entrei para uma loja 
                            de troca de óleo, onde fiquei por 4 anos. <br/>
                            Depois abri uma oficina de funilaria e pintura de carros,
                            onde fiquei 5 anos. Fechei a oficina e abri um bar no centro
                            da cidade, onde fiquei por mais 5 anos. <br/>
                            Comecei a estudar Programação no final do ano de 2019,
                            e foi quando encontrei algo que tinha paixão em fazer.<br/>
                            Eu sempre amei tudo relacionado a tecnologia, computadores e
                            video games.<br/> Quando começo algo eu vou até o final, mesmo
                            que dê muito trabalho. Meus amigos sempre me dizem: <br/>  
                            <i className=' text-yellow-400'> Quando o Eudes pega um problema, <br/> ele não solta o osso até resolver...</i>
                            <br/>Eu aprendi o que sei até hoje de forma autodidata.
                            Procurando conteúdo e buscando soluções para aplicações da realidade,
                            onde conto um pouco mais na seção projetos.

                            
                        
                        </p>
                    </div>

                </div>
            }
        
        </>
    )
}