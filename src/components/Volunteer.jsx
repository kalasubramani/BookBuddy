import { Typography } from "@mui/material";

const Volunteer = () => {
  return (
    <div style={{ paddingTop: "1rem", maxHeight: "70%", overflowY: "scroll" }}>
      <Typography variant="h5" color={"#faf8f2"}>
        Unlock Knowledge, Embrace Community: Volunteer at our library
      </Typography>
      <Typography variant="body1" color={"#f7f3e6"}>
        Are you passionate about books, learning, and community? Here's your
        chance to make a meaningful impact! Our library is excited to invite
        individuals like you to become part of our dedicated team of volunteers.
        <br />
        <br />
      </Typography>
      <Typography variant="body" color={"#faf8f2"}>
        <b>Why Volunteer with Us?</b>
        <br />
        <br />
      </Typography>
      <Typography variant="body1" color={"#f7f3e6"}>
        <b>Empowerment:</b> Contribute to the empowerment of our community
        through access to knowledge and resources.
        <br />
        <b>Connections: </b>Build connections with fellow book enthusiasts,
        community members, and library staff.
        <br />
        <b>Gratitude: </b>Experience the joy of giving back and making a
        positive difference in the lives of others.
        <br />
        <br />
      </Typography>
      <Typography variant="body" color={"#faf8f2"}>
        <b>What You Can Do:</b>
        <br />
      </Typography>
      <Typography variant="body1" color={"#f7f3e6"}>
        <ul>
          <li>Assist with book shelving and organization.</li>
          <li>Help patrons locate and check out materials.</li>
          <li>Support library events and programs.</li>
          <li>Contribute to community outreach initiatives.</li>
        </ul>
      </Typography>
      <Typography variant="body" color={"#faf8f2"}>
        <b>How to Get Involved:</b>
        <br />
      </Typography>
      <Typography variant="body1" color={"#f7f3e6"}>
        <ol>
          <li>
            Attend our Volunteer Information Session - Happening every wednesday
            at 2pm in the Library Meeting Room.
          </li>
          <li>
            Complete and submit a Volunteer Application Form available at our
            library front desk.
          </li>
        </ol>
      </Typography>
    </div>
  );
};

export default Volunteer;
