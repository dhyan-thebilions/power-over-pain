import React from "react";
import { Container } from "reactstrap";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
    const rwaData = [
        { id: 1, image: "footer_img_one.png" },
        { id: 2, image: "footer_img_two.png" },
        { id: 3, image: "footer_img_three.png" },
        { id: 4, image: "footer_img_four.png" },
        { id: 5, image: "footer_img_five.png" },
        { id: 6, image: "footer_img_six.png" },
    ];

    return (
        <div className="footer_wrapper">
            <Container>
                <div className="footer_content">
                    {/* Left Section */}
                    <div className="footer_left">
                        <img
                            alt="logo"
                            src="/assets/company-logo.svg"
                            className="footer_logo"
                        />
                    </div>

                    {/* Right Section */}
                    <div className="footer_right">
                        <div className="footer_social">
                            <span>@instagram</span>
                            <div className="footer_icons">
                                <FaInstagram size={20} className="icon" />
                                <FaFacebookF size={20} className="icon" />
                                <FaLinkedinIn size={20} className="icon" />
                            </div>
                        </div>
                        <div className="footer_images">
                            {rwaData.map((item, index) => (
                                <img
                                    key={item.id}
                                    alt={index + 1}
                                    src={`/assets/${item.image}`}
                                    className="footer_img"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
