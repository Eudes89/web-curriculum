import iconProject from '../public/images/icons/hello-world.png';
import Image from 'next/image';
import { useState } from 'react';
import iconClose from '../public/images/icons/close.png';

export default function Projects () {
    
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
        
            <div id="projects" onClick={handleClick}
            className={classN ? 'w-auto h-auto animate-rubberBand flex flex-col items-center border-2 border-black rounded-lg bg-white bg-opacity-60 text-center lg:w-auto md:w-auto sm:w-auto 2xl:w-auto xl:w-auto' : 
            "w-auto h-auto hover:cursor-pointer hover:animate-jello hover:ring-2 hover:ring-sky-400 flex flex-col items-center border-2 border-black rounded-lg bg-white text-center lg:w-auto bg-opacity-50 hover:bg-opacity-90 md:w-auto sm:w-auto 2xl:w-auto xl:w-auto"
            }>

                <h3 className='text-lg font-bold
                border-b-2 border-black w-full bg-zinc-500
                bg-opacity-40'>
                    Projetos
                </h3>

                <Image 
                    src={iconProject}
                    alt='icone Projeto'
                    width={70}
                    className='mt-1 w-[50px]'
                />

                <p className='font-bold'>
                    Projetos em que <br/> Trabalhei.
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
                        className='mt-2 sm:mt-8 hover:cursor-pointer'
                    />

                    <div id='info' className=' text-center mt-2 mx-1
                    
                    2xl:mr-4 2xl:ml-4 2xl:-mt-0 xl:mr-4 xl:ml-4'>
                        
                        <h3 className='font-bold text-xl text-blue-600
                        bg-white py-2'>
                            Meus Projetos
                        </h3>

                        <p className='text-white mt-2'>
                            
                        - Desenvolvi um projeto desafiador para uma empresa de vendas de tintas automotivas, automatizando tarefas de gerenciamento de estoque e consulta de informações.
                        <br/>
                        <br/>
                        - Criei um aplicativo web responsivo, integrado a um site, que permite acesso ao estoque e funcionalidades avançadas através de dispositivos móveis.
                        <br/>
                        <br/>
                        - Implementei recursos como upload de notas fiscais em PDF, extração de informações relevantes e armazenamento em banco de dados.
                        <br/>
                        <br/>
                        - Desenvolvi um mecanismo de busca eficiente que aceita abreviações e considera diferentes aspectos.
                        <br/>
                        <br/>
                        - O aplicativo está na fase final de desenvolvimento, com recursos avançados como atualização automática do estoque, pesquisa de produtos, detalhes de vendas e alertas de estoque baixo.
                        <br/>
                        <br/>
                        - Estou trabalhando em recursos adicionais, como alertas por e-mail para o setor de compras e atualização fácil de preços de compra.
                        <br/>
                        <br/>
                        - Planejo adicionar mais informações detalhadas para os clientes, proporcionando uma experiência completa e informativa.
                        <br/>
                        <br/>
                        - O projeto será disponibilizado como código aberto no GitHub em breve.
                        <br/>
                        <br/>
                        - Estou disponível para apresentar pessoalmente o projeto e discutir detalhes com potenciais contratantes interessados em me contratar para trabalhar com desenvolvimento web.
                        <br/>
                        <br/>
                        - Sou apaixonado por programação e estou em busca de oportunidades desafiadoras para contribuir com projetos e demonstrar minha habilidade e dedicação.


                        </p>
                    </div>

                </div>
            }

        </>
    )
}