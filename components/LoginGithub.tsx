"use client";

import { useSession, signIn } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { redirect } from "next/navigation";

export default function LoginGithub() {
  const { data: session } = useSession();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Iniciar sesión</CardTitle>
        <CardDescription>Usa tu cuenta de GitHub para acceder</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          variant="outline"
          onClick={() => signIn("github")}
          className="w-full"
        >
          <Github className="mr-2 h-4 w-4" />
          Continuar con GitHub
        </Button>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Al continuar, aceptas nuestros términos de servicio.
        </p>
      </CardFooter>
    </Card>
  );
}
