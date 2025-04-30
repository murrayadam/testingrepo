import GardeningTodoApp from "@/components/GardeningTodoApp";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 bg-gradient-to-b from-green-50 to-white">
      <header className="max-w-4xl mx-auto mb-8 flex flex-col items-center">
        <Image
          className="mb-6"
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={25}
          priority
        />
        <h1 className="text-3xl font-bold text-green-800 mb-2">
          Spring Garden Planner
        </h1>
        <p className="text-gray-600 text-center max-w-md">
          Keep track of your garden tasks and stay organized this season
        </p>
      </header>

      <main className="max-w-4xl mx-auto">
        <GardeningTodoApp />
      </main>

      <footer className="max-w-4xl mx-auto mt-16 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
        <p>Built with Next.js and Tailwind CSS</p>
      </footer>
    </div>
  );
}
