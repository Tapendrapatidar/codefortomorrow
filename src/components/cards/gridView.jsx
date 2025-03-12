import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Close, CloseTwoTone } from "@mui/icons-material";
import useTruncateString from "../../customHooks/useTruncateString";
export default function index({ data ,onClick}) {  

  return (
    <React.Fragment>
    <Box sx={{maxWidth:'300px', p:'5px',cursor:'pointer'}} >
       <Card
         sm={{ display: "flex", maxWidth: "300px", borderRadius: "8px"}}  onClick={onClick}
       >
         <Box sx={{ display: "flex", flexDirection: "column" }}>
           <CloseTwoTone
             sx={{
               alignSelf: "right",
               marginLeft: "auto",
               marginBottom: "-1pc",
               padding: "5px",
               color: "#FF9090",
               fontSize: "2pc",
               cursor: "pointer",
             }}
           />
           <CardContent sx={{ flex: "1 0 auto" }}>
             <Typography style={{ fontSize: "20px", fontWeight: "700" }}>
              
               {useTruncateString(data?.title ? data?.title : '---',15)}
             </Typography>
             <Typography sx={{ fontFamily: "600", fontSize: "16px" }}>
             {useTruncateString(data?.body ? data?.body : '---',20)}
             </Typography>
             <Typography
               sx={{ fontFamily: "600", fontSize: "16px", color: "#B9B9B9" }}
             >
            {  new Date().toLocaleString()}
             </Typography>
           </CardContent>
           <Box></Box>
         </Box>
         <Box
           sx={{
             flexDirection: "row",
             width: "full",
             justifyItems: "center",
             m: "5px",
           }}
         >
           <CardMedia
             component="img"
             // maxWidth={"300px"}
             sm={{
               borderRadius: "4px",
               objectFit: "cover",
               maxWidth: "250px",
               maxHeight: "250px",
             }}
             image="https://thumbs.dreamstime.com/b/agriculture-vegetable-field-landscape-view-freshly-growing-84090367.jpg?w=360 360w, https://thumbs.dreamstime.com/b/agriculture-vegetable-field-landscape-view-freshly-growing-84090367.jpg?w=400 400w, https://thumbs.dreamstime.com/b/agriculture-vegetable-field-landscape-view-freshly-growing-84090367.jpg?w=450 450w, https://thumbs.dreamstime.com/b/agriculture-vegetable-field-landscape-view-freshly-growing-84090367.jpg?w=576 576w, https://thumbs.dreamstime.com/b/agriculture-vegetable-field-landscape-view-freshly-growing-84090367.jpg?w=768 768w"
             alt="Live from space album cover"
           />
         </Box>
       </Card>
   </Box>
 </React.Fragment>
  );
}




