import React from 'react';
import mainLogo from '../assets/images/icon/mainLogo1.png';

const Contact = () => {
  return (
    <div className="main-bg">
      <div className="d-flex">
        <div
          className="main-text"
          style={{
            marginTop: '50px',
            marginLeft: '80px',
          }}>
          <span
            style={{
              fontSize: '35px',
              fontWeight: '700',
            }}>
            Hubungi Kami!
          </span>

          <p>
            Anda dapat menghubungi kami melalui beberapa cara, <br />
            seperti melalui telepon, email, atau sosial media.
          </p>

          <div className="Location d-flex gap-2">
            <i className="bi bi-geo-alt-fill" style={{ color: 'rgb(113, 84, 241)' }}></i>

            <p>Kiyay Koki Lampung, Pringsewu, Bandar Lampung</p>
          </div>

          <div className="phoneNumber d-flex gap-2">
            <i className="bi bi-telephone-fill" style={{ color: 'rgb(113, 84, 241)' }}></i>

            <p>0821-8473-4997</p>
          </div>

          <div className="mail d-flex gap-2">
            <i className="bi bi-envelope-fill" style={{ color: 'rgb(113, 84, 241)' }}></i>

            <p>KiyayKoki@gmail.com</p>
          </div>

          <div className="mail d-flex gap-2">
            <i className="bi bi-tiktok" style={{ color: 'rgb(113, 84, 241)' }}></i>

            <p>Kiyay Koki Lampung</p>
          </div>

          <div className="mail d-flex gap-2">
            <i className="bi bi-instagram" style={{ color: 'rgb(113, 84, 241)' }}></i>

            <p>@kiyay_koki_lampung</p>
          </div>
        </div>

        <div className="googleMaps mt-5">
          <div className="maps-text d-flex gap-2">
            <span
              style={{
                marginLeft: '200px',
                fontSize: '35px',
                fontWeight: '700',
              }}>
              Maps
            </span>

            <i className="bi bi-geo-alt-fill" style={{ marginTop: '13px', fontSize: '20px' }}></i>
          </div>

          <iframe
            title="Google-maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63554.71971716687!2d104.9607980924525!3d-5.391047928710606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e472deb3ebe4de3%3A0xafad81a1bec9c43a!2sShowroom%20Bambang%20Motor!5e0!3m2!1sid!2sid!4v1734168752944!5m2!1sid!2sid"
            width="600"
            height="300"
            style={{ marginLeft: '200px', border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div className="d-flex" style={{ marginTop: '100px' }}>
        <img
          src={mainLogo}
          alt="main alt"
          style={{
            width: '40px',
            marginLeft: '1000px',
          }}
        />

        <h3 className="fw-bold">KIYAY KOKI</h3>
      </div>
    </div>
  );
};

export default Contact;
