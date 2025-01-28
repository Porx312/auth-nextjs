import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Unauthorized() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Acceso No Autorizado</CardTitle>
          <CardDescription>
            No tienes permiso para acceder a esta página.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">
            Por favor, inicia sesión para acceder al contenido protegido.
          </p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <Link href="/auth">Iniciar Sesión</Link>
          </Button>
          <Button asChild>
            <Link href="/">Volver al Inicio</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
