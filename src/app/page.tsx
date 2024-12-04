import ChartOverview from "@/components/chart";
import { Sales } from "@/components/sales";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Package, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      
      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">        
        <Card>
          <CardHeader>
            <div className="flex gap-4 items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-700 select-none">Total vendas</CardTitle>
              <DollarSign />
            </div>
            <CardDescription>
              <h3 className="text-center">Total vendas em 90 dias.</h3>
            </CardDescription>
            <CardContent>
              <p className="text-base sm:text-lg font-bold text-center">R$ 40.000</p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
          <Link href="/novos-clientes">
            <CardHeader>
              <div className="flex items-center gap-4 justify-center">
                <CardTitle className="text-lg sm:text-xl text-gray-700 select-none">Novos Clientes</CardTitle>
                <Users />
              </div>
              <CardDescription>
                <h3 className="text-center">Novos clientes em 30 dias.</h3>
              </CardDescription>
              <CardContent>
                <p className="text-base sm:text-lg font-bold text-center"> 03 </p>
              </CardContent>
            </CardHeader>
          </Link>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4 justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-700 select-none">Faturamento 1/6</CardTitle>
              <DollarSign />
            </div>
            <CardDescription>
              <h3 className="text-center">Fechamento do semestre 2024.</h3>
            </CardDescription>
            <CardContent>
              <p className="text-base sm:text-lg font-bold text-center"> R$ 23.990,80 </p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-4 justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-700 select-none">Total de Op. 1/6</CardTitle>
              <Package />
            </div>
            <CardDescription>
              <h3 className="text-center">semestre 2024.</h3>
            </CardDescription>
            <CardContent>
              <p className="text-base sm:text-lg font-bold text-center"> 2093 itens </p>
            </CardContent>
          </CardHeader>
        </Card>
      </section>

      <section className="mt-3 mb-3">
        <h2 className="text-2xl">Nossos resultados</h2>
        <hr className="border-b-4" />
      </section>

      <section className="h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          <ChartOverview />
          <ChartOverview />
      </section>

      <section className="mt-4 h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
        <ChartOverview />
        <Sales />
      </section>
    </main>
  );
}
