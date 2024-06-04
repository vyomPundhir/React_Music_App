import React from 'react'
import ArtistCard from './ArtistCard'
import axios from 'axios'
// import axios from 'axios'

const PopularArtists = () => {

  // const [artists, setArtists] = useState([])
  // setToken(window.localStorage.getItem("token"))

  const showArtists = async (e) => {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/artists", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: {
          ids: "2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6"
        }
      }
    })

    console.log(data)
  }



  return (
    <section className="flex flex-col gap-[20px]">

      <div className="flex flex-col gap-[20px]">


        <h4 className="hover:cursor-pointer hover:underline text-[27px] font-[700]">Popular Artists</h4>


        <div className="flex flex-row items-center justify-start flex-wrap gap-[10px]">

          <ArtistCard/>
          <ArtistCard/>
          <ArtistCard/>
          <ArtistCard/>
          <ArtistCard/>
          <ArtistCard/>
          <ArtistCard/>
          <ArtistCard/>
          <ArtistCard/>
          <ArtistCard/>
        </div>

      </div>

    </section>
  )
}

export default PopularArtists