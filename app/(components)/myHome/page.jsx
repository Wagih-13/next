"use client";
import React, { useEffect } from "react";
import SearchCountry from "../searchCountry/page";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "@/store/slice";

// export async function getData(country = "cairo") {
//   const res = await fetch(
//     `https://api.weatherapi.com/v1/forecast.json?key=f623af5d7ba94d1a992112233240101&q=${country}&days=3`
//   );
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default function myHome() {
  const data = useSelector((state) => state.wether.wetherList);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather("cairo"));
  }, []);

  // const data = await getData();
  let day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
  ];
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date();

  return (
    <>
      <div className="home py-5">
        <div className="container">
          <SearchCountry></SearchCountry>
          <div className="cards">
            <div className="card" id="card-1">
              <div className="date">
                <span>{day[date.getDay()]}</span>
                <span>{data?.forecast?.forecastday[0].date}</span>
              </div>
              <div className="info">
                <div className="location">{data?.location?.name}</div>
                <div className="degree">{data?.current?.temp_c + "°C"}</div>
                <img src={data?.current?.condition.icon} alt="" />
                <span className="custom">{data?.current?.condition.text}</span>
                <div className="icons">
                  <span>
                    <i class="fa-solid fa-compass"></i>
                    {data?.current?.wind_dir}
                  </span>
                  <span>
                    <i class="fa-solid fa-wind"></i>
                    {data?.current?.wind_kph + " Kph"}
                  </span>
                  <span>
                    <i class="fa-solid fa-umbrella"></i>
                    {data?.current?.humidity}
                  </span>
                </div>
              </div>
            </div>
            <div className="card-2 first">
              <div className="date">
                <span>{day[date.getDay() + 1]}</span>
              </div>
              <img
                src={data?.forecast?.forecastday[0].day.condition.icon}
                alt=""
              />
              <div className="greatTemp">
                {data?.forecast?.forecastday[0].day.maxtemp_c + "°C"}
              </div>
              <span className="minimumTemp">
                {data?.forecast?.forecastday[0].day.mintemp_c + "°C"}
              </span>
              <div className="custom">
                {data?.forecast?.forecastday[0].day.condition.text}
              </div>
            </div>
            <div className="card-2 last">
              <div className="date">
                <span>{day[date.getDay() + 2]}</span>
              </div>
              <img
                src={data?.forecast?.forecastday[1].day.condition.icon}
                alt=""
              />
              <div className="greatTemp">
                {data?.forecast?.forecastday[1].day.maxtemp_c + "°C"}
              </div>
              <span className="minimumTemp">
                {data?.forecast?.forecastday[1].day.mintemp_c + "°C"}
              </span>
              <div className="custom">
                {data?.forecast?.forecastday[1].day.condition.text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
