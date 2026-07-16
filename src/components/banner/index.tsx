"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

const bannersData = [
  {
    name: "banner1",
    url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&auto=format&fit=crop&q=80",
  },
  {
    name: "banner2",
    url: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1600&auto=format&fit=crop&q=80",
  },
  {
    name: "banner3",
    url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&auto=format&fit=crop&q=80",
  },
  {
    name: "banner4",
    url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600&auto=format&fit=crop&q=80",
  },
  {
    name: "banner5",
    url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&auto=format&fit=crop&q=80",
  },
];

const Banner = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {bannersData.map((b, idx) => (
        <SwiperSlide key={idx}>
          <div className="relative">
            <Image
              src={b.url}
              alt="image"
              width={1000}
              height={800}
              className="w-full"
            />
            <h2 className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 text-sm sm:text-4xl font-bold text-white w-full text-center">
              Discover Your Perfect Product
            </h2>
            <Link
              href={"/all-products"}
              className="btn absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              Browse Now
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;