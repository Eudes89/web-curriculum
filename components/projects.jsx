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
            className= {classN ? ' animate-rubberBand flex flex-col items-center border-2 border-black rounded-lg bg-white bg-opacity-60 text-center' : 
            "flex flex-col items-center border-2 border-black rounded-lg bg-white text-center bg-opacity-50 hover:bg-opacity-90"
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
                    className='mt-1'
                />

                <p className='font-bold'>
                    Projetos em que <br/> Trabalhei.
                </p>

            </div>
            
            {open && 

                <div id='openInfo'
                className={closeButton ? ' animate-zoomOut absolute bg-black bg-opacity-90 w-screen h-auto -top-[95%] -left-6' :
                     ' animate-zoomIn absolute bg-black bg-opacity-90 w-screen h-auto -top-[95%] -left-6'}
                >

                    <Image 
                        src={iconClose}
                        alt='Icone close'
                        width={40}
                        onClick={handleClose}
                        className='mt-2'
                    />

                    <div id='info' className='text-center mt-2 mx-1'>
                        
                        <h3 className='font-bold text-xl text-blue-600
                        bg-white py-2'>
                            Meu Projeto
                        </h3>

                        <p className='text-white mt-2'>
                            
                            Durante meus estudos trabalhei em vários
                            mini projetos, basicamente para testar
                            os framework e apis que estava aprendendo.
                            <br/>
                            <br/>
                            Mas o mais desafiador foi um <i className='text-green-400'>projeto real</i> que
                            desenvolvi para uma pequena empresa 
                            de vendas de tintas automotivas.
                            <br/>
                            <br/>
                            Esta empresa controlava seu estoque por uma
                            tabela no excel, consultava as vendas e o preço
                            dos produtos através de relatórios em pdf, onde
                            tinham que procurar item por item, até achar
                            o que desejavam.
                            Tinham que lembrar quais itens estavam em quantidade
                            baixa no estoque para comprar e dependiam dos
                            computadores em seu escritório para realizar quaisquer
                            destas tarefas.
                            <br/>
                            <br/>
                            Quando entrei para ajudá-los a fazer as tintas,
                            propus o desenvolvimento de um web/app para realizar
                            todas estas tarefas automaticamente ou de forma
                            simplificada.
                            <br/>
                            <br/>
                            Comecei a desenvolver o web site / app e me deparei
                            com vários desafios, entre eles eu tive que
                            criar um upload de notas ficais em pdf, ler e extrair
                            as informações úteis e então salvar em um banco de 
                            dados. Levei algum tempo estudando a api <i className=' text-yellow-500'>PDF-READER</i> e 
                            a api <i className='text-blue-500'>BUSBOY</i>.
                            Depois mais algum tempo para a adaptação destas 
                            tecnologias com as notas fiscais de entrada  
                            de cada fornecedor.
                            <br/>
                            <br/>
                            Por fim consegui unir o app com um web site responsivo,
                            onde eles conseguiam acessar o estoque através do celular
                            ou onde estivessem, utilizando o login e senha 
                            com proteção <i className='text-red-500'>JWT</i> e
                            por senha criptografada e armazenada no banco de dados <i className='text-sky-400'>POSTGRESQL</i>.
                            <br/>
                            <br/>
                            Tive um outro desafio ao tentar reproduzir um <i>BUSCADOR</i> por 
                            palavras, que aceitasse abreviações e vários outros aspectos.
                            Mas consegui desenvolver o meu próprio <i>Search Engine</i> utilizando
                            apenas <i className='text-orange-500'>JAVASCRIPT</i>. Ainda
                            estou finalizando este projeto e penso em logo colocá-lo como
                            open code em meu gitHub.
                            <br/>
                            <br/>
                            Para isso precisarei finalizar alguns detalhes e depois recriar
                            os pdf de notas fictícias para testes e para conservar os dados
                            pessoais da empresa.

                            Espero terminá-lo logo para enfim poder fazer uma melhor 
                            apresentação para quem precisar de algo parecido.
                            <br/>
                            <br/>
                            Mas para fins de mostruário, posso apresentar este projeto
                            pessoalmente para aqueles que tiverem interesse em me contratar
                            para trabalhar com desenvolvimento web, que por sinal, é o
                            meu <i className='text-purple-600'>SONHO</i>.


                        </p>
                    </div>

                </div>
            }

        </>
    )
}