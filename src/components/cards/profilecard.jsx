import * as React from "react";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Button } from "@mui/material";

import { GridView, List } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setGridView, setFeedbackView } from "../../react-redux/slice/gridviewSlice";
import { useNavigate } from "react-router-dom";
export default function Index() {
  const [isItemDetailsPage, setIsItemDetailsPage] = useState(false);
  const isGridView = useSelector((state) => state.gridSlice.isGridView); 
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Card
        sx={{
          maxWidth: { xs: 200, sm: 300, md: 400 },
          minWidth: 200,
          //   margin: 2,
          display: "flex",
          alignItems: "center",
          padding: 2,
          cursor: "pointer",
        }}
      >
        <Avatar
          src="/static/images/avatar/2.jpg"
          sx={{ width: { xs: 36, sm: 45 }, height: { xs: 36, sm: 45 }, mr: 2 }}
        />
        <Box sx={{ p: 0 }}>
          <Typography
            sx={{ fontSize: { xs: "12px", sm: "14px" }, fontWeight: "700" }}
          >
            Hi, Tapendra
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "10px", sm: "12px" }, fontWeight: "500" }}
          >
            Here’s your News!
          </Typography>
        </Box>
      </Card>

      {!isItemDetailsPage && (
        <Card
          sx={{
            maxWidth: { xs: 200, sm: 300, md: 400 },
            minWidth: 200,
            //   margin: 2,
            mt: "2pc",
            //   display: "flex",
            alignSelf: "center",
            alignItems: "center",
            padding: 2,
            cursor: "pointer",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "18px" },
              justifySelf: "center",
              fontWeight: 700,
            }}
          >
            View Toggle
          </Typography>
          <Box display="flex" gap={2} justifyContent="center" mt={2}>
            <Button
              variant={!isGridView ? "contained" : "outlined"}
              startIcon={<List sx={{ marginLeft: "7px" }} />}
              onClick={() => {dispatch(setGridView(false));dispatch(setFeedbackView(false))}}
            />
            <Button
              variant={isGridView ? "contained" : "outlined"}
              startIcon={<GridView sx={{ marginLeft: "7px" }} />}
              onClick={() => {dispatch(setGridView(true));dispatch(setFeedbackView(false))}}
            />
          </Box>
        </Card>
      )}

      <Card
        sx={{
          maxWidth: { xs: 200, sm: 300, md: 400 },
          minWidth: 200,
          //   margin: 2,
          mt: "2pc",
          //   display: "flex",
          alignSelf: "center",
          alignItems: "center",
          padding: 2,
          cursor: "pointer",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", sm: "18px" },
            justifySelf: "center",
            fontWeight: 700,
          }}
        >
          Have a Feedback ?
        </Typography>
        <Box display="flex" gap={0} justifyContent="center" mt={2}>
        <Button variant="outlined" onClick={() => dispatch(setFeedbackView(true))}>
  We're Listing
</Button>

</Box>

      </Card>
    </React.Fragment>
  );
}
