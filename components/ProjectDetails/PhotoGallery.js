import React from 'react'
import styled from 'styled-components'
import { ImageContainer } from '../Gallery/ThumbContainer';
import Image from 'next/image'

const ProjectImage = styled(ImageContainer)`
  pointer-events: none;
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

const PhotoGallery = ({images,...props}) => {

  return (
    <Grid>
    {images.map((item) => (
      <ProjectImage key={item.index}>
        <Image
          priority={true}
          layout="fill"
          src={item.href}
          alt={'project iamge'}
        />
      </ProjectImage>
    ))}
  </Grid>
  )
}

export default PhotoGallery