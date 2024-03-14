"use client";
import { getWeather } from "@/store/slice";
import React from "react";
import { useDispatch } from "react-redux";

export default function SearchCountry() {
  const dispatch = useDispatch();

  return (
    <>
      <div class="input-group mb-3 ">
        <input
          type="text"
          class="form-control searchInput"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={(eI) => {
            dispatch(getWeather(eI.target.value));
          }}
        />
        <button
          class="btn btn-outline-secondary btn-search"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
    </>
  );
}
