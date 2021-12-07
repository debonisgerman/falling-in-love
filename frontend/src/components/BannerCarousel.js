import React, { useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { isMobile, isTablet, isBrowser } from "react-device-detect";
import Loader from "./Loader";
import Message from "./Message";
import { listBanners } from "../actions/bannerActions";

const BannerCarousel = () => {
  const dispatch = useDispatch();
  const bannerList = useSelector((state) => state.bannerList);
  const { loading, error, banners } = bannerList;
  useEffect(() => {
    dispatch(listBanners());
  }, [dispatch]);
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" className="banner-cr" id="bannerCarousel">
      {banners
        .filter((banner) => banner.show)
        .map((banner) => (
          <Carousel.Item key={banner._id}>
            {isMobile ? (
              <Image src={banner.imageMobile} alt={banner._id} fluid="true" />
            ) : isTablet ? (
              <Image src={banner.imageTablet} alt={banner._id} fluid="true" />
            ) : isBrowser ? (
              <Image src={banner.imageDesktop} alt={banner._id} fluid="true" />
            ) : (
              <Image src={banner.imageDesktop} alt={banner._id} fluid="true" />
            )}
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default BannerCarousel;
