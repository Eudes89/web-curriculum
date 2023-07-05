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
                    'animate-zoomOut absolute z-10 -top-[110%] -left-1/2 -right-1/2 px-[50%] bg-black bg-opacity-90 sm:-top-56 md:-left-full md:-right-full md:-top-56 lg:-top-[90%] xl:-left-[150%] xl:-right-[150%] xl:-top-[90%] 2xl:-top-[130%]' 
                    :
                     'animate-zoomIn absolute z-10 -top-[110%] -left-1/2 -right-1/2 px-[50%] bg-black bg-opacity-90 sm:-top-56 md:-left-full md:-right-full md:-top-56 lg:-top-[90%] xl:-left-[150%] xl:-right-[150%] xl:-top-[90%] 2xl:-top-[130%]'
                    }
                >

                    <Image 
                        src={iconClose}
                        alt='Icone close'
                        width={40}
                        onClick={handleClose}
                        className='mt-2 hover:cursor-pointer
                        '
                    />

                    <div id='info' className=' text-center mt-2 mx-1
                    '>
                        <p className='text-white mb-4'>

                            <b className=' text-yellow-500'>Informações pessoais:</b>
                            <br/>
                            <p className='flex justify-center text-left'>
                            - Nome: Eudes Azevedo dos Santos Filho
                            <br/>
                            - Data de nascimento: 10 de janeiro de 1989

                            </p>
                            <br/>
                            <b className=' text-yellow-500'>Resumo profissional:</b>
                            <br/>
                            Sou um desenvolvedor autodidata apaixonado por programação, com foco em frontend e backend. 
                            Iniciei meus estudos em 2019, concentrando-me inicialmente na linguagem JavaScript. 
                            Desde então, tenho adquirido conhecimentos em HTML, CSS e explorei ferramentas como React, 
                            Next.js, Node.js, Express, Tailwind CSS e GitHub. Atualmente, estou me dedicando ao estudo de 
                            TypeScript e tenho planos de aprender GraphQL, Electron e ElasticSearch no futuro.
                            <br/>
                            <br/>
                            <b className=' text-yellow-500'>Objetivo profissional:</b>
                            <br/>
                            Busco oportunidades para contribuir com projetos desafiadores e colaborar com uma equipe de 
                            trabalho, utilizando meu conhecimento em programação. 
                            Tenho paixão por automatizar processos e sou altamente persistente, dedicando-me até a 
                            conclusão de cada tarefa que assumo.
                            <br/>
                            <br/>
                            <b className=' text-yellow-500'>Habilidades técnicas:</b>
                            <br/>
                            <p className='flex justify-center text-left'>
                            - Linguagens de programação: JavaScript, HTML, CSS<br/>
                            - Frameworks e bibliotecas: React, Next.js<br/>
                            - Ferramentas: Node.js, Express, Tailwind CSS, GitHub<br/>
                            - Conhecimentos em progresso: TypeScript<br/>
                            - Futuros aprendizados planejados: GraphQL, Electron, ElasticSearch<br/>
                            </p>
                            <br/>
                            <b className=' text-yellow-500'>Considerações finais:</b>
                            <br/>
                            Estou comprometido em me manter atualizado sobre as últimas tendências e tecnologias 
                            relacionadas ao desenvolvimento de software. Busco constantemente expandir meus 
                            conhecimentos e habilidades para atingir o melhor desempenho profissional possível e 
                            contribuir de forma significativa com meus colegas de equipe e empregadores. 
                            Estou entusiasmado em enfrentar novos desafios e fazer parte de projetos inovadores.
                        
                        </p>
                    </div>

                </div>
            }
        
        </>
    )
}