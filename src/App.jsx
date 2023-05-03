import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";
import './Styles/App.css'
import './Styles/Form.css'
import programming from './assets/icono-de-programacion-informatica-simbolo-iconico-sobre-fondo-blanco-signo-de-tecnologia-concepto-vector-diseno-iconico-kh4yn8.jpg'
import react from './assets/5163578.png'
import lines from './assets/gráfico-de-líneas-negras-programación-diagrama-infográfico-circular-icono-aislado-sobre-fondo-blanco-vector-214916474.jpg'
import pro1 from './assets/FireShot Capture 001 - Fass Books - fassbook.netlify.app.png'
import pro2 from './assets/FireShot Capture 002 - FasstWebb - fasstwebb.netlify.app.png'
import pro3 from './assets/FireShot Capture 003 - Nikto - nikto.netlify.app.png'
import pro4 from './assets/FireShot Capture 004 - El Rincón Del Programador - el-rincon.netlify.app.png'
import pro5 from './assets/FireShot Capture 005 - los muebles Ferreyra - ferreyramueblesalpino.netlify.app.png'
import pro6 from './assets/FireShot Capture 006 - Instituto nro 31 - escuela31.netlify.app.png'
import pro7 from './assets/FireShot Capture 007 - Disteye - disteye.netlify.app.png'
import pro8 from './assets/FireShot Capture 008 - Calculadora - calculadora-fass.netlify.app.png'
import GmailSend from "./Components/Gmail";

function App() {

  const price = '$31.43';
  const price2 = '$20';
  const price3 = '$14';

  return (
    <>
      <div className="container">
        <div className="home">
          <nav>
            <a href="#Inicio">Inicio</a>
            <a href="#Service">Servicios</a>
            <a href="#Proyectos">Proyectos</a>
            <a href="#Precios">Precios</a>
          </nav>
          <br />
          <h3 className='Servicios de Desarrollador Web'>
            Servicio de Desarrollo Front-end
          </h3>
          <br />
          <form action="#Precios">
            <button>Precios</button>
          </form>
        </div>
        <br />
        <div className="about" id='Service'>
          <h2>Servicios</h2>
          <div>
            <div>
              <img src={programming} alt="Programming service" className="img-service" />
              <p>
                Front-End <br />
                HTML, CSS, JavaScript, Git, <br />
                Jquery, Gsap, API Rest Json,<br />
                Alpine.Js y Astro.build <br />
                <br />
                Lenguajes De Programacion<br />
                C# y Javascript
              </p>
            </div>
            <div>
              <img src={react} alt="React" className="img-service" />
              <p>
                React para crear interfacez <br />
                graficas y <strong>trabajar en equipo</strong> <br />
                usando useState, useRef, Formularios <br />
                y terminando de crear este sitio web <br />
                aprendere Redux para extenderme en este <br />
                aprendizaje y entrando en el desarrollo <br />
                de aplicaciones con React Native.
              </p>
            </div>
            <div>
              <img src={lines} alt="lines" className="img-service" />
              <p>
                Aprendí HTML y CSS, trabajé en <br />
                proyectos y usé React para crear <br />
                aplicaciones dinámicas. Además, <br />
                colaboré en proyectos y mejoré <br />
                habilidades en comunicación y <br />
                trabajo en equipo. Hoy en día. <br />
                sigo creciendo como desarrollador web.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="projects" id='Proyectos'>
          <h2>Proyectos individuales</h2>
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={pro1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pro2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pro3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pro4} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pro5} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pro6} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pro7} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={pro8} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="buy" id="Precios">
          <h2>Precios</h2>
          <ul className="pricing-list">
            <li>
              <h3>Paquete Básico</h3>
              <p>Sitio web de una sola página, diseño personalizado, optimización móvil y de búsqueda, correo electrónico personalizado y sin dominio pago. (.netlify.app)</p>
              <p className="price">{price3}</p>
            </li>
            <li>
              <h3>Paquete Estándar</h3>
              <p>Sitio web de hasta 5 páginas, diseño personalizado, optimización móvil y de búsqueda, correo electrónico personalizado, soporte técnico por un mes.</p>
              <p className="price">{price2}</p>
            </li>
            <li>
              <h3>Paquete Premium</h3>
              <p>Sitio web de hasta 10 páginas, diseño personalizado, optimización móvil y de búsqueda, correo electrónico personalizado, soporte técnico por tres meses, integración de redes sociales.</p>
              <p className="price">{price}</p>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3 className="Contact-text">Si estas interesado en mis <br /> servicios contactame via Gmail</h3>
          <form action="" id="form">
            <div className="mb-3">
              <label for="subject" className="form-label">Asunto</label>
              <input type="text" className="form-control" id="subject" placeholder="Asunto" name="subject" />
            </div>
            <br />
            <div className="mb-3">
              <label for="message" className="form-label">Mensaje</label>
              <textarea className="form-control" id="message" rows="3" name="message" placeholder="Click"></textarea>
            </div>
            <br />
            <button type="submit" className="btn btn-success">Enviar</button>
            <a href="" id="emailA"></a>
            <br />
            <h6 className="h6">Contacto Via Whatsapp</h6>
            <p className="number">+54 11 5852-5828</p>
          </form>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="social">
          <h2>Redes Sociales</h2>
          <hr />
          <div>
            <a href="https://github.com/doxxing-teb">Github</a>
            <a href="https://www.linkedin.com/in/agustin-ibarra-088207259/">Linkedin</a>
            <a href="https://www.instagram.com/agustin_ibarra33/">Instagram</a>
          </div>
          <br />
        </div>
      </div >
    </>
  );
}

export default App