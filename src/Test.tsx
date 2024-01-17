import React from 'react'

const videos = ['https://youtu.be/a3dn6sR18_4', 'https://youtu.be/QHRcpLQhE0Q'] //put ur video link into an array

const getYouTubeVideoId = (url) => {
  const match = url.match(
    /^(?:(?:https?:)?\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  )
  return match ? match[1] : ''
} //this function extracts video id

const Test = () => {
  return (
    <div>
      {videos.map((el, index) => (
        <ul key={index}>
          <li>
            <iframe
              title="YouTube Video"
              className="md:h-[70vh] md:w-[70vw] max-w-[800px] max-h-[500px]" //css part, im using tailwind but u can do this in your css file
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(el)}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </li>
        </ul>
      ))}
    </div>
  )
}

export default Test
