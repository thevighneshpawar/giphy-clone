import React, { useEffect, useState } from 'react'
import { HiEllipsisVertical, HiMiniBars2, HiMiniBars3BottomRight } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { GifState } from '../context/gif-context'
import GifSearch from './GifSearch'


function Header() {
    const [categories, setCategories] = useState([])
    const [showCategories, setshowCategories] = useState(false)

    const {gf,favorites} = GifState()

    const fetchGifCategories = async()=>{
        const {data} = await gf.categories();
        setCategories(data)
    }

    console.log(categories);

    useEffect(()=>{
        fetchGifCategories()
    },[])
    return (
        <nav>
            <div className='relative flex gap-4 justify-between items-center mb-2'>
                <Link className='flex gap-2' to='/'>
                    <img src="/logo.svg" alt="Giphy Logo" className='w-8' />
                    <h1 className='text-5xl font-bold tracking-tight cursor-pointer'>
                        Giphy
                    </h1>
                </Link>

            <div className='font-bold text-md flex gap-2 items-center'>
                {/* render categories */}
                {categories?.slice(0,5)?.map((category)=>{
                    return (
                        <Link
                          className="px-4 py-1 transition ease-in-out hover:gradient border-b-4 hidden lg:block"
                          key={category.name}
                          to={`/${category.name_encoded}`}
                        >
                          {category.name}
                        </Link>
                      );
                })}
                

                <button
                    onClick={() => setshowCategories(!showCategories)}
                    className=''>
                    <HiEllipsisVertical
                        size={35}
                        className={`py-0.5 hover:gradient border-b-4 hidden lg:block ${showCategories ? "gradient" : ""}`} />
                </button>
 
              { favorites.length>0 && (<div className='h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded'>
                    <Link to="/favourites">Favourite Gifs</Link>
                </div>)}

                <button>
                    <HiMiniBars3BottomRight
                        size={30}
                        className="text-sky-400 block lg:hidden" />
                </button>
            </div>
                {showCategories &&
                    <div className='absolute right-0 top-14 px-10 pt-6 pb-9 w-full
                       gradient z-20'>
                        <span className='text-3xl font-extrabold'>Categories</span>
                        <hr className='bg-gray-100 opacity-50 my-5'/>
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
                        lg:grid-cols-5 xl:grid-cols-6 gap-4'>
                        {categories.map((category)=>{
                          return(  <Link to={`/${category.name_encoded}`} 
                          key={category.name} className='font-bold'>{category.name}</Link>)
                        })
                        }
                        </div>

                    </div>}
            </div>

            {/* search */}
            <GifSearch/>
        </nav>
    )
}

export default Header
