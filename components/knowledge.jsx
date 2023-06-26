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
            className= {classN ? ' animate-rubberBand flex flex-col items-center border-2 border-black rounded-lg bg-white bg-opacity-60 text-center' : 
            "flex flex-col items-center border-2 border-black rounded-lg bg-white text-center bg-opacity-50 hover:bg-opacity-90"
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
                />

                <p className='font-bold'>
                    Tecnologias <br/> que uso.
                </p>

            </div>
            
            {open && 

                <div id='openInfo'
                className={closeButton ? ' animate-zoomOut absolute bg-white w-screen h-screen -top-[95%] -left-6 min-h-screen' :
                     ' animate-zoomIn absolute bg-white  w-screen min-h-screen -top-[95%] -left-6'}
                >

                    <Image 
                        src={iconClose}
                        alt='Icone close'
                        width={40}
                        onClick={handleClose}
                        className='mt-2'
                    />

                    <div id='info' className='text-center'>
                        
                        <h2 className='text-white text-xl font-bold
                        bg-black w-full mb-2'>

                            Tecnologias que uso

                        </h2>

                        <div id='techs' className='flex flex-col
                        items-center gap-2 justify-items-stretch'>

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

                        <p className='my-4 font-bold text-xl text-center'>
                            Entre outras...
                        </p>

                    </div>

                </div>
            }
        </>
    )
}