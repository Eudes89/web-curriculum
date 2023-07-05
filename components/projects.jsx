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
                            apenas <i className='text-orange-500'>JAVASCRIPT</i>.
                            <br/>
                            Hoje, o aplicativo está na fase final de desenvolvimento. Ele possui recursos avançados que permitem a 
                            atualização automática do estoque por meio do upload de notas fiscais de vendas e compras de produtos. 
                            Além disso, é capaz de pesquisar produtos pelo nome, mesmo que haja abreviações, fornecer informações 
                            sobre a quantidade em estoque, detalhes da última venda, incluindo preço, data, cliente e outras 
                            informações úteis.
                            <br/>
                            <br/>
                            No momento, estou trabalhando em um recurso de alerta para quando o estoque estiver baixo, o aplicativo
                            enviará automaticamente um e-mail para o setor de compras, listando os itens necessários. Também estou 
                            desenvolvendo uma forma de atualizar facilmente os valores de aumento nos preços de compra, o que afetará 
                            os preços de venda. Isso ajudará o setor de vendas a manter os preços atualizados de forma eficiente.
                            <br/>
                            <br/>
                            Por fim, estou planejando adicionar mais dados à seção do site destinada aos clientes. Eles poderão 
                            visualizar os produtos oferecidos de forma detalhada, incluindo técnicas de aplicação. Essa melhoria 
                            proporcionará uma experiência mais completa e informativa para os clientes.
                            <br/>
                            <br/>
                            Atualmente, estou finalizando esse projeto e pretendo em 
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