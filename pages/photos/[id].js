import Image from 'next/image'
import React from 'react'


const Photo = ({data}) => {
  return (
    <div>
        <h1>{data.author}</h1>
        <Image src={data.download_url} width={data.width/10} height={data.height/10} alt={""} />
    </div>
  )
}

export default Photo

//Static site generation 

export async function getStaticPaths(){
    return{
        paths: [
            {params: {id: "0"}},
            {params: {id: "1"}}
        ],
        //si Fallback est a false , les seules pages qui seront génére sont celles spécifié dans le tableau paths
        // fallback :false,
        //si fallback est a vrai , meme les pages qui ne sont pas spécifié dans path seront généré en mode SSR ==> nous avons donc une solution hybride (SSG + SSR)
        fallback :true,
    }
}

export async function getStaticProps({params}){
    //le nom du parametre id provient directement du nom du fichier avec l'information stocké dans les []
    const data = await fetch(`https://picsum.photos/id/${params.id}/info`).then(res=> res.json())

    return{
        props :{
            data
        }
    }
}

// c'est Server Side Renderinh

// export async function getServerSideProps({params}){
//     //le nom du parametre id provient directement du nom du fichier avec l'information stocké dans les []
//     const data = await fetch(`https://picsum.photos/id/${params.id}/info`).then(res=> res.json())

//     return{
//         props :{
//             data
//         }
//     }
// }