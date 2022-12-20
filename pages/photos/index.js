import React from 'react'
import Image from 'next/image' 
import Link from 'next/link'


const index = ({data}) => {
    const listphotos = data.map(photo=>{
        return(
            <div className='item' key={photo.id} >
                <Link href={`/photos/${photo.id}`} >
               
                <Image src={photo.download_url} width={photo.width/10} height={photo.height/10} alt={""} />
                </Link>
            </div>
        )
    })
  return (
    <div>
        <h1>Nos photos souvenirs</h1>
        {listphotos}
    </div>
  )
}

export default index

export async function getServerSideProps(){
    const data = await fetch('https://picsum.photos/v2/list')
    .then(res => res.json())

    return {
        props : {
            data
        }
    }
}