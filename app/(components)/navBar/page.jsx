"use client";
import React from "react";
import Image from "next/image";
import "./navModule.css";
import logo from "../../assets/images/logo.png";
import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <div className="myContainer">
          <div className="logo d-flex gap-3">
            <Image alt="logo" src={logo} />
            <h1>weather</h1>
          </div>
        </div>
      </nav>
    </div>
  );
}
