import { User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export function Sales(){
    return(
        <Card className="flex-1">
            <CardHeader className=" bg-blue-500 h-20 text-white rounded-t-xl">
                <div className="flex items-center justify-center ">
                    <CardTitle className=" text-lg sm:text-xl text-center">
                        Últimos clientes
                    </CardTitle>
                    <User className="ml-auto w-4 h-4"/>
                </div>
                <CardDescription className="text-white text-center">
                    Novos clientes nos últimos 30 dias.
                </CardDescription>
            </CardHeader>

            <CardContent className="cursor-pointer hover:bg-blue-300 duration-300 rounded-xl">
                <article className="flex items-center gap-2 border-b py-2">
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
    )
}