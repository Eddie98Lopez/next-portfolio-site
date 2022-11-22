import React from 'react'
import styled from 'styled-components'
import GalleryThumb from './GalleryThumb'
import {GridList} from './GalleryThumb.styles'



const GalleryList = (props) => {
    const array = props.array

  return (
    <GridList>
        {array.map(item=>{
            return(<GalleryThumb key={item.id} project={item}/>)
        })}
    </GridList>
  )
}

export default GalleryList