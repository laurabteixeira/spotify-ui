import { Home as House, Search, Library } from 'lucide-react'

export default function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-300 hover:cursor-pointer" />
        <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-300 hover:cursor-pointer" />
        <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-300 hover:cursor-pointer" />
      </div>

      <nav className="space-y-4 mt-10">
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <House />
          Home
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Search />
          Search
        </a>
        <a
          href="#"
          className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
        >
          <Library />
          Your Library
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Esquece🤩
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Neovaii
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Corrida
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Músicas orientais
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Lo-fi💚
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Rock Indie
        </a>
        <a href="" className="text-zinc-400 text-sm hover:text-zinc-100">
          Guitar Hero🔥
        </a>
      </nav>
    </aside>
  )
}
