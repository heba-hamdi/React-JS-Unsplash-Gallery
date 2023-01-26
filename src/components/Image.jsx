import React from 'react'
import { format } from 'date-fns'

const Image = (props) => {
  return (
    <>
      <article className='shadow-md bg-white rounded-3xl p-5 m-2'>
        <img src={props.urls.full } alt={props.user.name} className="h-52 w-full object-cover rounded-3xl md:h-80"/>
        <article className='flex items-center justify-between flex-wrap'>
        <div className='pt-5 flex items-center justify-start'>
          <img src={props.user.profile_image.large} alt={props.user.name} className="rounded-full  w-20 shadow-md" loading="lazy" />
          <ul className='ml-3'>
            <li className='font-bold text-lg text-slate-800 mb-1'>{props.user.name}</li>
            <li className='text-slate-600 text-sm'>{format(new Date(props.created_at),"dd MMMM yyy")}</li>
          </ul>
        </div>
        <div>
          <ul className='text-slate-600 text-sm text-right'>
            <li><a href={`https://www.instagram.com/${props.user.instagram_username}`} className="underline">Instagram</a></li>
            <li>{props.likes} likes</li>
          </ul>
        </div>
        </article>
      </article>
    </>
  )
}

export default Image
