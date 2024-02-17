import "./Homepage.css";
import eventImage from "../assets/indigenous.jpg";
import { Link } from "react-router-dom";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Books from '../assets/Books.jpg'
import Search from '../assets/BookSearch.jpg'
import Info from '../assets/Info.jpg'
import Account from '../assets/UserAccount.jpg'
import Events from '../assets/Event.jpg'

const Homepage = ({user}) => {
  const itemData = [
    {
      img: Books,
      title: 'Books'
    },
    {
      img: Search,
      title: 'Search a book'
    },
    {
      img: Info,
      title: 'About/Info'
    },
    {
      img: Account,
      title: 'User Accout'
    },
    {
      img: Events,
      title: 'Upcoming Events'
    }
  ]
  return (
    // <div className="homePageDiv">
    //   {user?.firstname? <h2>Welcome back, {user.firstname} !</h2> : <h2>Welcome to our library!</h2> } 
    //   <div className="event">
    //     <h3 className="eventsHeading"> Events</h3>
    //     <section>
    //       <img
    //         className="eventImage"
    //         src={eventImage}
    //         alt="Indigenous perspectives - an exhibition"
    //       ></img>
    //       <strong>
    //         NOW OPEN ! Indigenous Perspectives, a new multimedia exhibition
    //         featuring reflections from indigenous tribes, runs through Apr.
    //         17,2024
    //       </strong>
    //       <ul>
    //         <li>Time: 10:00AM - 1:00PM</li>
    //         <li>Location: Meeting Room</li>
    //         <li>Audience: Adults Elementary (Grade K-5) All Ages </li>
    //         <li>
    //           Registration Type: In-Person Registration (Contact front desk)
    //         </li>
    //       </ul>
    //     </section>
    //   </div>
    //   <section>
    //   <p>
    //     <strong>Prepare for Your Visit</strong> Get a Library card! If you are
    //     not a member yet, begin the registration process online at our{" "}
    //     <Link to="/register">Registration</Link>
    //     &nbsp;page.
    //   </p>      
      
    //   <p>
    //     <strong>Archives Research Room </strong>Open 9:00 AM to 1:00 PM and 2:00
    //     to 4:30 PM, Tuesday through Friday.
    //   </p>
    //   <p>
    //     <strong>Special Collections</strong> Open Tuesday through Friday by
    //     appointment.
    //   </p>
    //   </section>
    // </div>

    <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
    {itemData.map((item) => (
      <ImageListItem key={item.img}>
        <img
          // srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
          src={`${item.img}?w=161&fit=crop&auto=format`}
          alt={item.title}
          loading="lazy"
        />
         <ImageListItemBar
            title={item.title}/>
      </ImageListItem>
    ))}
  </ImageList>

  );
};

export default Homepage;
