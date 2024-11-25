import React, { useState, useEffect } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    Row,
    Col,
    Input,
    Form,
    FormGroup,
    Label,
    Button,
} from "reactstrap";
import "../styles/FirstTimePopup.css";

const FirstTimePopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check if the user has visited before
        const hasVisited = localStorage.getItem("hasVisited");
        if (!hasVisited) {
            setIsOpen(true);
        }
    }, []);

    const handleClosePopup = () => {
        localStorage.setItem("hasVisited", "true");
        setIsOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log("Form submitted!");
        localStorage.setItem("hasVisited", "true");
        setIsOpen(false);
    };

    return (
        <div>
            <Modal isOpen={isOpen} centered>
                <ModalHeader
                    toggle={handleClosePopup}
                    className="border-0 popup_header"
                >
                    Empower Your Healing Journey
                    <div className="popup_p">
                        Sign up for the newsletter below to gain deeper insights into your
                        body’s journey to wellness.
                    </div>
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="fullName">Full Name</Label>
                                    <Input
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Enter your name"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        type="email"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={12}>
                                <Button color="dark" type="submit" block>
                                    Stay in Touch
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
};

export default FirstTimePopup;
