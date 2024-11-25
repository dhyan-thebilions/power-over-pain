import React, { useState } from "react";
import { Spinner } from "reactstrap";

const BookSession = () => {
    const [loading, setLoading] = useState(true);
    const calendarURL = process.env.REACT_APP_CALENDAR_URL

    // Function to handle iframe load event
    const handleIframeLoad = () => {
        setLoading(false);
    };

    return (
        <React.Fragment>
            {loading && (
                <div className="d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                    <Spinner color="secondary" />
                </div>
            )}
            {/* Show loading until iframe is loaded */}
            <iframe
                src={calendarURL}
                style={{ border: "0", width: "100%", height: "1200px" }}
                frameBorder="0"
                title="Google Calendar Appointment Scheduling"
                onLoad={handleIframeLoad}
            ></iframe>
        </React.Fragment>
    );
};

export default BookSession;
