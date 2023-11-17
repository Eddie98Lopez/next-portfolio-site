import React from "react";
import ThumbContainer, { ImageContainer } from "./GalleryThumb.styles";
import Link from "next/link";
import Image from "next/image";

const GalleryThumb = (props) => {
  const { cover_image, title, id, library } = props.project;

  return (
    <Link
      href={{
        pathname: "/portfolio/[id]",
        query: { id: id },
      }}
    >
      <ThumbContainer duration={Math.random() * 2}>
        <ImageContainer>
          <Image
            layout="fill"
            src={cover_image}
            alt={title}
            quality={30}
          />
        </ImageContainer>

        <div className="info">
          <div>
            <h2>{title}</h2>
            <h3>{library}</h3>
          </div>
        </div>
      </ThumbContainer>
    </Link>
  );
};

export default GalleryThumb;
