import React from "react";
import {
  Card,
  Container,
  CardBody,
  CardText,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import "../styles/Start.css";

const Start = () => {
  const rawData = [
    {
      id: 1,
      title: "Book a Free 30-min Video Consultation",
      body: "We will discuss all your symptoms and get a good understanding of why certain things are happening in your body.",
      btnName: "Book Your Free Consultation",
      btnUrl: "",
    },
    {
      id: 2,
      title: "Schedule Your Initial Evaluation",
      body: "We’ll dive deep into an assessment to understand where you are and the root cause of your symptoms",
      btnName: "Schedule Your Initial Evaluation",
      btnUrl: "",
    },
    {
      id: 3,
      title: "Book Follow-up Sessions",
      body: "Continue with simple exercises, tailored to your needs. The sessions are recorded for your reference.",
      btnName: "Book Your Follow-Up",
      btnUrl: "",
    },
  ];
  return (
    <React.Fragment>
      <div className="start_wrapper">
        <Container>
          <div className="start_h1">Here’s How You Can Start</div>
          <Row>
            {rawData?.map((item, index) => (
              <Col xs={12} sm={12} md={12} lg={4} className="start_align">
                <Card className="h-100 mt-3 card-override">
                  <CardBody>
                    <CardTitle tag="h5" className="start_title">
                      {item?.title}
                    </CardTitle>
                    <CardText className="start_text">{item?.body}</CardText>
                  </CardBody>
                  <CardFooter className="bg-transparent border-0 p-3">
                    <button className="align-self-end start_btn">
                      {item?.btnName} <span>{">"}</span>
                    </button>
                  </CardFooter>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Start;
