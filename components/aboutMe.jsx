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
            className={classN ? 
            'w-auto h-auto animate-rubberBand flex flex-col items-center border-2 border-black rounded-lg bg-white bg-opacity-60 text-center lg:w-auto md:w-auto sm:w-auto 2xl:w-auto xl:w-auto'
            : 
            "w-auto h-auto flex hover:cursor-pointer hover:ring-2 hover:ring-sky-400 hover:animate-jello flex-col items-center border-2 border-black rounded-lg bg-white text-center lg:w-40 bg-opacity-50 hover:bg-opacity-90 md:w-auto sm:w-auto 2xl:w-auto xl:w-auto"
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
                    className='w-[50px]'
                />

                <p className='font-bold'>
                    Um pouco <br/> sobre mim.
                </p>

            </div>

            {open && 

                <div id='openInfo'
                className={closeButton ? 
                    'animate-zoomOut absolute bg-black bg-opacity-90 w-screen h-auto -top-[95%] -left-6 2xl:flex 2xl:flex-col 2xl:w-auto 2xl:-left-40 2xl:-right-40 2xl:h-auto 2xl:-top-[480px] xl:flex xl:flex-col xl:w-auto xl:-left-40 xl:-right-40 xl:h-auto xl:-top-70 lg:flex lg:flex-col lg:w-auto lg:-left-40 lg:-right-40 lg:h-auto lg:-top-70 md:flex md:flex-col md:w-auto md:-left-40 md:-right-40 md:h-auto md:-top-70 ' 
                    :
                     'animate-zoomIn absolute bg-black bg-opacity-90 w-screen h-auto -top-[95%] -left-6 2xl:flex 2xl:flex-col 2xl:w-auto 2xl:-left-40 2xl:-right-40 2xl:h-auto 2xl:-top-[480px] xl:flex xl:flex-col xl:w-auto xl:-left-40 xl:-right-40 xl:h-auto xl:-top-70 lg:flex lg:flex-col lg:w-auto lg:-left-40 lg:-right-40 lg:h-auto lg:-top-70 '
                    }
                >

                    <Image 
                        src={iconClose}
                        alt='Icone close'
                        width={40}
                        onClick={handleClose}
                        className='mt-2 md:ml-36 lg:ml-52 2xl:ml-0 xl:ml-0'
                    />

                    <div id='info' className=' text-center mt-2 mx-1
                    lg:ml-[18%] lg:mr-[35%] lg:mt-20 md:ml-[18%] md:mr-[18%] md:mt-20
                    2xl:mr-4 2xl:ml-4 xl:mr-4 xl:ml-4 xl:mt-4'>
                        <p className='text-white mb-4'>
                            
                            É um imenso prazer compartilhar um pouco da minha história com você. 😁
                            <br/>
                            <br/>
                            Nasci na cidade de Guararema, em São Paulo, e aos 9 anos de idade
                            mudei-me para Mogi das Cruzes, também em São Paulo. Foi nessa época
                            que tive meu primeiro contato com um computador.
                            Era uma máquina que possuía apenas um prompt de comando, exigindo 
                            que eu entendesse um pouco de códigos do terminal para abrir qualquer
                            aplicativo. Por sorte, veio acompanhada de um manual que ensinava
                            vários comandos.
                            <br/>
                            <br/>
                            Desde então, apaixonei-me pela área da computação. Infelizmente, 
                            devido às dificuldades financeiras de minha família, precisei começar
                            a trabalhar cedo, o que me afastou gradativamente da tecnologia. &#9785;
                            <br/>
                            <br/>
                            Trabalhei como empacotador de supermercado e posteriormente na área
                            de blindagem automotiva junto ao meu pai. Em seguida, ingressei em
                            uma loja de troca de óleo e mais tarde decidi abrir minha própria
                            oficina de funilaria e pintura de carros. Entretanto, acabei encerrando
                            esse empreendimento para abrir um bar no centro da cidade,
                            até que, posteriormente, decidi deixar o bar sob a administração de meu pai.
                            <br/>
                            <br/>
                            Foi somente no final de 2019 que retomei meus estudos em programação e
                            me reconectei com o mundo da tecnologia, despertando minha verdadeira paixão.
                            Sempre fui fascinado por tudo relacionado à tecnologia, computadores e
                            videogames, e a possibilidade de desenvolver programas e vê-los sendo
                            utilizados pelas pessoas é algo realmente fantástico. 💻
                            <br/>
                            <br/>
                            Quando me comprometo com algo, vou até o fim, mesmo que exija muito esforço.
                            Meus amigos costumam dizer:<br/>
                            <i className=' text-yellow-500'>&#10075; Quando o Eudes pega um problema, ele não desiste
                            até resolvê-lo! &#10076;</i> 
                            <br/>
                            <br/>
                            Tudo o que aprendi até hoje foi de forma autodidata, buscando
                            conteúdo e soluções para criar aplicações web e mobile reais, o que relato 
                            um pouco mais na seção de projetos.
                            <br/>
                            <br/>
                            Continuo estudando diariamente, explorando novas APIs e frameworks.
                            Acompanho de perto o site RoadMap, que serve como base para meus estudos.
                            Meu objetivo é continuar evoluindo para poder contribuir da melhor forma
                            possível com meu futuro empregador.
                            <br/>
                            <br/>
                            Não almejo ser o melhor, mas sim ser habilidoso no que faço e 
                            alcançar plena satisfação em meus trabalhos e conhecimentos.
                            Este é o meu sonho.
                        
                        </p>
                    </div>

                </div>
            }
        
        </>
    )
}