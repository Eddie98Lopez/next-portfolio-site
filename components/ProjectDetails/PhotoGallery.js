import React from 'react'
import styled from 'styled-components'
import { ImageContainer } from '../Gallery/GalleryThumb.styles';
import Image from 'next/image'
import { useProject, useDispatch, useModal } from './ProjectProvider';

const ProjectImage = styled(ImageContainer)`
&:hover{
  & img{
    transform: none;
    transition:none;
    opacity:1;
    filter:blur(0px)
  }
}


`;

const Grid = styled.div`
  box-sizing: border-box;
  display: grid;
  width: 100%;
  margin:auto;
  gap: 0.5rem;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;

  & div {
    width: 100%;
    height: auto;
  }

/*   & :nth-child(3n + 1) {
    &:before {
      padding-top: 85%;
    }
    grid-column: 1/3;
  } */
  & :nth-child(1) {
    &:before {
      padding-top: 80%;
    }
    grid-column: 1/3;
  }
`;

const PhotoGallery = (props) => {
    const {images,title} = useProject()
    const dispatch = useDispatch()
    const modal = useModal()
  
    const toggleModal =  (payload) => {
      console.log('clicked image')
      dispatch({type:'TOGGLE_MODAL',payload})
      } 
    

  return (
    <Grid>
    {images.map((item) => (
      <ProjectImage key={item.index} onClick={()=>toggleModal(item.index-1)}>
        <Image
          priority={true}
          layout="fill"
          src={item.href}
          alt={`${title} photo ${images.indexOf(item)}`}
        />
      </ProjectImage>
    ))}
  </Grid>
  )
}

export default PhotoGallery