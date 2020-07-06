import React from "react";
import Clock from "react-live-clock";

const DateTimeBox = () => {
    return (
        <div className="time-box">
            <span>
                <Clock
                    format={"HH:mm A "}
                    ticking={true}
                    timezone={"Asia/Colombo"}
                />
                Today
                <Clock
                    format={" D MMMM, YYYY"}
                    ticking={true}
                    timezone={"Asia/Colombo"}
                />
            </span>
        </div>
    );
};

export default DateTimeBox;
