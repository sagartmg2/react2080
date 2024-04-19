import React from "react";
import Banner1 from "../assets/banner-1.png";
import Header from "../components/Header";
import Banner from "../components/home/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let banners = [
    {
      background: "bg-banner-1",
      label: "Best Furniture For Your Castle....",
      heading: " New Furniture Collection Trends in 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      redirectUrl: "/blogs",
    },
    {
      background: "bg-banner-2",
      label: "Second Furniture For Your Castle....",
      heading: " Second Furniture Collection Trends in 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      redirectUrl: "/offers",
    },
    {
      background: "bg-banner-3",
      label: "Third Furniture For Your Castle....",
      heading: " Third Furniture Collection Trends in 2020",
      description:
        "Third ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      redirectUrl: "/products",
    },
  ];

  return (
    <>
      <Header />
      <Slider {...settings}>
        {banners.map((el) => {
          return (
            <Banner
              background={el.background}
              label={el.label}
              heading={el.heading}
              description={el.description}
              redirectUrl={el.redirectUrl}
            />
          );
        })}
        {/* <Banner background={"bg-banner-1"} />
        <Banner background={"bg-banner-2"} />
        <Banner background={"bg-banner-3"} /> */}
      </Slider>

      <div className="">
        <div
          id="box"
          className="mt-20 h-20 w-20 border-black bg-purple-50  sm:bg-purple-300 md:bg-red-500"
        ></div>

        {/* ctrl + shift + \ */}
        <p className="mb-8 font-serif">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab officiis
          odit quia quos adipisci enim qui blanditiis dolore maiores
          voluptatibus vitae, ea reiciendis id! Laboriosam provident numquam
          sint nihil reiciendis?
        </p>
        <p className="mb-8 font-sans">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab officiis
          odit quia quos adipisci enim qui blanditiis dolore maiores
          voluptatibus vitae, ea reiciendis id! Laboriosam provident numquam
          sint nihil reiciendis?
        </p>
        <p className="mb-8 font-mono">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab officiis
          odit quia quos adipisci enim qui blanditiis dolore maiores
          voluptatibus vitae, ea reiciendis id! Laboriosam provident numquam
          sint nihil reiciendis?
        </p>
        <p className="mb-8 font-josefin">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab officiis
          odit quia quos adipisci enim qui blanditiis dolore maiores
          voluptatibus vitae, ea reiciendis id! Laboriosam provident numquam
          sint nihil reiciendis?
        </p>

        <p className="mb-8 w-[150px] font-lato ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab officiis
          odit quia quos adipisci enim qui blanditiis dolore maiores
          voluptatibus vitae, ea reiciendis id! Laboriosam provident numquam
          sint nihil reiciendis?
        </p>
      </div>
    </>
  );
}
