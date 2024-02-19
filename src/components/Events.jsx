import "./Eventpage.css";
import { Link } from "react-router-dom";
import eventImage from "../assets/indigenous.jpg";

const Events = ({ user }) => {
  return (
    <div className="eventPageDiv">
      <div className="event">
        <h3 className="eventsHeading"> Events</h3>
        <section>
          <img
            className="eventImage"
            src={eventImage}
            alt="Indigenous perspectives - an exhibition"
          ></img>
          <strong>
            NOW OPEN ! Indigenous Perspectives, a new multimedia exhibition
            featuring reflections from indigenous tribes, runs through Apr.
            17,2024
          </strong>
          <ul>
            <li>Time: 10:00AM - 1:00PM</li>
            <li>Location: Meeting Room</li>
            <li>Audience: Adults Elementary (Grade K-5) All Ages </li>
            <li>
              Registration Type: In-Person Registration (Contact front desk)
            </li>
          </ul>
        </section>
      </div>
      <section>
        <h5>
          <strong>Prepare for Your Visit</strong> Get a Library card! If you are
          not a member yet, begin the registration process online at our{" "}
          <Link to="/register">Registration</Link>
          &nbsp;page.
        </h5>

        <h5>
          <strong>Archives Research Room </strong>Open 9:00 AM to 1:00 PM and
          2:00 to 4:30 PM, Tuesday through Friday.
        </h5>
        <h5>
          <strong>Special Collections</strong> Open Tuesday through Friday by
          appointment.
        </h5>
      </section>
    </div>
  );
};

export default Events;
