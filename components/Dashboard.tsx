"use client";
import { signOut, useSession } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { SiGithub } from "react-icons/si";
import Unauthorized from "./Unauthorize";
export default function Dashboard() {
  const { data: session } = useSession();

  if (!session) {
    return <Unauthorized />;
  }
  if (session) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Dashboard de Usuario</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Perfil de Usuario</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage
                  src={session.user?.image || ""}
                  alt={session.user?.name || "undefine"}
                />
                <AvatarFallback>{session.user?.name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-semibold">{session.user?.name}</h2>
                <p className="text-gray-500">{session.user?.email}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Información de la Sesión</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div>
                  <strong>ID de Usuario:</strong> {session.user?.id}
                </div>
                <div>
                  <strong>Proveedor:</strong>{" "}
                  <Badge className="inline-flex items-center">
                    <SiGithub className="w-4 h-4 mr-1" /> GitHub
                  </Badge>
                </div>
                <div>
                  <strong>Expira:</strong>{" "}
                  {new Date(session.expires).toLocaleString()}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Datos Completos de la Sesión</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-100 p-4 rounded-md overflow-auto max-h-96">
                {JSON.stringify(session, null, 2)}
              </pre>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 flex justify-between items-center"></div>
      </div>
    );
  }
}
