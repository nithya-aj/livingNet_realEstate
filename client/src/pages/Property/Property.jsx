import React from "react";
import "./Property.css";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty } from "../../utils/api";
import { AiFillHeart, AiTwotoneCar } from "react-icons/ai";
import { FaShower } from "react-icons/fa";
import { MdMeetingRoom, MdLocationPin } from "react-icons/md";
import { PuffLoader } from "react-spinners";
import Map from "../../components/Map/Map";

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const { data, isError, isLoading } = useQuery(["resd", id], () =>
    getProperty(id)
  );
  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>while loading...</span>
        </div>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader
            height="80"
            width="80"
            radius={1}
            color="#4066ff"
            aria-label="puff-loading"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        <div className="like">
          <AiFillHeart size={24} color="white" />
        </div>
        <img src={data?.image} alt="home-image" />
        <div className="flexCenter property-details">
          {/* left */}
          <div className="flexColStart left">
            {/* head  */}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                ${data?.price}
              </span>
            </div>
            {/* facilities */}
            <div className="flexStart facilities">
              {/* bathroom */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span> {data?.facilities?.bathrooms} Bathrooms </span>
              </div>
              {/* parking */}
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <span> {data?.facilities?.parkings} Parking </span>
              </div>
              {/* bedrooms */}
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span> {data?.facilities?.bedrooms} Bedrooms </span>
              </div>
            </div>

            {/* description */}
            <span className="secondaryText" style={{ textAlign: "justify " }}>
              {data?.description}
            </span>

            {/* address */}
            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {data?.address}
                {data?.city}
                {data?.country}
              </span>
            </div>

            {/* booking */}
            <button className="button">Book your visit</button>
          </div>
          {/* right */}
          <div className="map">
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
