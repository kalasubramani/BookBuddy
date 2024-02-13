import { Box, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = ()=>{

return(
   <Box component={'footer'} sx={{backgroundColor:'rgba(135,206,250,0.2)', p:'2rem',borderRadius:'10px',m:'10px'}} >
      <Container sx={{ flexGrow: 1, textAlign: 'center' }} maxWidth="sm">
        <Typography variant="body1">
          Visit us at: 1148 W. Main Ave, Richmond, VA 23060
        </Typography>
        <Typography variant="body1">
           Hours: Monday-Saturday, 8:30 AM-5:00 PM, Sun Closed
        </Typography>
        <IconButton href="https://www.facebook.com/" color="inherit">
          <FacebookIcon fontSize='large' />
        </IconButton>
        <IconButton href= "https://www.instagram.com/"color="inherit">
          <InstagramIcon fontSize='large' />
        </IconButton>
        <IconButton href="https://www.pinterest.com/" color="inherit">
          <PinterestIcon fontSize='large' />
        </IconButton> 
        {/* <Copyright /> */}
      </Container>
    </Box>
)

} 
export default Footer;