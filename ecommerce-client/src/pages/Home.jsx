import React from "react";
import Banner1 from "../assets/banner-1.png";
import Header from "../components/Header";
import Banner from "../components/home/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TrendingProduct from "../components/home/TrendingProduct";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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

 let latestProducts = [
    {
      image: "/assets/latestProduct1.png",
      title: "Comfort Handy Craft",
      currentPrice: "$200",
      previousPrice: "$250",
    },
    {
      image: "/assets/latestProduct2.png",
      title: "Comfort Handy Craft 2",
      currentPrice: "$200",
      previousPrice: "$250",
    },
    {
      image: "/assets/latestProduct3.png",
      title: "Comfort Handy Craft 3",
      currentPrice: "$200",
      previousPrice: "$250",
    },
    {
      image: "/assets/latestProduct4.png",
      title: "Comfort Handy Craft 4",
      currentPrice: "$200",
      previousPrice: "$250",
    },
    {
      image: "/assets/latestProduct5.png",
      title: "Comfort Handy Craft 5",
      currentPrice: "$200",
      previousPrice: "$250",
    },
    {
      image: "/assets/latestProduct6.png",
      title: "Comfort Handy Craft 6",
      currentPrice: "$200",
      previousPrice: "$250",
    },
  ];

  return (
    <>
      {/* <div className="absolute box bg-orange-200 left-6 top-3 z-10"></div>
    <div className="absolute box bg-black z-0  "></div>
    <hr /> */}

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

       <div className="container mb-14 mt-16">
          <p className="text-center text-[23px] font-bold text-[#151875] md:text-[42px]">
            Latest Products
          </p>
          <div className="mt-5 flex justify-center gap-2 text-sm md:gap-4 md:text-[18px]">
            <a href="" className="hover:text-secondary">
              New Arrival
            </a>
            <a href="" className="hover:text-secondary">
              Best Seller
            </a>
            <a href="" className="hover:text-secondary">
              Featured
            </a>
            <a href="" className="hover:text-secondary">
              Special Offer
            </a>
          </div>
          <div className="mt-[32px] grid justify-items-center gap-4 sm:grid-cols-2 md:mt-[58px] md:grid-cols-3">
            {latestProducts.map((el) => {
              return (
                <TrendingProduct
                  image={el.image}
                  title={el.title}
                  currentPrice={el.currentPrice}
                  previousPrice={el.previousPrice}
                />
              );
            })}
          </div>
        </div>
    </>
  );
}
