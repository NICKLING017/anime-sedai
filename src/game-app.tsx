import { useMemo, useRef, useState } from "react"
import gameData from "../game-data"
import { domToBlob } from "modern-screenshot"
import { toast } from "sonner"
import { usePersistState } from "./hooks"

export const GameApp = () => {
  const [selectedGames, setSelectedGames] = usePersistState<string[]>(
    "selectedGames",
    []
  )

  const wrapper = useRef<HTMLDivElement>(null)

  const imageToBlob = async () => {
    if (!wrapper.current) return

    const blob = await domToBlob(wrapper.current, {
      scale: 2,
      filter(el) {
        if (el instanceof HTMLElement && el.classList.contains("remove")) {
          return false
        }
        return true
      },
    })

    return blob
  }

  const copyImage = async () => {
    const blob = await imageToBlob()

    if (!blob) return

    await navigator.clipboard.write([
      new ClipboardItem({
        [blob.type]: blob,
      }),
    ])
  }

  const downloadImage = async () => {
    if (!wrapper.current) return

    const blob = await imageToBlob()

    if (!blob) return

    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "game-sedai.png"
    a.click()

    URL.revokeObjectURL(url)
  }

  const [promptType, setPromptType] = useState<"normal" | "gamer">("gamer")
  const prompt = useMemo(() => {
    const preset =
      promptType === "normal"
        ? `以下是用户的游戏体验记录，请生成一个锐评。`
        : `你是一个精通游戏文化的资深游戏评论家，需要根据用户提供的游戏体验记录，用专业但略带调侃的语气生成游戏品味报告。要求：
1. 结构模板
  - 列出5-6个评价段落
  - 每个段落的所有内容请务必都包含在 ">> 标签" 开始的一行之后！！
  - 每一个评价段落的主题都应当不同，且应当有深度
  - 你应当适当地使用游戏圈常见术语，如"氪金"、"肝帝"、"白金"、"通关"等
  - 不要在输出的报告中写题目以及任何 markdown 样式，这非常，非常重要！！
2. 内容规则
  - 一些常见的评价类型：
    - 游戏类型偏好分析（例："主要玩开放世界和RPG，看来是个喜欢自由探索的玩家"）
    - 游戏难度偏好（例："选了黑魂和只狼，是个喜欢挑战的硬核玩家啊"）
    - 游戏平台偏好（例："大量独占游戏，看来是个主机党"）
    - 游戏发行商偏好（例："这么多育碧游戏，看来是个刺客信条爱好者"）
    - 所有内容必须包含在 ">> 标签" 行之后
  - 想一下还有哪些适合用来评价的角度，但不要太多，否则会显得很杂乱
3. 示例:
"""
>> 开放世界探索家

从你的游戏列表来看，《塞尔达传说：旷野之息》、《荒野大镖客：救赎2》和《巫师3》都是你的选择，这表明你非常喜欢在广阔的世界中自由探索，享受发现隐藏宝藏和支线任务的乐趣。你可能是那种会在游戏中花费数百小时只为了欣赏风景的玩家。

>> 硬核挑战爱好者

《黑暗之魂》系列、《只狼》和《艾尔登法环》都出现在你的列表中，看来你是个不怕挫折的硬核玩家。"You Died"对你来说可能已经是家常便饭，但你依然乐在其中。FromSoftware的游戏对你有着难以抗拒的吸引力。

>> 剧情体验至上

《最后生还者》系列、《生化危机》系列和《控制》这些重视叙事的游戏也是你的最爱，说明你不仅仅满足于游戏玩法，还非常看重游戏的故事性和情感深度。你可能是那种会因游戏剧情而落泪的玩家。

>> ...

...

>> ...

...
"""

现在开始分析用户的游戏体验记录，按上述格式输出锐评报告。
`

    return `
${preset}
用户游戏体验记录：(下面的年份是游戏发布的年份)
${Object.keys(gameData)
  .map((year) => {
    const items = gameData[year] || []

    if (items.length === 0) return ""

    const sliceItems = items.slice(0, 12)
    const played = sliceItems
      .filter((item) => selectedGames.includes(item.title))
      .map((item) => item.title)
      .join(", ")
    const notPlayed = sliceItems
      .filter((item) => !selectedGames.includes(item.title))
      .map((item) => item.title)
      .join(", ")

    return [
      `**${year}年**:`,
      `玩过: ${played || "无"}`,
      `没玩过: ${notPlayed || "无"}`,
    ]
      .filter(Boolean)
      .join("\n")
  })
  .filter(Boolean)
  .join("\n")}
    `.trim()
  }, [selectedGames, promptType])

  return (
    <>
      <div className="flex flex-col gap-4 pb-10">
        <div className="p-4 flex flex-col md:items-center ">
          <div
            className="flex flex-col border border-b-0 bg-white w-fit"
            ref={wrapper}
          >
            <div className="border-b justify-between p-2 text-lg font-bold flex">
              <h1>
                游戏世代<span className="remove"> - 点击选择你玩过的游戏</span>
                <span className="ml-2 text-zinc-400 font-medium">
                  game-sedai.egoist.dev
                </span>
              </h1>
              <span className="shrink-0 whitespace-nowrap">
                我玩过 {selectedGames.length}/
                {
                  Object.values(gameData).flatMap((year) => {
                    return year.map((item) => item.title).slice(0, 12)
                  }).length
                }{" "}
                款游戏
              </span>
            </div>
            {Object.keys(gameData).map((year) => {
              const items = gameData[year] || []
              return (
                <div key={year} className="flex border-b">
                  <div className="bg-blue-600 shrink-0 text-white flex items-center font-bold justify-center p-1 size-16 md:size-20 border-black">
                    {year}
                  </div>
                  <div className="flex shrink-0">
                    {items.slice(0, 12).map((item) => {
                      const isSelected = selectedGames.includes(item.title)
                      return (
                        <button
                          key={item.title}
                          className={`size-16 md:size-20 border-l break-all text-center shrink-0 inline-flex items-center p-1 overflow-hidden justify-center cursor-pointer text-sm  ${
                            isSelected ? "bg-green-500" : "hover:bg-zinc-100"
                          }`}
                          title={item.title}
                          onClick={() => {
                            setSelectedGames((prev) => {
                              if (isSelected) {
                                return prev.filter(
                                  (title) => title !== item.title
                                )
                              }
                              return [...prev, item.title]
                            })
                          }}
                        >
                          <span className="leading-tight w-full line-clamp-3">
                            {item.title}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex gap-2 justify-center">
          <button
            type="button"
            className="border rounded-md px-4 py-2 inline-flex"
            onClick={() => {
              setSelectedGames(
                Object.values(gameData).flatMap((year) => {
                  return year.map((item) => item.title).slice(0, 12)
                })
              )
            }}
          >
            全选
          </button>

          {selectedGames.length > 0 && (
            <button
              type="button"
              className="border rounded-md px-4 py-2 inline-flex"
              onClick={() => {
                setSelectedGames([])
              }}
            >
              清除
            </button>
          )}

          <button
            type="button"
            className="border rounded-md px-4 py-2 inline-flex"
            onClick={() => {
              toast.promise(copyImage(), {
                success: "复制成功",
                loading: "复制中",
                error(error) {
                  return `复制失败: ${
                    error instanceof Error ? error.message : "未知错误"
                  }`
                },
              })
            }}
          >
            复制图片
          </button>

          <button
            type="button"
            className="border rounded-md px-4 py-2 inline-flex"
            onClick={() => {
              toast.promise(downloadImage(), {
                success: "下载成功",
                loading: "下载中",
                error(error) {
                  return `下载失败: ${
                    error instanceof Error ? error.message : "未知错误"
                  }`
                },
              })
            }}
          >
            下载图片
          </button>
        </div>

        <div className="flex flex-col gap-2 max-w-screen-md w-full mx-auto">
          <div className="border focus-within:ring-2 ring-blue-500 focus-within:border-blue-500 rounded-md">
            <div className="flex items-center justify-between p-2 border-b">
              <div className="flex items-center gap-2">
                <span>锐评提示词</span>
                <select
                  className="border rounded-md"
                  value={promptType}
                  onChange={(e) => {
                    setPromptType(e.currentTarget.value as any)
                  }}
                >
                  <option value="normal">普通</option>
                  <option value="gamer">游戏评论家</option>
                </select>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="text-sm text-zinc-500 hover:bg-zinc-100 px-1.5 h-7 flex items-center rounded-md"
                  onClick={() => {
                    navigator.clipboard.writeText(prompt)
                    toast.success("复制成功")
                  }}
                >
                  复制
                </button>

                <button
                  type="button"
                  className="text-sm text-zinc-500 hover:bg-zinc-100 px-1.5 h-7 flex items-center rounded-md"
                  onClick={() => {
                    location.href = `chatwise://chat?input=${encodeURIComponent(
                      prompt
                    )}`
                  }}
                >
                  在 ChatWise 中打开 (需要先安装)
                </button>
              </div>
            </div>
            <textarea
              readOnly
              className="outline-none w-full p-2 resize-none cursor-default"
              rows={10}
              value={prompt}
            />
          </div>
        </div>

        <div className="mt-2 text-center">
          历年热门游戏，由
          <a
            href="https://x.com/localhost_4173"
            target="_blank"
            className="underline"
          >
            低空飞行
          </a>
          制作，
          <a
            href="https://github.com/egoist/anime-sedai"
            target="_blank"
            className="underline"
          >
            查看代码
          </a>
        </div>

        <div className="text-center">
          作者的其它产品:{" "}
          <a
            href="https://chatwise.app"
            target="_blank"
            className="underline inline-flex items-center gap-1"
          >
            <img src="https://chatwise.app/favicon.png" className="size-4" />{" "}
            ChatWise
          </a>
          , 一个优雅的 AI 聊天客户端
        </div>
      </div>
    </>
  )
}