import React from "react";
import { VCardButton, BizCardWrap } from "./BusinessCard.styles";
import SocialList from "../SocialMedia/SocialList";
import SocialLink from "../SocialMedia/SocialLink";
import { ImageContainer } from "../Gallery/GalleryThumb.styles";
import Image from "next/image";

const vCardHREF = `https://ldrjmzbrinwdylthbzry.supabase.co/storage/v1/object/public/images/Eduardo%20Lopez.vcf?t=2023-10-30T04%3A45%3A44.425Z`;

const BusinessCard = () => {
  return (
    <BizCardWrap>
      <div className={"bizCardImg"}>
        <img src="/aboutMe.jpg" alt="Picture of the author" />
      </div>

      <h1>Eduardo Lopez</h1>
      <h2>Graphic Designer | Web Developer</h2>

      <VCardButton href={vCardHREF}>Save Contact</VCardButton>

      <a href={"tel:+5593605316"}>Phone</a>
      <a href="mailto:eduardo@lopezed.com">Email</a>
      <a href="http://www.lopezed.com"> Website </a>

      <SocialList linkHeight="4rem" />
    </BizCardWrap>
  );
};

export default BusinessCard;
