import { useNavigate } from "react-router-dom";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import Books from "../assets/Books.jpg";
import Search from "../assets/BookSearch.jpg";
import Info from "../assets/Info.jpg";
import Account from "../assets/UserAccount.jpg";
import Events from "../assets/Event.jpg";
import Volunteer from "../assets/Volunteer.jpg";

const Homepage = ({ user }) => {
  const navigate = useNavigate();
  const itemData = [
    {
      img: Books,
      title: "Books",
      path: "/books",
    },
    {
      img: Search,
      title: "Search a book",
      path: "/search",
    },
    {
      img: Info,
      title: "About/Info",
      path: "/About",
    },
    {
      img: Account,
      title: "My Account",
      path: "/account",
    },
    {
      img: Events,
      title: "Upcoming Events",
      path: "/events",
    },
    {
      img: Volunteer,
      title: "Volunteer at our library!",
      path: "/volunteer",
    },
  ];
  return (
    <>
      <ImageList variant="woven" cols={3} gap={8} sx={{ maxHeight: "100%" }}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            sx={{ cursor: "pointer", maxHeight: "90%" }}
          >
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              onClick={() => navigate(item.path)}
            />
            <ImageListItemBar title={item.title} color="red" />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
};

export default Homepage;
