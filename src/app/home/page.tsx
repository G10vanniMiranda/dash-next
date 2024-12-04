import Link from "next/link";

export default function Home(){
    return(
        <div className="bg-green-500 h-screen flex gap-5 flex-col justify-center items-center">
            <h1>Home</h1>
            <Link href="/" className="bg-violet-400 hover:bg-violet-600 btn">Painel</Link>
        </div>
    )
}