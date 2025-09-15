"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import styled from 'styled-components';
import 'swiper/css';
//import 'swiper/css/bundle'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwipeWrapper = styled.div`
width: 100%;
`
const SlideWrapper = styled.div`
width:100%;
background: ${props=>props.background || 'red'};
aspect-ratio:4/5 `

const FeaturedList = () => {
    return (
        <SwipeWrapper>
            <Swiper
                style={{ width: "100%", height: "100%" }}
                centeredSlides={true}
                spaceBetween={50}
                modules={[Pagination, Navigation]}
                navigation
                pagination={{ clickable: true }}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className='myswiper'
            >
                <SwiperSlide style={{ width: "100%", height: "100%" }}><SlideWrapper background='green'>sliide</SlideWrapper></SwiperSlide>
                <SwiperSlide style={{ width: "100%", height: "100%" }}><SlideWrapper background='red'>sliide</SlideWrapper></SwiperSlide>
                <SwiperSlide style={{ width: "100%", height: "100%" }}><SlideWrapper background='orange'>sliide</SlideWrapper></SwiperSlide>
                <SwiperSlide style={{ width: "100%", height: "100%" }}><SlideWrapper background='blue'>sliide</SlideWrapper></SwiperSlide>
            </Swiper>
        </SwipeWrapper>
    )
}

export default FeaturedList