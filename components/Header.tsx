"use client";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Router } from "next/router";
const Header = () => {
  const { data: session } = useSession();

  return (
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="/" className="flex items-center justify-center">
          <Github className="h-6 w-6 mr-2" />
          <span className="font-bold">AuthNext</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          {!session ? (
            <Link href="/auth">
              <Button className="inline-flex items-center justify-center">
                <Github className="h-6 w-6 mr-2" />
                Iniciar sesión con Github
              </Button>
            </Link>
          ) : (
            <Button
              onClick={() => signOut()}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Cerrar sesión
            </Button>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
