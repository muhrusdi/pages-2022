import React, { useContext, useState } from "react"
import { BsFillPlayFill } from "react-icons/bs"
import { GridItem } from "components/murottal/player/styled"
import { Context } from "contexts"

const MurottalPage: React.FC = () => {
  const [dataMurottal] = useState([
    {
      "name": "سورة ق 1423 هـ",
      "artist": "مشاري راشد العفاسي",
      "album": "1423 ه",
      "url": "https://archive.org/download/1423-alafasy/2-qaf-1423.mp3",
      "cover_art_url": "https://1.bp.blogspot.com/-K_Le8DdP5Ks/Xn9eooY-QcI/AAAAAAAAQHw/41H2n0l2pW8bCYIL_gHIOUeMPQhExZC8ACLcBGAsYHQ/s320/%25D8%25B3%25D9%2588%25D8%25B1%25D8%25A9%2B%25D9%2582%2B1423%2B%25D9%2587%25D9%2580.jpg"
    }
  ])
  const { handleSetMurottal } = useContext(Context)

  const handlePlay = (song) => {
    handleSetMurottal([song])
  }
  return (
    <div>
      <div>
        <div>
          <h1 className="font-black text-5xl">Murottal</h1>
          <p className="text-gray-400 text-2xl mt-4">Lantunan indah Al Qur&apos;an</p>
        </div>
        <div className="grid grid-cols-4 gap-8 mt-12">
          {
            dataMurottal.map((item, i) => (
              <GridItem key={i}>
                <div className="image relative h-44 rounded-md overflow-hidden flex justify-center items-center" onClick={() => handlePlay(item)}>
                  <div className="relative z-10 play transition-all">
                    <BsFillPlayFill size={60}/>
                  </div>
                  <img className="absolute object-cover h-full w-full" src={item.cover_art_url} alt="" />
                </div>
                <div className="mt-4">
                  <h2>{item.name}</h2>
                  <p className="mt-1 text-blueGray-400">{item.artist}</p>
                </div>
              </GridItem>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default MurottalPage