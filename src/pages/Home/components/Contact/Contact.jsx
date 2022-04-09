import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { envelope } from "assets/images";
import "./Contact.scss";
import { SectionTitle } from "components";
import ContactForm from "./ContactForm";

export default function Contact() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle title="Contact" icon={envelope} />
        <div className="contact__wrap">
          <ContactForm />
          <div className="map">
            <GoogleMap
              zoom={10}
              center={{ lat: 10.782282, lng: 106.746741 }}
              mapContainerClassName="google__map"
            >
              <Marker position={{ lat: 10.78228, lng: 106.746741 }} />
            </GoogleMap>
          </div>
        </div>
      </div>
    </section>
  );
}
