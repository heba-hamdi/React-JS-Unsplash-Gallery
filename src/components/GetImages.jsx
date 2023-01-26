import React, { useEffect, useState } from 'react'
import Image from './Image';
import Loading from './loading/Loading';

const GetImages = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const getImages=async ()=>{
            const response= await fetch (`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP__IMAGE_GALLERY_API_KEY}`);
            const data=await response.json()
            setImages(data)
            console.log(data)
            console.log(data)
        }
        getImages();
       
    }, []);

  return (
    <div>      
     {!images?<h2><Loading/></h2>:
     <section className='container m-auto px-5'>
      <h1 className='font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20 lg:mb-16 text-slate-800 capitalize'>Recomended for you</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {images.map((image)=>
          <Image key={image.id}{...image}/>
        )}
      </div>
     </section>
     }
    </div>
  )
}

export default GetImages
