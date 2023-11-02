import React from "react";
import { VCardButton, BizCardWrap,ProfilePicWrap, NameBadge, Card } from "./BusinessCard.styles";
import SocialList from "../SocialMedia/SocialList";
import { bizCardSocials } from "../SocialMedia/SocialsArray";


const vCardHREF = `https://ldrjmzbrinwdylthbzry.supabase.co/storage/v1/object/public/images/Eduardo%20Lopez.vcf?t=2023-10-30T04%3A45%3A44.425Z`;

const BusinessCard = () => {
  
  return (
    <BizCardWrap>
      <Card>
      <ProfilePicWrap className={"bizCardImg"}>
        <img src="/aboutMe.jpg" alt="Picture of the author" />
      </ProfilePicWrap >

      <NameBadge>
      <h1>Eduardo Lopez</h1>
      <h2>Graphic Designer | Web Developer</h2>
      </NameBadge>

      <VCardButton href={vCardHREF}>Save Contact</VCardButton>

      <SocialList array = {bizCardSocials} showType={true}  linkHeight='5rem'/>



      </Card>
    </BizCardWrap>
  );
};

export default BusinessCard;
