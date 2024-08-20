import React from 'react'
import { useState, useEffect } from 'react'
import Papa from 'papaparse'

interface ProjectModel {
  ID: number
  title: string
  description: string
  tech: string
  code: string
  video: string
}

function Project() {
  const [showPopup, setShowPopup] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<
    ProjectModel['video'] | null
  >(null)

  useEffect(() => {
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  const openPopup = (video: React.SetStateAction<string | null>) => {
    setSelectedVideo(video)
    setShowPopup(true)
    document.body.style.overflow = 'hidden'
  }

  const closePopup = () => {
    setSelectedVideo(null)
    setShowPopup(false)
    document.body.style.overflow = ''
  }

  const fileParsing = () =>
    new Promise((resolve) => {
      Papa.parse(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vS0KEI1cC42Z7v2iGtjD4364g-sITlAXoTUXQgkGi_ki3-7ajey2OnI31tazLZPkPfsMd4OIRp13Q5X/pub?output=csv',
        {
          download: true,
          header: true,
          newline: '',
          complete: function (results, file) {
            resolve(results.data)
          },
        }
      )
    })

  const [data, setData] = useState<ProjectModel[] | null>(null)

  useEffect(() => {
    const fetchData = async (): Promise<ProjectModel[] | unknown> => {
      const result = await fileParsing()
      return result
    }

    const fetchAndSetData = async () => {
      try {
        const result = await fetchData()
        setData(result as ProjectModel[])
      } catch (error) {
        console.error('Error fetching data', error)
      }
    }
    fetchAndSetData()
  }, [])

  const getYouTubeVideoId = (url: string) => {
    const match = url.match(
      /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    )
    return match ? match[1] : ''
  }

  return (
    <section
      className="min-h-screen max-h-full bg-gradient-to-t from-gray-900 via-purple-900 to-violet-600"
      id="project"
    >
      <div className="h-[10vh] md:h-[12vh]">
        <h1 className="project text-center text-2xl md:text-3xl lg:text-5xl font-bold uppercase pt-16 text-white">
          Projects
        </h1>
      </div>

      <div className="flex justify-center items-center pt-8">
        <div className="card-container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {data?.map((el) => (
            <>
              <div
                key={el.ID}
                className="thecard relative w-72 lg:w-96 h-72 lg:h-72"
              >
                <div className="thefront absolute w-full h-full rounded-md p-0 border-4 border-black">
                  <div className="relative w-full h-full">
                    <img
                      src={`./${el.title}.png`}
                      alt={el.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute top-0 left-0 right-0 p-2">
                      <h4 className="text-l font-semibold text-black">
                        {el.title}
                      </h4>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black opacity-70">
                      <p className="text-yellow-500 text-sm opacity-100">
                        {el.tech}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="theback absolute w-fit md:w-full h-full rounded-md p-1 md:p-4 border-4 border-black inline-flex flex-col items-center">
                  <div className="text-sm md:text-md md:font-semibold">
                    {el.description}
                  </div>
                  <button
                    onClick={() => openPopup(el.video)}
                    className="bg-black text-white p-1 rounded-md mt-2 w-36 text-sm hover:opacity-75"
                  >
                    open demo video/live website
                  </button>
                  <button className="bg-black text-white p-1 rounded-md mt-2 w-36 text-sm hover:opacity-75">
                    <a href={el.code} target="_blank">
                      view source code
                    </a>
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>

        {showPopup && (
          <>
            <div className="overlay" onClick={closePopup}>
              <div className="cursor-pointer">
                <span className="close-btn" onClick={closePopup}>
                  &times;
                </span>
              </div>
            </div>
            <div className="popup-media">
              {selectedVideo && (
                <iframe
                  title="YouTube Video"
                  className="md:h-[70vh] md:w-[70vw] max-w-[800px] max-h-[500px]"
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                    selectedVideo
                  )}?autoplay=1`}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Project
