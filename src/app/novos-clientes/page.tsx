import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { User } from "lucide-react";
import Link from "next/link";

export default function NovosClientes() {
    return (
        <div className="flex flex-col gap-5 h-screen bg-blue-600 items-center">
            <header className="bg-slate-800 w-screen p-8 flex items-center justify-between pl-24">
                <h2 className="text-white">Clientes</h2>
                <Link href="/" className="bg-green-500 font-medium btn">Painel</Link>
            </header>

            <Card className="w-[1200px]">
                <CardHeader className=" bg-blue-500 h-20 text-white rounded-t-xl">
                    <div className="flex items-center justify-center ">
                        <CardTitle className=" text-lg sm:text-xl text-center">
                            Últimos clientes
                        </CardTitle>
                        <User className="ml-auto w-4 h-4" />
                    </div>
                    <CardDescription className="text-white text-center">
                        Novos clientes nos últimos 30 dias.
                    </CardDescription>
                </CardHeader>

                <CardContent className="cursor-pointer hover:bg-blue-300 duration-300 rounded-xl">
                    <article className="flex items-center gap-2 border-b py-2">
                        <div className="box1 h-32">
                            <Avatar className="w-8 h-8">
                                <AvatarImage width={50} className="rounded-full" src="https://github.com/srodrigo28.png" />
                                <AvatarFallback>S&B</AvatarFallback>
                            </Avatar>
                            <h3>Sebastião Rodrigo</h3>
                        </div>
                        <div className="box2 bg-red-500 flex-1 h-32 p-2" >
                            <h2>Box 2</h2>
                        </div>
                        <div className="box3 bg-green-600 flex-1 h-32 p-2">
                            <h2>Box 3</h2>

                        </div>

                    </article>
                </CardContent>

                <CardContent className="cursor-pointer hover:bg-blue-300 duration-300 rounded-xl">
                    <article className="flex items-center gap-2 border-b py-2 ">
                        <Avatar className="w-8 h-8">
                            <AvatarImage width={50} className="rounded-full" src="https://github.com/srodrigo28.png" />
                            <AvatarFallback>S&B</AvatarFallback>
                        </Avatar>
                        <h3>Sebastião Rodrigo</h3>
                    </article>
                </CardContent>

                <CardContent className="cursor-pointer hover:bg-blue-300 duration-300 rounded-xl">
                    <article className="flex items-center gap-2 border-b py-2">
                        <Avatar className="w-8 h-8">
                            <AvatarImage width={50} className="rounded-full" src="https://github.com/srodrigo28.png" />
                            <AvatarFallback>S&B</AvatarFallback>
                        </Avatar>
                        <h3>Sebastião Rodrigo</h3>
                    </article>
                </CardContent>
            </Card>
        </div>
    )
}