import {useState} from "react";
import {HiMiniXMark, HiOutlineMagnifyingGlass} from "react-icons/hi2";
import {useNavigate} from "react-router-dom";

const GifSearch = () => {

    const [query, setQuery]= useState("")
    const navigate = useNavigate()

    const searchGifs = async () =>{
          if(query.trim()===""){
            return;
          }
          navigate(`/search/${query}`)
    }
  return (
    <div className="flex relative">
        <input 
        type="text" 
        value={query}
        placeholder="Search gifs Stickers"
        className="py-4 text-black outline-none text-xl px-3 w-full mt-1"
        onChange={(e) => setQuery(e.target.value)}
        />

        {query && (
            <button onClick={()=> setQuery("")}>
                <HiMiniXMark
                className="absolute rounded bg-gray-300 opacity-90 right-20 top-6" 
                size={22}/>
            </button>
        )}

        <button onClick={searchGifs}
        className="mt-1 bg-gradient-to-tr from-pink-600 to-pink-400 text-white px-4 py-2 rounded-tr rounded-br"
        >
         <HiOutlineMagnifyingGlass 
         size={35} className="-scale-x-100"/>
        </button>
    </div>
  )
}

export default GifSearch