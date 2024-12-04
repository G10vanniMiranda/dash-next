import Link from "next/link";

export default function Login(){
    return(
        <div className="flex h-screen flex-col gap-5 bg-blue-600 justify-center items-center">
            <h1 className="text-black">Login</h1>
            <Link href="/" className="p-2 bg-green-600 rounded-md">Painel</Link>
        </div>
    )
}