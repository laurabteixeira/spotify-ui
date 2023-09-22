import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function Main() {
  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-5">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>

      <h1 className="font-bold text-2xl mt-10">Good Afternoon</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <a
          href=""
          className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group"
        >
          <Image src="/dusk.jpg" width={80} height={80} alt="Neovaii's Dusk" />
          <strong>Dusk</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 ml-auto mr-8 text-black invisible group-hover:visible hover:bg-green-300 transition-colors">
            <Play />
          </button>
        </a>
        <a
          href=""
          className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group"
        >
          <Image
            src="/taste-of-love.png"
            width={80}
            height={80}
            alt="Twice's Taste Of Love"
          />
          <strong>Taste Of Love</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 ml-auto mr-8 text-black invisible group-hover:visible hover:bg-green-300 transition-colors">
            <Play />
          </button>
        </a>
        <a
          href=""
          className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group"
        >
          <Image
            src="/hot-pink.jpg"
            width={80}
            height={80}
            alt="Doja Cat's Hot Pink"
          />
          <strong>Hot Pink</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 ml-auto mr-8 text-black invisible group-hover:visible hover:bg-green-300 transition-colors">
            <Play />
          </button>
        </a>
        <a
          href=""
          className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group"
        >
          <Image
            src="/montero.png"
            width={80}
            height={80}
            alt="Lil Nas X's Montero"
          />
          <strong>Montero</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 ml-auto mr-8 text-black invisible group-hover:visible hover:bg-green-300 transition-colors">
            <Play />
          </button>
        </a>
        <a
          href=""
          className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group"
        >
          <Image
            src="/k-12.png"
            width={80}
            height={80}
            alt="Melanie Martinez's K-12"
          />
          <strong>K-12</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 ml-auto mr-8 text-black invisible group-hover:visible hover:bg-green-300 transition-colors">
            <Play />
          </button>
        </a>
        <a
          href=""
          className="bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group"
        >
          <Image
            src="/get-up.png"
            width={80}
            height={80}
            alt="New Jeans's Get Up"
          />
          <strong>Get Up</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 ml-auto mr-8 text-black invisible group-hover:visible hover:bg-green-300 transition-colors">
            <Play />
          </button>
        </a>
      </div>

      <h2 className="font-bold text-xl mt-10">Made for Laura</h2>

      <div className="grid grid-cols-8 gap-4 mt-4">
        <a
          href=""
          className="bg-white/5 p-3 rounded hover:bg-white/10 transition-colors flex flex-col gap-2"
        >
          <Image
            src="/hot-hits-usa.jpg"
            className="w-full"
            width={104}
            height={104}
            alt="Neovaii's Dusk"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-xs text-zinc-500">
            Olivia Rodrigo, Girl In Red and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 rounded hover:bg-white/10 transition-colors flex flex-col gap-2"
        >
          <Image
            src="/daily-mix-1.jfif"
            className="w-full"
            width={104}
            height={104}
            alt="Neovaii's Dusk"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-xs text-zinc-500">
            Olivia Rodrigo, Girl In Red and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 rounded hover:bg-white/10 transition-colors flex flex-col gap-2"
        >
          <Image
            src="/daily-mix-4.jfif"
            className="w-full"
            width={104}
            height={104}
            alt="Neovaii's Dusk"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-xs text-zinc-500">
            Olivia Rodrigo, Girl In Red and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 rounded hover:bg-white/10 transition-colors flex flex-col gap-2"
        >
          <Image
            src="/daily-mix-5.jfif"
            className="w-full"
            width={104}
            height={104}
            alt="Neovaii's Dusk"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-xs text-zinc-500">
            Olivia Rodrigo, Girl In Red and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 rounded hover:bg-white/10 transition-colors flex flex-col gap-2"
        >
          <Image
            src="/discover-weekly.png"
            className="w-full"
            width={104}
            height={104}
            alt="Neovaii's Dusk"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-xs text-zinc-500">
            Olivia Rodrigo, Girl In Red and more
          </span>
        </a>
      </div>
    </main>
  )
}
