import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import africaImage from "../assets/Africa-Map-PNG-File.png";
import europeImage from "../assets/europe2.png";
import asiaImage from "../assets/asia2.png";
import americasImage from "../assets/americas.png";
import "../App.css";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const CountryPicker = ({ regionPickUpHandler }) => {
  return (
    <div>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            bgcolor: "#fffff",
            minHeight: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            margin: "10px 0",
          }}
        >
          <Grid container spacing={1} columns={12}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div
                className="region-parent"
                onClick={() => regionPickUpHandler("africa")}
              >
                <div className="region-image">
                  <img src={africaImage} alt="#" />
                </div>
                <div className="region-heading">
                  <Typography variant="h3" className="legend">
                    Africa
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div
                className="region-parent"
                onClick={() => regionPickUpHandler("europe")}
              >
                <div className="region-image">
                  <img src={europeImage} alt="#" />
                </div>
                <div className="region-heading">
                  <Typography variant="h3">Europe</Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div
                className="region-parent"
                onClick={() => regionPickUpHandler("asia")}
              >
                <div className="region-image">
                  <img src={asiaImage} alt="#" />
                </div>
                <div className="region-heading">
                  <Typography variant="h3">Asia</Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div
                className="region-parent"
                onClick={() => regionPickUpHandler("americas")}
              >
                <div className="region-image">
                  <img src={americasImage} alt="#" />
                </div>
                <div className="region-heading">
                  <Typography variant="h3">Americas</Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default CountryPicker;
