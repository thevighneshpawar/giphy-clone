import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GifState } from '../context/gif-context'
import FilterGif from '../components/FilterGif'
import Gif from '../components/Gif'
import Followon from '../components/Followon'

function Categories() {
    const [searchResults, setSearchResults] = useState([])
    const { categories } = useParams()
    const { filter, gf } = GifState()


    const fetchSearchResults = async () => {

        const { data } = await gf.gifs(categories, categories)

        setSearchResults(data);
    }

    useEffect(() => {
        fetchSearchResults();
    }, [categories]);

    //   console.log(searchResults);

    return (

        <div className="flex flex-col sm:flex-row gap-5 my-4">
            <div className="w-full sm:w-72">
                {searchResults.length > 0 && <Gif gif={searchResults[0]} />}
                <span className="text-gray-400 text-sm pt-2">
                    Don&apos;t tell it to me, GIF it to me!
                </span>
                <Followon />
                <div className="w-full h-0.5 mt-6 bg-gray-800" />
            </div>
            <div>
                <h2 className="text-4xl pb-1 font-extrabold capitalize">
                    {categories.split("-").join(" & ")} GIFs
                </h2>
                <h2 className="text-lg text-gray-400 pb-3 font-bold hover:text-gray-50 cursor-pointer">
                    @{categories}
                </h2>

                {searchResults.length > 0 && (
                    <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
                        {searchResults.slice(1).map((gif) => (
                            <Gif gif={gif} key={gif.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Categories
