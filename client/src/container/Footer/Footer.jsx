import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { GoogleMap, LoadScript, InfoWindowF } from '@react-google-maps/api';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const mapConfig = {
  defaultCenter: { lat: 52.5487429, lng: 13.3596885 },
  defaultZoom: 15,
  mapOptions: {
    disableDefaultUI: true,
    zoomControl: true
  }
};

const Footer = () => (
  <div className="app__footer section__padding" id="mail">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links-map">
        <h1 className="app__footer-headtext">Unsere Location</h1>
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerClassName="google-map-container"
            center={mapConfig.defaultCenter}
            zoom={mapConfig.defaultZoom}
            options={mapConfig.mapOptions}
          >
            <InfoWindowF
              position={mapConfig.defaultCenter}
              options={{ closeBoxURL: '' }}
            >
              <div style={{ padding: '10px' }}>
                <h3>MOMO&apos;s Pizza</h3>
                <p>Wir sind hier!</p>
              </div>
            </InfoWindowF>
          </GoogleMap>
        </LoadScript>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer_logo" />
        <p className="p__opensans">&quot;Eine Pizza die deine Sinne betäubt.&quot;</p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Öffnungszeiten</h1>
        <p className="p__opensans">Montag-Freitag:</p>
        <p className="p__opensans">10 - 21 Uhr</p>
        <p className="p__opensans">Samstag-Sonntag:</p>
        <p className="p__opensans">10 - 23 Uhr</p>
        <h1 className="app__footer-headtext">Kontakt</h1>
        <p className="p__opensans">Müllerstr. 123, 13347, Berlin</p>
        <p className="p__opensans">+49 12312312312</p>
        <p className="p__opensans">+49 12312312312</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">&#169; Copyright 2025 MOMO&apos;s Pizza | All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
