import React, { useRef, useState, memo, useCallback } from "react"
import Editor, { loader } from "@monaco-editor/react"
import { Link } from "gatsby"
import { parseToReact } from "@/components/utils"
import nightOwl from "monaco-themes/themes/Night Owl.json"
import { EditorStyled } from "./styled"
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  StyledContent,
  StyledArrow,
} from "../tooltip"
import ReactCanvasConfetti from "react-canvas-confetti"

const snippet = `<h2 className="text-4xl sm:text-4xl sm:leading-12 mt-6 font-black">
  Developed
  <span className="text-pink-500">
    high-quality
  </span> 
  user interface using
  <span className="text-blue-light">
    React
  </span>
  ecosystem.
</h2>
`

const MemoEditor = memo(({ defaultValue, onMount, onChange }) => (
  <Editor
    height="300px"
    defaultLanguage="html"
    defaultValue={defaultValue}
    theme="night-owl"
    onMount={onMount}
    loading={null}
    onChange={onChange}
  />
))

if (typeof window !== "undefined") {
  loader.init().then(monaco => {
    monaco.editor.defineTheme("night-owl", nightOwl)
  })
}

const PlayCode: React.FC = () => {
  const editorContainerRef = useRef(null)
  const [value, setValue] = useState(snippet)
  const confettiRef = useRef(null)

  const handleEditorDidMount = useCallback(editor => {
    editorContainerRef.current = editor
    editorContainerRef.current.updateOptions({
      minimap: {
        enabled: false,
      },
      fontSize: 16,
      lineNumbersMinChars: 3,
    })
  }, [])

  const handleEditorChange = useCallback((value: string) => {
    setValue(value)
  }, [])

  const makeShot = (particleRatio, opts) => {
    confettiRef.current({
      ...opts,
      origin: { y: 0.7 },
      particleCount: Math.floor(200 * particleRatio),
    })
  }

  const handleEnd = () => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    })

    makeShot(0.2, {
      spread: 60,
    })

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    })

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    })

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    })
  }

  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  }

  const getInstance = instance => {
    confettiRef.current = instance
  }

  const onOpenChanged = e => {
    let timeOut
    if (e) {
      timeOut = setTimeout(() => {
        handleEnd()
      }, 300)
    } else {
      clearTimeout(timeOut)
    }
  }

  return (
    <div className="md:flex -mx-6 items-center">
      <div className="w-full md:w-1/2 px-6">
        <div>
          <div>
            <ReactCanvasConfetti
              refConfetti={getInstance}
              style={canvasStyles as React.CSSProperties}
            />
            <div onClick={onOpenChanged} className="inline-block">
              <TooltipProvider>
                <Tooltip onOpenChange={onOpenChanged} delayDuration={100}>
                  <TooltipTrigger asChild>
                    <img
                      className="h-12 w-12 object-cover cursor-pointer rounded-full ring-4 ring-purple-600"
                      src="https://res.cloudinary.com/muhrusdi/image/upload/v1616335341/thumb-612467.png"
                      alt=""
                    />
                  </TooltipTrigger>
                  <StyledContent side="right" sideOffset={5}>
                    <span className="font-bold">
                      Hi there, i&apos;m a Front End Engineer.
                    </span>
                    <StyledArrow />
                  </StyledContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          {parseToReact(value || snippet)}
          {/* <h2 className="text-4xl sm:text-4xl sm:leading-12 mt-6 font-black line-clamp-3">
            Developed <span className="text-pink-500">high-quality</span> user
            interface using <span className="text-blue-light">React</span>{" "}
            ecosystem.
          </h2> */}
          {/* <p className="mt-4 sm:mt-8 text-lg text-gray-400 line-clamp-2">
            Develop high quality User Interface using React.
          </p> */}
          <Link
            to="/profile"
            className="mt-8 sm:mt-10 inline-block text-lg text-gray-300 font-medium"
          >
            <div className="flex items-center">
              <span>Get in Touch</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-6 mt-12 md:mt-0">
        <EditorStyled className="sm:pr-4">
          <div className="relative z-20">
            <div className="relative w-full flex flex-col bg-blueGray-900 rounded-2xl overflow-hidden">
              <div className="flex-none h-11 flex items-center px-4 border-b border-blueGray-800">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 border-2 rounded-full border-red-500"></div>
                  <div className="w-3 h-3 border-2 rounded-full border-amber-400"></div>
                  <div className="w-3 h-3 border-2 rounded-full border-green-400"></div>
                </div>
              </div>
              <div>
                <MemoEditor
                  defaultValue={value}
                  onMount={handleEditorDidMount}
                  onChange={handleEditorChange}
                />
              </div>
            </div>
          </div>
        </EditorStyled>
      </div>
    </div>
  )
}

export default PlayCode

PlayCode.defaultProps = {
  badge: "Latest from the blog",
}
