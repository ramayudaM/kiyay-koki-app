import React from "react";
import "../App.css"

const Profile = () => {
    return (
        <div className="main-bg">

        <div className="profile-box">

            <div className="d-flex">
            <div className="profile-pic" style={{
                width: "80px",
                height: "80px",
                background: "white",
                borderRadius: "100px",
                marginLeft: "50px",
                marginTop: "20px"
            }}>
                
                    <i className="bi bi-person-fill" 
                    style={{ 
                        fontSize: "50px", 
                        marginLeft: "14px" }} />

            </div>      
            <span style={{
                marginTop: "48px", 
                marginLeft: "10px",
                fontWeight: "700"}}>0819-3429-8038</span>
            </div>

            <div className="text" style={{marginTop: "25px"}}>
            <span 
            style={{
                fontSize: "20px", 
                fontWeight: "700",
                marginLeft: "50px"}}>Daftar Alamat</span>
            
            <button 
            style={{
                fontSize: "20px", 
                fontWeight: "100",
                marginLeft: "820px",
                border: "none"}}>Tambah Alamat</button>
            </div>

            <div className="address-box"
            style={{
                background: "rgba(171, 170, 233, 0.69)",
                borderRadius: "10px",
                width: "1100px",
                minHeight: "200px",
                marginLeft: "50px",
                marginTop: "20px"
            }}>
                <span 
                style={{ 
                    fontWeight: "bold",
                    marginLeft: "10px" }}>Rumah</span>
                
                <button
                style={{
                    borderRadius: "0px",
                    background: "none",
                    marginTop: "10px",
                    marginLeft: "950px" }}>Edit</button>

                <p
                style={{ 
                    fontWeight: "800",
                    marginLeft: "10px" }}>Putra Oli Samping</p>
                <span
                style={{ 
                    fontWeight: "100",
                    marginLeft: "10px" }}>0819-3429-8038</span>
                <p
                style={{ 
                    fontWeight: "100",
                    marginLeft: "10px" }}>Jln Kebangsaan, gang merak No.26, Kedaton, Kota BandarLampung, Lampung.
(rumah warna merah, tingkat dua, ada gambar ultramennya) </p>

            </div>

        </div>
            

        </div>
    )
}

export default Profile;