import iconContact from '../public/images/icons/contact-in-color.png';
import Image from 'next/image';
import { useState } from 'react';
import iconClose from '../public/images/icons/close.png';
import iconWhatsApp from '../public/images/icons/whatsapp-logo.png';
import iconGmail from '../public/images/icons/gmail.png';
import iconGitHub from '../public/images/icons/github.png';
import Link from 'next/link';

export default function Contact () {

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
        
            <div id="contact" onClick={handleClick}
            className={classN ? 'w-auto h-auto animate-rubberBand flex flex-col items-center border-2 border-black rounded-lg bg-white bg-opacity-60 text-center lg:w-auto md:w-auto sm:w-auto 2xl:w-auto xl:w-auto' : 
            "w-auto h-auto hover:cursor-pointer hover:animate-jello hover:ring-2 hover:ring-sky-400 flex flex-col items-center border-2 border-black rounded-lg bg-white text-center lg:w-auto bg-opacity-50 hover:bg-opacity-90 md:w-auto sm:w-auto 2xl:w-auto xl:w-auto"
            }>

                <h3 className='text-lg font-bold
                border-b-2 border-black w-full bg-zinc-500
                bg-opacity-40'>
                    Contato
                </h3>

                <Image 
                    src={iconContact}
                    alt='icone Contato'
                    width={70}
                    className='mt-1 w-[50px]'
                />

                <p className='font-bold'>
                    Entre em <br/>contato comigo.
                </p>

            </div>
            
            {open && 

                <div id='openInfo'
                className={closeButton ? ' animate-zoomOut absolute bg-black bg-opacity-90 w-screen h-screen -top-[95%] -left-6 lg:w-[1600px] lg:-left-[77%] lg:min-h-[750px] md:w-[980px] md:min-h-[750px] md:-left-[43%] sm:w-[600px] sm:min-h-[800px] sm:-left-[20%]' :
                     ' animate-zoomIn absolute bg-black bg-opacity-90 w-screen h-screen -top-[95%] -left-6 lg:w-[1600px] lg:-left-[77%] lg:min-h-[750px] md:w-[980px] md:min-h-[750px] md:-left-[43%] sm:w-[600px] sm:min-h-[800px] sm:-left-[20%] xl:w-auto 2xl:min-h-auto 2xl:h-auto 2xl:-top-32 2xl:-left-10 2xl:-right-10 2xl:w-auto 2xl:min-h-auto xl:h-auto xl:-top-70 xl:-left-10 xl:-right-10'}
                >

                    <Image 
                        src={iconClose}
                        alt='Icone close'
                        width={40}
                        onClick={handleClose}
                        className='mt-2 md:ml-36 lg:ml-52 2xl:ml-0 xl:ml-0'
                    />

                    <h3 className='font-bold text-xl bg-slate-900
                    text-center py-2 text-white'>
                        Entre em contato comigo.
                    </h3>

                    <div id='whatsApp' className='flex flex-col text-center
                    items-center bg-slate-700 w-full gap-y-2
                    '>
                        
                        <h4 className='text-lg font-bold text-green-500
                        border-b-2 border-black w-full py-2 bg-black'>
                            Meu WhatsApp Pessoal
                        </h4>

                        <div className='flex items-center py-2'>

                            <Image 
                                src={iconWhatsApp}
                                alt='Icone whatsapp'
                                width={50}
                                className=' animate-pulse animate-infinite'
                            />

                            <p className=' ml-4 font-bold
                            text-lg text-green-500 animate-pulse animate-infinite'>
                                11-97176-7478
                            </p>

                        </div>
                    </div>

                    <div id='email' className='flex flex-col text-center
                    items-center bg-slate-700 w-full'>
                        
                        <h4 className='text-lg font-bold text-red-400
                        border-b-2 border-black w-full py-2 bg-black'>
                            Meu Email Pessoal
                        </h4>

                        <div className='flex items-center py-2'>

                            <Image 
                                src={iconGmail}
                                alt='Icone gmail'
                                width={50}
                                className=' animate-pulse animate-infinite'
                            />

                            <p className='text-red-400 ml-4 font-bold
                            text-lg animate-pulse animate-infinite'>
                                eudesmith@gmail.com
                            </p>

                        </div>
                    </div>

                    <div id='git' className='flex flex-col text-center
                    items-center bg-slate-700 w-full'>
                        
                        <h4 className='text-lg font-bold text-blue-400
                        border-b-2 border-black w-full py-2 bg-black'>
                            Código fonte deste web Curriculum
                        </h4>

                        <div className='flex items-center py-2'>

                            <Image 
                                src={iconGitHub}
                                alt='Icone github'
                                width={50}
                                className=' animate-pulse animate-infinite'
                            />

                            <Link href='https://github.com/Eudes89/web-curriculum'
                            className='text-blue-400 ml-4 font-bold
                            text-lg animate-pulse animate-infinite'>
                                Github Eudes Azevedo
                            </Link>

                        </div>

                    </div>

                </div>
            }

        </>
    )
}