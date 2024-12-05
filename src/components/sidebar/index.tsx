"use-client"
import Link from 'next/link'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Home, LogOut, Package, PanelBottom, Settings, SettingsIcon, ShoppingBag, Users } from 'lucide-react'
import { DialogTitle } from '@radix-ui/react-dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
export function Sidebar(){
    return(
        <div className="flex w-full flex-col bg-muted/40">

            <aside className="fixed p-2 inset-y-0 left-0 z-10 hidden w-14 border-r bg-background sm:flex flex-col">
                <nav className="flex flex-col items-center gap-4 px-2 py-5">
                <TooltipProvider>
                    <Link href="#" className="flex shrink-0 items-center justify-center h-9 w-9 bg-primary 
                    text-primary-foreground rounded-full duration-300 hover:scale-110">
                        <Package className="h-5 w-5" />
                    </Link>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="/home" className="btn-aside">
                                <Home className="h-4 w-4" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>Início</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="" className="btn-aside">
                                <ShoppingBag className="h-4 w-4" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>Pedidos</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="" className="btn-aside">
                                <Users className="h-4 w-4" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>Clientes</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link href="" className="btn-aside">
                                <Settings className="h-4 w-4" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side='right'>Configurações</TooltipContent>
                    </Tooltip>

                </TooltipProvider>
                </nav>

                <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link href="/login" className="flex bg-red-400 text-black h-9 w-9 shrink-0 items-center justify-center
                                    text-primary-foreground rounded-full hover:scale-110 hover:rotate-12 hover:bg-red-600 hover:text-white">
                                    <LogOut className="h-4 w-4" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side='right'>Sair</TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>

            <div className="sm:hidden flex flex-col sm:py-4 sm:pl-14">
                <header className=" sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4
                sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 ">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant={'outline'} className='sm:hidden'>
                                <PanelBottom className='w-5 h-5'></PanelBottom>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className="sm:max-w-x">
                            <DialogTitle>Hello</DialogTitle>
                            <nav className="grid gap-2 text-lg font-medium p-2">
                                <Link href="#" className="flex h-10 w-10 bg-primary rounded-full
                                    items-center justify-center text-primary-foreground gap-2"
                                    prefetch={false}>
                                    <Package className="h-5 w-5" />
                                </Link>

                                <Link href="#" className="flex h-10 items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}>
                                    <Home className="h-5 w-5" />
                                    <h3>início</h3>
                                </Link>
                                
                                <Link href="#" className="flex h-10 items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}>
                                    <ShoppingBag className="h-5 w-5" />
                                    <h3>Pedidos</h3>
                                </Link>

                                <Link href="#" className="flex h-10 items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}>
                                    <Users className="h-5 w-5" />
                                    <h3>Clientes</h3>
                                </Link>

                                <Link href="#" className="flex h-10 items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    prefetch={false}>
                                    <SettingsIcon className="h-5 w-5" />
                                    <h3>Configurações</h3>
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <h2>Menu</h2>
                </header>
            </div>
        </div>
    )
}