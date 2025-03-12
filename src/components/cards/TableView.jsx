import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  IconButton,
  
} from "@mui/material";
import useTruncateString from "../../customHooks/useTruncateString";
import CloseOutlined from "@mui/icons-material/CloseOutlined";

export default function Index({ item ,onClick}) {  
  const formattedDate = new Date().toLocaleString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "GMT",
    hour12: false,
  });

  return (
    <React.Fragment>
        <Grid container mt={1} >
        <Grid item xs={12}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              bgcolor: "#e3f2fd",
              borderRadius: 2,
              boxShadow: 2,
              p: 2,
              cursor: "pointer",
            }}
            onClick={onClick} 
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                src="https://media.istockphoto.com/id/1306526412/photo/men-working-in-laptop-at-office.jpg?s=2048x2048&w=is&k=20&c=23hYepSO4mSVETLLk0e-OyXYpfE7ZQH0yeaFn80WG7k="
                alt="item"
                sx={{ width: 50, height: 50, mr: 2 }}
              />
              <CardContent sx={{ flex: "1 1 auto" }}>
                <Typography variant="subtitle1" fontWeight="bold" noWrap>
                {useTruncateString(item?.title ? item?.title : '---',15)}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{}} noWrap>
                   {useTruncateString(item?.body ? item?.body : '---',60)}
                </Typography>
                <Typography variant="caption" color="text.disabled" fontWeight="bold">
                  {formattedDate}
                </Typography>
              </CardContent>
            </Box>
            <IconButton size="small" sx={{color:'#FF9090'}}>
              <CloseOutlined />
            </IconButton>
          </Card>
        </Grid>
      {/* ))} */}
    </Grid>
    </React.Fragment>
  );
}