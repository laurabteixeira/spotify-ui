import {
  BoomBox,
  ListVideo,
  Mic2,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 p-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/playing-now.jfif"
          width={56}
          height={56}
          alt="Neovaii's Dusk"
        />
        <div className="flex flex-col gap-1">
          <strong className="font-normal">
            Smooth Operator - TikTok Remix
          </strong>
          <span className="text-xs text-zinc-400">F4ST</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-6">
          <Shuffle className="w-4 h-4 text-zinc-200" />
          <SkipBack className="w-4 h-4 text-zinc-200" />
          <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-white ml-auto text-black">
            <Play className="w-4 h-4" />
          </button>
          <SkipForward className="w-4 h-4 text-zinc-200" />
          <Repeat className="w-4 h-4 text-zinc-200" />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-zinc-400">1:53</span>
          <div className="rounded-full w-96 h-1 bg-zinc-500">
            <div className="bg-zinc-200 w-48 h-1 rounded-full" />
          </div>
          <span className="text-xs text-zinc-400">3:56</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-4 ">
          <Mic2 className="w-4 h-4" />
          <ListVideo className="w-4 h-4" />
          <BoomBox className="w-4 h-4" />
          <Volume2 className="w-4 h-4" />
        </div>
        <div className="bg-zinc-500 w-24 h-1 rounded-full">
          <div className="bg-zinc-200 w-14 h-1 rounded-full" />
        </div>
      </div>
    </footer>
  )
}
