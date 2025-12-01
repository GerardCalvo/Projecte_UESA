import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import noticiesData from "../assets/db/noticies.json"

interface Noticia {
  id: number
  titol: string
  img: string
  data: string
  descripcio: string
}

export function Noticia() {
  const { id } = useParams()
  const [noticia, setNoticia] = useState<Noticia | null>(null)

  useEffect(() => {
    const found = noticiesData.find(n => n.id.toString() === id)
    setNoticia(found || null)
  }, [id])

  if (!noticia) return <div className="p-8">Notícia no trobada</div>

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">{noticia.titol}</h1>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        <img
          src={noticia.img}
          className="w-full md:w-1/2 h-auto rounded object-cover"
        />

        <p className="text-gray-700 md:w-1/2">
          {noticia.descripcio}
        </p>
      </div>
    </div>
  )
}
