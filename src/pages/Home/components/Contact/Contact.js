import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import TitleSection from "../TitleSection/TitleSection";
import letter from "../../../../assets/images/envelope.png";
import "./Contact.scss";

export default function Contact() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <section className='contact'>
      <div className='container'>
        <TitleSection title='contact' urlIcon={letter} />
        <div className='contact__wrap'>
          <div className='form'>
            <div className='form__item'>
              <input type='text' name='name' />
              <label className='item__desc' htmlFor='name'>
                Name
              </label>
            </div>
            <div className='form__item'>
              <label className='item__desc' htmlFor='subject'>
                Subject
              </label>
              <input type='text' name='subject' />
            </div>
            <div className='form__item'>
              <label className='item__desc' htmlFor='email'>
                Email
              </label>
              <input type='email' name='email' />
            </div>
            <div className='form__item'>
              <label className='item__desc' htmlFor='message'>
                Message
              </label>
              <textarea className='item__message' type='text' name='message' />
            </div>
            <button type='button' className='form__button'>
              send
            </button>
          </div>
          <div className='map'>
            <GoogleMap
              zoom={10}
              center={{ lat: 10.782282, lng: 106.746741 }}
              mapContainerClassName='google__map'
            >
              <Marker position={{ lat: 10.78228, lng: 106.746741 }} />
            </GoogleMap>
          </div>
        </div>
      </div>
    </section>
  );
}
