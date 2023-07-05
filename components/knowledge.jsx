import iconKnowledge from '../public/images/icons/books.png';
import Image from 'next/image';
import { useState } from 'react';
import iconClose from '../public/images/icons/close.png';
import nextLogo from '../public/images/next.svg';
import reactLogo from '../public/images/react-logo.png';
import tailwindLogo from '../public/images/tailwindcss-logo-2.png';
import postgreLogo from '../public/images/postgre-logo.png';
import Link from 'next/link';
import sequelizeLogo from '../public/images/sequelize-logo.png';
import eslintLogo from '../public/images/eslint-logo.png';
import nodelogo from '../public/images/node-logo.png';
import tipescriptLogo from '../public/images/typescript.png';
import elasticSearch from '../public/images/Elasticsearch_logo.png';
import electronLogo from '../public/images/electronjs.png';
import graphQl from '../public/images/graphql.png';

export default function Knowledge () {

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
        
            <div id="knowledge" onClick={handleClick}
            className={classN ? 'w-auto h-auto animate-rubberBand flex flex-col items-center border-2 border-black rounded-lg bg-white bg-opacity-60 text-center lg:w-auto md:w-auto sm:w-auto 2xl:w-auto xl:w-auto' : 
            "w-auto h-auto hover:cursor-pointer hover:animate-jello hover:ring-2 hover:ring-sky-400 flex flex-col items-center border-2 border-black rounded-lg bg-white text-center lg:w-40 bg-opacity-50 hover:bg-opacity-90 md:w-auto sm:w-auto 2xl:w-auto xl:w-auto"
            }>

                <h3 className='text-lg font-bold px-2
                border-b-2 border-black w-full bg-zinc-500
                bg-opacity-40'>
                    Conhecimentos
                </h3>

                <Image 
                    src={iconKnowledge}
                    alt='icone livro'
                    width={70}
                    className='w-[50px]'
                />

                <p className='font-bold'>
                    Tecnologias <br/> que uso.
                </p>

            </div>
            
            {open && 

                <div id='openInfo'
                className={closeButton ? 
                    'animate-zoomOut absolute z-10 -top-[110%] -left-1/2 -right-1/2 px-[50%] bg-white bg-opacity-90 sm:-top-56 md:-left-full md:-right-full md:-top-56 lg:-top-[90%] xl:-left-[150%] xl:-right-[150%] xl:-top-[90%] 2xl:-top-[130%]' 
                    :
                     'animate-zoomIn absolute z-10 -top-[110%] -left-1/2 -right-1/2 px-[50%] bg-white bg-opacity-90 sm:-top-56 md:-left-full md:-right-full md:-top-56 lg:-top-[90%] xl:-left-[150%] xl:-right-[150%] xl:-top-[90%] 2xl:-top-[130%]'
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
                     md:ml-[18%] md:mr-[18%] md:mt-20
                    2xl:mr-4 2xl:ml-4 2xl:-mt-0 xl:mr-4 xl:ml-4 xl:-mt-0
                    lg:-mt-0'>
                        
                        <h2 className='text-white text-xl font-bold
                        bg-black w-full mb-2'>

                            Tecnologias que uso

                        </h2>

                        <div id='techs' className='flex flex-col
                        items-center gap-2 justify-items-stretch
                        xl:bg-white xl:bg-opacity-90'>

                            <Link href='https://nextjs.org'>
                            
                                <Image 
                                    src={nextLogo}
                                    alt='Next js logotipo'
                                    width={150}
                                    className='mt-4'
                                />

                            </Link>

                            <Link href="https://react.dev/">
                            
                                <Image 
                                    src={reactLogo}
                                    alt='React Logotipo'
                                    width={150}
                                    className=''
                                />

                            </Link>

                            <Link href='https://tailwindcss.com/'>
                            
                                <Image 
                                    src={tailwindLogo}
                                    alt='Tailwindcss Logotipo'
                                    width={250}
                                    className='-my-28
                                    '
                                />

                            </Link>

                            <Link href='https://www.postgresql.org/'>
                            
                                <Image 
                                    src={postgreLogo}
                                    alt='Postgresql Logotipo'
                                    width={250}
                                    className='-my-10'
                                />

                            </Link>

                            <Link href="https://www.npmjs.com/package/pdfreader">
                            
                                <p className='text-2xl text-black font-bold
                                text-center mb-6'>
                                    PDF-READER
                                </p>

                            </Link>

                            <Link href="https://www.npmjs.com/package/busboy">
                                <p className='text-2xl text-black font-bold
                                
                                text-center'>
                                    BUSBOY
                                </p>
                            </Link>

                            <Link href="https://sequelize.org/">
                            
                                <Image 
                                    src={sequelizeLogo}
                                    alt='sequelize Logotipo'
                                    width={250}
                                    className='-mt-20'
                                />

                            </Link>

                            <Link href="https://eslint.org/">
                            
                                <Image 
                                    src={eslintLogo}
                                    alt='eslint Logotipo'
                                    width={250}
                                    className='-mt-24'
                                />

                            </Link>

                            
                            <Link href="https://jwt.io/">
                            
                                <p className='text-2xl text-black font-bold
                                text-center mb-6'>
                                    JWT - JSON WEB TOKENS
                                </p>

                            </Link>

                            <Link href="https://nodejs.org/en">
                            
                                <Image 
                                    src={nodelogo}
                                    alt='Node js Logotipo'
                                    width={200}
                                    className=''
                                />

                            </Link>

                        </div>

                        <p className='my-4 font-bold text-xl text-center
                        '>
                            Entre outras...
                        </p>

                        <h2 className='text-white text-xl font-bold
                        bg-black w-full mb-2'>

                            Tecnologias que Estou Estudando.

                        </h2>

                        <div id='info2' className=' text-center mt-2 mx-1

                        2xl:mr-4 2xl:ml-4 2xl:-mt-0 xl:mr-4 xl:ml-4 xl:-mt-0
                        lg:-mt-0 flex justify-center'>

                            <Link href="https://www.typescriptlang.org/">

                                <Image 
                                    src={tipescriptLogo}
                                    alt='TypeScript Logotipo'
                                    width={80}
                                    className='mb-2'
                                />

                            </Link>

                        </div>

                        <h2 className='text-white text-xl font-bold
                        bg-black w-full mb-2'>

                            Tecnologias que quero Estudar.

                        </h2>

                        <div id='info3' className=' text-center mt-2 mx-1
                        
                        2xl:mr-4 2xl:ml-4 2xl:-mt-0 xl:mr-4 xl:ml-4 xl:-mt-0
                        lg:-mt-0 md:mt-0 flex justify-center items-center gap-x-2'>

                            <Link href="https://www.elastic.co/pt/">

                                <Image 
                                    src={elasticSearch}
                                    alt='elasticSearch Logotipo'
                                    width={200}
                                    className=''
                                />

                            </Link>

                            <Link href="https://www.electronjs.org/">

                                <Image 
                                    src={electronLogo}
                                    alt='electron Logotipo'
                                    width={150}
                                    className=''
                                />

                            </Link>

                            <Link href="https://graphql.org/">

                                <Image 
                                    src={graphQl}
                                    alt='GraphQl Logotipo'
                                    width={170}
                                    className=''
                                />

                            </Link>

                        </div>

                    </div>

                </div>
            }
        </>
    )
}