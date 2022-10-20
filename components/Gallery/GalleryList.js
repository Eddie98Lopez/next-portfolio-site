import React from 'react'
import styled from 'styled-components'
import GalleryThumb from './GalleryThumb'

const Grid = styled.ul`
width: 90%;
margin:auto;
padding: 1rem;
display: grid;
grid-template-columns: repeat(4,1fr);
gap:2rem;
padding-bottom:15vh;

@media only screen and (max-width:768px){
  width:100%;
  grid-template-columns: repeat(2,1fr);
  gap:1rem;
}`

const GalleryList = (props) => {
    const array = props.array

  return (
    <Grid>
        {array.map(item=>{
            return(<GalleryThumb key={item.id} project={item}/>)
        })}
    </Grid>
  )
}

export default GalleryList