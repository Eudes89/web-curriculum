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
                className={closeButton ? ' animate-zoomOut absolute bg-white bg-opacity-90 w-screen h-auto -top-[95%] -left-6 lg:w-[1600px] lg:-left-[77%] lg:min-h-[750px] md:w-[980px] md:min-h-[750px] md:-left-[43%] sm:w-[600px] sm:min-h-[800px] sm:-left-[20%]' :
                     ' animate-zoomIn absolute bg-white bg-opacity-90 w-screen h-auto -top-[95%] -left-6 lg:w-[1600px] lg:-left-[77%] lg:min-h-[750px] md:w-[980px] md:min-h-[750px] md:-left-[43%] sm:w-[600px] sm:min-h-[800px] sm:-left-[20%] xl:w-auto 2xl:min-h-auto 2xl:h-auto 2xl:-top-32 2xl:-left-10 2xl:-right-10 2xl:w-auto 2xl:min-h-auto xl:h-auto xl:-top-70 xl:-left-10 xl:-right-10'}
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
                        2xl:text-white 3xl:text-white'>
                            Entre outras...
                        </p>

                    </div>

                </div>
            }
        </>
    )
}