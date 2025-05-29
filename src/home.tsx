import { useState } from "react"
import { App } from "./app"
import { GameApp } from "./game-app"

export const Home = () => {
  const [mode, setMode] = useState<"anime" | "game">("anime")

  return (
    <div className="container mx-auto py-4">
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-l-lg ${
              mode === "anime"
                ? "bg-red-500 text-white"
                : "bg-white text-gray-900 hover:bg-gray-100"
            }`}
            onClick={() => setMode("anime")}
          >
            动画世代
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-r-lg ${
              mode === "game"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-900 hover:bg-gray-100"
            }`}
            onClick={() => setMode("game")}
          >
            游戏世代
          </button>
        </div>
      </div>

      {mode === "anime" ? <App /> : <GameApp />}
    </div>
  )
}