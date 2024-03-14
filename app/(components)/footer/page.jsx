import React from "react";
import "./footerModule.css";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>
      <ul class="social-icon">
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="https://www.facebook.com/ahmed.wagih.18847?mibextid=LQQJ4d"
            target="_blank"
          >
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a class="social-icon__link" href="#" target="_blank">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="http://www.linkedin.com/in/ahmed-wagih-2973242b7"
            target="_blank"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="https://www.instagram.com/ahme.dwagih?igsh=ajk3NTJsZjV1aHBy&utm_source=qr"
            target="_blank"
          >
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>

      <p>&copy;2024 Ahmed Wagih | All Rights Reserved</p>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </footer>
  );
}
