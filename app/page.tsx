import Header from "@/components/Header";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center flex-col ">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl lg:text-6xl">
          Autenticación Simplificada para Next.js
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-3xl dark:text-gray-400">
          Implementa autenticación segura y fácil de usar en tus aplicaciones
          Next.js en minutos.
        </p>
      </section>
    </div>
  );
}
