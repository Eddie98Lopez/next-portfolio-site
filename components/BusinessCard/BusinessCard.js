import React from 'react'
import { VCardButton, BizCardWrap } from './BusinessCard.styles'
import SocialList from '../SocialMedia/SocialList'

const vCardHREF = `https://ldrjmzbrinwdylthbzry.supabase.co/storage/v1/object/public/images/Eduardo%20Lopez.vcf?t=2023-10-30T04%3A45%3A44.425Z`

const BusinessCard = () => {
  return (
    <BizCardWrap>
        <VCardButton href={vCardHREF}>Save Contact</VCardButton>
        <SocialList linkHeight='5rem'/>
    </BizCardWrap>
  )
}

export default BusinessCard