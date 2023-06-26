'use client'
import { useState } from "react";

export default function Footer(){
    const [show, setShow] = useState(false);

    function showAssignment (){
        setShow(true);

        setTimeout(() => {
            setShow(false);
        }, 10000)
    }

    return(
        <div id="footer"
        className=" bg-black text-white w-auto h-auto
        text-center bg-opacity-50 hover:cursor-pointer">

            <div id="atribuições" onClick={showAssignment}
            className="flex flex-col">
                
                <h4 className="text-lg text-blue-400">
                    Atribuições de imagens dos Ícones
                </h4>

                {show && 
                    <div className="flex flex-col text-center">

                        <a 
                            href="https://www.flaticon.com/br/icones-gratis/sobre-mim"
                            title="sobre mim ícones">
                                Ícone /ABOUT ME/ criado por IYIKON - Flaticon
                        </a>

                        <a 
                            href="https://www.flaticon.com/br/icones-gratis/ebook" 
                            title="ebook ícones">
                                Ícone /BOOK/ criado por Muhammad Waqas Khan - Flaticon
                        </a>

                        <a 
                            href="https://www.flaticon.com/br/icones-gratis/informacao-de-contato" 
                            title="informação de contato ícones">
                                 Ícones /CONTACT/ criado por Vitaly Gorbachev - Flaticon
                        </a>

                        <a href="https://www.flaticon.com/br/icones-gratis/perto" 
                            title="perto ícones">
                                Perto ícones criados por Nendra Wahyu  - Flaticon
                        </a>

                        <a 
                            href="https://www.flaticon.com/br/icones-gratis/ola-mundo" 
                            title="olá mundo ícones">
                                Olá mundo ícones criados por IconBaandar - Flaticon
                        </a>

                        <a 
                            href="https://www.flaticon.com/br/icones-gratis/livros" 
                            title="livros ícones">
                                Livros ícones criados por popo2021 - Flaticon
                        </a>

                        <a 
                            href="https://www.flaticon.com/br/icones-gratis/contato" 
                            title="contato ícones">
                                Contato ícones criados por Smashicons - Flaticon
                        </a>

                        <a 
                            href="https://www.flaticon.com/br/icones-gratis/whatsapp" 
                            title="whatsapp ícones">
                                Whatsapp ícones criados por Freepik - Flaticon
                        </a>

                        <a 
                            href="https://www.flaticon.com/br/icones-gratis/gmail" 
                            title="gmail ícones">
                                Gmail ícones criados por Driss Lebbat - Flaticon
                        </a>

                        <a 
                            href="https://www.flaticon.com/br/icones-gratis/github" 
                            title="github ícones">
                                Github ícones criados por Roundicons - Flaticon
                        </a>
                        
                    </div>
                }
                
            </div>
        </div>
    )
}