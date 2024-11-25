import React from "react";
import "../styles/Transformation.css";
import { Row, Col, Container, Card, CardBody } from "reactstrap";

const Transformation = () => {
    return (
        <React.Fragment>
            <div className="transformation_wrapper">
                <div className="transformation_container">
                    <div className="transformation_h1">
                        Real Stories of Transformation
                    </div>
                    <div className="transformation_p">
                        Discover how Payal’s holistic approach has empowered clients to
                        overcome chronic pain, restore mobility, and regain confidence in
                        their bodies. These testimonials highlight the journey from
                        temporary relief to lasting recovery, where mindful movement and
                        targeted exercises lead to profound change.
                    </div>
                </div>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={6} className="mt-3">
                            <Card className="bg-transparent">
                                <CardBody>
                                    <div className="transformation_card_txt">
                                        I had been dealing with a little back and hip pain for a few
                                        years, when, around December of 2020 I woke up with a pain
                                        so severe in my right hip, that I could barely walk or stand
                                        for longer than a few minutes at a time. This severely
                                        affected my ability to be mobile and pain-free while at work
                                        and in my personal life, as an artist, musician and someone
                                        who likes to be able to be active.
                                        <br></br>I spent around two years going to a gym almost
                                        daily, stretching, doing mat workouts, yoga, swimming and
                                        anything I could to make the pain bearable, always giving me
                                        a few hours of semi-relief at a time. I was diagnosed with
                                        osteo-arthiritis in my hips, which lead to more severe
                                        undiagnosed symptoms in my spine, shoulders and neck.
                                        <br></br>I began working with Payal at the end of
                                        2023/beginning of 2024. With her observations and guidance,
                                        we narrowed down exactly what my body needed to move me out
                                        of the bandaid work I had been doing into actual recovery.
                                        In just a few months, and through very manageable exercises,
                                        I have not only reduced my pain to almost non-existent and
                                        recovered much of my balance and strength, but I am also way
                                        more aware of my body and what it needs. The last few months
                                        have pushed me to a place where I can see myself being more
                                        fit and healthy in my 40's than I was in my 30's. I can see
                                        myself working on myself more appropriately, efficiently and
                                        continuing to focus on stability, balance and true strength.
                                    </div>
                                    <ul className="transformation_card_p">
                                        <li>Benjamin Topf</li>
                                    </ul>
                                </CardBody>
                            </Card>

                            <Card className="mt-3 bg-transparent">
                                <CardBody>
                                    <div className="transformation_card_txt">
                                        Im am beyond amazed at how good i feel, it's almost too good
                                        to be true! Piael is so sweet and so stern in all the right
                                        ways! 10 out of 10 go see her and her team!
                                    </div>
                                    <ul className="transformation_card_p">
                                        <li>Dana Martinez</li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={6} className="mt-3">
                            <Card className="bg-transparent">
                                <CardBody>
                                    <div className="transformation_card_txt">
                                        I was struggling with pain in my Achilles tendons and the
                                        soles of my feet, which was due to limited mobility.
                                        Stretching and pain medication provided only temporary
                                        relief. After starting to work Payal, my pain has reduced
                                        significantly. The exercises and breathing techniques have
                                        restored my mobility, allowing me to become active again.
                                        I’m now looking forward to more hiking trips with my family.
                                    </div>
                                    <ul className="transformation_card_p">
                                        <li>Mai Tran</li>
                                    </ul>
                                </CardBody>
                            </Card>

                            <Card className="mt-3 bg-transparent">
                                <CardBody>
                                    <div className="transformation_card_txt">
                                        I've never experienced PT quite like I have with Payal
                                        before. She treats the entire body, not just the symptoms
                                        you walk in with. She emphasizes how breathing incorrectly
                                        can affect how the body functions and her exercises have
                                        made a dramatic improvement in my life/well being. You'll be
                                        lucky if you ever find a PT like Payal.
                                    </div>
                                    <ul className="transformation_card_p">
                                        <li>gail gullickson</li>
                                    </ul>
                                </CardBody>
                            </Card>

                            <Card className="mt-3 bg-transparent">
                                <CardBody>
                                    <div className="transformation_card_txt">
                                        Payal has really worked with me well. My palpitation on my
                                        eye has really reduced barely even noticeable.
                                    </div>
                                    <ul className="transformation_card_p">
                                        <li>Erika Echeverria</li>
                                    </ul>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Transformation;
