import React from "react";
import { Col, Form, Input, Row } from "reactstrap";
import "../styles/HomeWelcome.css";

const HomeWelcome = () => {
    return (
        <React.Fragment>
            <div className="home_welcome_wrapper">
                <div className="home_welcome_container">
                    <div className="home_welcome_h1">
                        Welcome! I’m so glad you’re here.
                    </div>
                    <div className="home_welcome_p">
                        If you’re ready to embrace a holistic approach by listening to your
                        body’s cues and exploring the root cause of your pain, you’re in the
                        right place. Together, we’ll uncover the movements that nurture your
                        healing and guide you towards a pain-free life
                    </div>
                    <div className="home_welcome_p">
                        Healing starts with understanding what’s happening in your body.
                    </div>
                    <div className="home_welcome_p">
                        Sign up for the newsletter below to gain deeper insights into your
                        body’s journey to wellness.
                    </div>
                    <Form>
                        <Row>
                            <Col xs={12} sm={12} md={9} lg={9}>
                                <Input
                                    id="exampleEmail"
                                    name="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    className="home_welcome_input"
                                />
                            </Col>
                            <Col xs={12} sm={12} md={3} lg={3}>
                                <button className="home_welcome_btn">Stay in Touch</button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HomeWelcome;
