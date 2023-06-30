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
                className={closeButton ? ' animate-zoomOut absolute bg-black bg-opacity-90 w-screen h-auto -top-[95%] -left-6 lg:w-[1600px] lg:-left-[77%] lg:min-h-[750px] md:w-[980px] md:min-h-[750px] md:-left-[43%] sm:w-[600px] sm:min-h-[800px] sm:-left-[20%]' :
                     ' animate-zoomIn absolute bg-black bg-opacity-90 w-screen h-auto -top-[95%] -left-6 lg:w-[1600px] lg:-left-[77%] lg:min-h-[750px] md:w-[980px] md:min-h-[750px] md:-left-[43%] sm:w-[600px] sm:min-h-[800px] sm:-left-[20%] xl:w-auto 2xl:min-h-auto 2xl:h-auto 2xl:-top-32 2xl:-left-10 2xl:-right-10 2xl:w-auto 2xl:min-h-auto xl:h-auto xl:-top-70 xl:-left-10 xl:-right-10'}
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
                    2xl:mr-4 2xl:ml-4 xl:mr-4 xl:ml-4'>
                        
                        <h3 className='font-bold text-xl text-blue-600
                        bg-white py-2'>
                            Meu Projeto
                        </h3>

                        <p className='text-white mt-2'>
                            
                            Durante meus estudos, tive a oportunidade de trabalhar em diversos mini
                            projetos, nos quais pude testar os frameworks e APIs que estava aprendendo.
                            No entanto, o projeto mais desafiador foi desenvolvido para uma pequena
                            empresa de vendas de tintas automotivas.
                            <br/>
                            <br/>
                            Essa empresa gerenciava seu estoque por meio de uma planilha no Excel
                            e consultava informações sobre vendas e preços dos produtos por meio de 
                            relatórios em <i className='text-yellow-500'>PDF</i>. Eles precisavam procurar item por item até encontrarem 
                            o que desejavam. Além disso, tinham que lembrar quais itens estavam com 
                            baixo estoque para efetuar compras e dependiam exclusivamente dos 
                            computadores em seu escritório para realizar essas tarefas.
                            <br/>
                            <br/>
                            Quando fui contratado para auxiliá-los com suas tintas, propus o 
                            desenvolvimento de um web/app que automatizasse ou simplificasse todas 
                            essas tarefas.
                            <br/>
                            <br/>
                            Iniciei o desenvolvimento do site/app e me deparei com vários desafios. 
                            Um deles foi criar um recurso de upload de notas fiscais em PDF, extrair 
                            as informações relevantes e salvá-las em um banco de dados. Dediquei 
                            bastante tempo estudando as APIs <i className='text-green-500'>PDF-READER</i> e <i className='text-blue-500'>BUSBOY</i>, e em seguida, mais 
                            tempo para adaptar essas tecnologias às notas fiscais de cada fornecedor.
                            <br/>
                            <br/>
                            Finalmente, consegui integrar o app a um site responsivo, permitindo que 
                            eles acessassem o estoque por meio de seus celulares ou de qualquer lugar, 
                            utilizando um sistema de login e senha com proteção <i className='text-red-500'>JWT</i> e criptografia de
                            senha armazenada no banco de dados <i className='text-sky-500'>POSTGRESQL</i>.
                            <br/>
                            <br/>
                            Enfrentei outro desafio ao tentar desenvolver um mecanismo de busca por
                            palavras que aceitasse abreviações e considerasse outros aspectos. 
                            No entanto, consegui criar meu próprio <i className='text-zinc-400'>motor de busca</i> usando
                            apenas <i className='text-orange-500'>JAVASCRIPT</i>. Atualmente, estou finalizando esse projeto e pretendo em 
                            breve disponibilizá-lo como código aberto no meu <i className='text-emerald-500'>GitHub</i>.
                            <br/>
                            <br/>
                            Para isso, preciso concluir alguns detalhes e, em seguida, criar notas 
                            fiscais fictícias para testes, a fim de preservar os dados pessoais da 
                            empresa. Espero finalizar tudo em breve para poder apresentar uma versão 
                            mais refinada da aplicação para aqueles que estiverem interessados em me 
                            contratar para trabalhar com desenvolvimento web, que é, aliás, meu grande 
                            sonho.
                            <br/>
                            <br/>
                            Para fins de demonstração, estou disponível para apresentar pessoalmente 
                            esse projeto e discutir detalhes com aqueles que estiverem interessados 
                            em contratar meus serviços.


                        </p>
                    </div>

                </div>
            }

        </>
    )
}