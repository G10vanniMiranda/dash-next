import Link from "next/link";

export default function Resgister(){
    return(
        <div className="flex h-screen flex-col gap-5 
            bg-blue-600 justify-center items-center">
            <form className="bg-white rounded-lg w-96 h-[500px] p-5 flex gap-3 flex-col items-center">
                <h1 className="text-black text-3xl mt-5">Cadastro</h1>
                <h3 className="mb-10">Nosso sistema é atualizado mensalmente.</h3>
                <input type="text" placeholder="Nome completo" className="p-2 w-full outline-none  rounded-md bg-sky-200" />
                <input type="text" placeholder="Telefone" className="p-2 w-full outline-none  rounded-md bg-sky-200" />
                <input type="text" placeholder="E-mail" className="p-2 w-full outline-none  rounded-md bg-sky-200" />
                <input type="password" placeholder="********************" className="p-2 w-full outline-none  rounded-md bg-sky-200" />
                <div className="group flex gap-3 mt-10">
                    <Link href="/login" className="p-2 bg-green-600 w-40 text-center duration-300 hover:bg-green-500 text-white px-5 rounded-md">Login</Link>
                    <Link href="#" className="p-2 bg-blue-600  w-40 text-center duration-300 hover:bg-blue-500 text-white px-5 rounded-md">Cadastrar</Link>
                </div>
            </form>
        </div>
    )
}