import React from "react";
import {
  Button,
  TextField,
  MenuItem,
  Typography,
  Box,
  Grid,
  Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {  setFeedbackView } from "../../react-redux/slice/gridviewSlice";

const countryCodes = [
  { code: "1", label: "+1 (USA/Canada)" },
  { code: "44", label: "+44 (UK)" },
  { code: "91", label: "+91 (India)" },
  { code: "61", label: "+61 (Australia)" },
  { code: "81", label: "+81 (Japan)" },
  { code: "86", label: "+86 (China)" },
  { code: "49", label: "+49 (Germany)" },
  { code: "33", label: "+33 (France)" },
  { code: "39", label: "+39 (Italy)" },
  { code: "34", label: "+34 (Spain)" },
  { code: "7", label: "+7 (Russia)" },
  { code: "55", label: "+55 (Brazil)" },
  { code: "27", label: "+27 (South Africa)" },
  { code: "82", label: "+82 (South Korea)" },
  { code: "65", label: "+65 (Singapore)" },
  { code: "60", label: "+60 (Malaysia)" },
  { code: "64", label: "+64 (New Zealand)" },
  { code: "52", label: "+52 (Mexico)" },
  { code: "971", label: "+971 (UAE)" },
  { code: "90", label: "+90 (Turkey)" },
  { code: "20", label: "+20 (Egypt)" },
  { code: "966", label: "+966 (Saudi Arabia)" },
  { code: "62", label: "+62 (Indonesia)" },
  { code: "63", label: "+63 (Philippines)" },
  { code: "94", label: "+94 (Sri Lanka)" },
  { code: "66", label: "+66 (Thailand)" },
  { code: "46", label: "+46 (Sweden)" },
  { code: "31", label: "+31 (Netherlands)" },
  { code: "32", label: "+32 (Belgium)" },
  { code: "41", label: "+41 (Switzerland)" },
  { code: "43", label: "+43 (Austria)" },
  { code: "48", label: "+48 (Poland)" },
  { code: "45", label: "+45 (Denmark)" },
  { code: "351", label: "+351 (Portugal)" },
  { code: "420", label: "+420 (Czech Republic)" },
  { code: "358", label: "+358 (Finland)" },
  { code: "47", label: "+47 (Norway)" },
  { code: "36", label: "+36 (Hungary)" },
  { code: "30", label: "+30 (Greece)" },
  { code: "998", label: "+998 (Uzbekistan)" },
  { code: "964", label: "+964 (Iraq)" },
  { code: "93", label: "+93 (Afghanistan)" },
  { code: "95", label: "+95 (Myanmar)" },
  { code: "880", label: "+880 (Bangladesh)" },
  { code: "373", label: "+373 (Moldova)" },
  { code: "56", label: "+56 (Chile)" },
  { code: "57", label: "+57 (Colombia)" },
  { code: "591", label: "+591 (Bolivia)" },
  { code: "598", label: "+598 (Uruguay)" },
  { code: "54", label: "+54 (Argentina)" },
  { code: "505", label: "+505 (Nicaragua)" },
  { code: "58", label: "+58 (Venezuela)" },
  { code: "507", label: "+507 (Panama)" },
  { code: "509", label: "+509 (Haiti)" },
  { code: "591", label: "+591 (Bolivia)" },
  { code: "53", label: "+53 (Cuba)" },
];
const Index = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
const dispatch = useDispatch();
  const onSubmit = (data) => {
    toast.success("Form submitted successfully!");
    console.log("Form Data:", data);
    reset();
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="gray.100"
    >
      <Paper elevation={3} sx={{ p: 4, maxWidth: 500 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h5" fontWeight={600} mb={2}>
            Please provide the below details!
          </Typography>

          <Grid container spacing={2}>

            <Grid item xs={12}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                {...register("firstName", {
                  required: "First name is required",
                })}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                {...register("lastName", { required: "Last name is required" })}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                {...register("address", { required: "Address is required" })}
                error={!!errors.address}
                helperText={errors.address?.message}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Country"
                variant="outlined"
                fullWidth
                {...register("country", { required: "Country is required" })}
                error={!!errors.country}
                helperText={errors.country?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Email ID"
                variant="outlined"
                fullWidth
                {...register("emailId", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email format",
                  },
                })}
                error={!!errors.emailId}
                helperText={errors.emailId?.message}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                select
                label="Country Code"
                variant="outlined"
                fullWidth
                defaultValue="91"
                {...register("countryCode", {
                  required: "Country code is required",
                })}
                error={!!errors.countryCode}
                helperText={errors.countryCode?.message}
              >
                {countryCodes.map((country) => (
                  <MenuItem key={country.code} value={country.code}>
                    {country.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{7,10}$/,
                    message: "Invalid phone number",
                  },
                })}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
              />
            </Grid>

            <Grid item xs={12} display="flex" justifyContent="center">
              <Button type="submit" variant="contained" color="primary">
                Submit Feedback
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default Index;
