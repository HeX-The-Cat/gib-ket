import PropTypes from "prop-types"
import { useState } from "react"
import axios from "axios"

const Picture = ({text}) => {
  const [catPic, setCatPic] = useState("https://cataas.com/cat")

  const newCat = async () => {
    if(text.trim() === "") {
      setCatPic("")
      await axios.get("https://cataas.com/cat")
        .then((response) => setCatPic(response.config.url))
    } else {
      setCatPic("")
      await axios.get(`https://cataas.com/cat/says/${text.trim()}`)
        .then((response) => setCatPic(response.config.url))
    }
  }

  return (
    <div className=" w-full flex flex-col justify-center items-center mt-5">
      <div className=" mb-4 w-[750px] h-[750px] flex justify-center items-center ">
        <img className=" max-w-[750px] max-h-[750px] rounded-xl" src={catPic} />
      </div>

      <button className=" p-5 border-solid border-2 rounded-lg font-bold text-xl text-slate-50" onClick={newCat}>Gib New Ket!</button>
    </div>
  )
}

export default Picture

Picture.propTypes = {
  text: PropTypes.string
}