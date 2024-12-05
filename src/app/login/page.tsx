"use client"
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Login(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const handleValition = () =>{

        if(email == ""){
            alert("Por favor preencher o campo email")
            return false
        }

        if(senha == ""){
            alert("Por favor preencher o campo senha!")
            return false
        }

        redirect("/")
    }



    return(
        <div className="flex h-screen flex-col gap-5 
            bg-blue-600 justify-center items-center">
            <form className="bg-white rounded-lg w-96 h-[400px] p-5 flex gap-3 flex-col items-center">
                <h1 className="text-black text-3xl mt-5">Login</h1>
                <h3 className="mb-10">Nosso sistema é atualizado mensalmente.</h3>
                <input value={email} onChange={ event => setEmail( event.target.value )}
                    type="text" placeholder="e-mail" className="p-2 w-full outline-none  rounded-md bg-sky-200" />
                    <p>{email}</p>
                <input value={senha} onChange={ event => setSenha( event.target.value ) }
                    type="password" placeholder="********************" className="p-2 w-full outline-none  rounded-md bg-sky-200" />
                <div className="group flex gap-3 mt-10">
                    <Link onClick={handleValition} href="#" className="p-2 bg-green-600 w-40 text-center duration-300 hover:bg-green-500 text-white px-5 rounded-md">Entrar</Link>
                    <Link href="/register" className="p-2 bg-blue-600  w-40 text-center duration-300 hover:bg-blue-500 text-white px-5 rounded-md">Cadastrar</Link>
                </div>
            </form>
        </div>
    )
}