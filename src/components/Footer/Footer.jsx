import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  TextField,
  Button,
  IconButton,
  Container,
  Stack,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Phone,
  Email,
  LocationOn,
} from "@mui/icons-material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // wait for route to render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, 0);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return (
    <Box
      sx={{
        background: "linear-gradient(120deg, #232526 0%, #000000 100%)",
        color: "#fff",
        pt: 8,
        pb: 4,
        px: 2,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            mb: 6,
            p: { xs: 3, md: 5 },
            borderRadius: 5,
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)",
          }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: 800, letterSpacing: "-1px" }}
              >
                Zeenath Tours
              </Typography>
              <Typography variant="body2" sx={{ color: "#e0e0e0", mb: 2 }}>
                Located in the heart of Karaikudi, Zeenath Tours has been a
                trusted name in the travel and transport industry for over 25
                years. We proudly serve customers traveling to any destination
                across South India and beyond.
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                <TextField
                  size="small"
                  placeholder="Your email"
                  variant="outlined"
                  sx={{
                    bgcolor: "#fff",
                    borderRadius: 2,
                    "& .MuiOutlinedInput-root": { color: "#222" },
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#FF8906",
                    color: "#fff",
                    fontWeight: 700,
                    borderRadius: 2,
                    px: 3,
                    "&:hover": { bgcolor: "#7F5AF0" },
                  }}
                >
                  Subscribe
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} md={2}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 700, mb: 2 }}
              >
                Quick Links
              </Typography>

              <List
                component="ul"
                disablePadding
                sx={{
                  pl: 3,
                  listStyle: "none",
                  listStyleType: "none",
                  "& .MuiListItem-root": {
                    display: "block",
                    p: 0,
                    mb: 0.5,
                  },
                }}
              >
                {[
                  { label: "Home", to: "/" },
                  { label: "About", to: "/about" },
                  { label: "Gallery", to: "/gallery" },
                  { label: "Contact", to: "/contact" },
                  { label: "Book Now", to: "/#booking-form" }, // match the id in HomePage
                ].map(({ label, to }) => (
                  <ListItem key={label}>
                    <ListItemButton
                      component={RouterLink}
                      to={to}
                      onClick={() => {
                        if (to === "/#booking") return; // handled by hash scroll
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      sx={{
                        color: "#e0e0e0",
                        p: 0,
                        "&:hover": {
                          color: "#FF8906",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      <ListItemText
                        primary={label}
                        primaryTypographyProps={{ variant: "body2" }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Grid>

            <Grid item xs={12} md={3}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 700, mb: 2 }}
              >
                Business Hours
              </Typography>
              <Typography variant="body2" sx={{ color: "#e0e0e0", mb: 1 }}>
                <b>Mon - Friday:</b> 09.00 am to 07.00 pm
              </Typography>
              <Typography variant="body2" sx={{ color: "#e0e0e0", mb: 1 }}>
                <b>Saturday:</b> 10.00 am to 05.00 pm
              </Typography>
              <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
                <b>Vacation:</b> All Sunday is our vacation
              </Typography>
            </Grid>

            <Grid item xs={12} md={3}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: 700, mb: 2 }}
              >
                Contact Info
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                <LocationOn sx={{ color: "#FF8906" }} />
                <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
                  No: 11, T.T.Nagar 4th Street, Karaikudi-630001, Tamil Nadu,
                  India
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                <Email sx={{ color: "#FF8906" }} />
                <Typography
                  variant="body2"
                  component="a"
                  href="mailto:zeenathtours1@gmail.com"
                  sx={{
                    textDecoration: "none",
                    color: "#e0e0e0",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  zeenathtours1@gmail.com
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                <Phone sx={{ color: "#FF8906" }} />
                <Typography
                  variant="body2"
                  component="a"
                  href="tel:+919443495741"
                  sx={{
                    textDecoration: "none",
                    color: "#e0e0e0",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  +91 9443495741
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                <Phone sx={{ color: "#FF8906" }} />
                <Typography
                  variant="body2"
                  component="a"
                  href="tel:+919894487988"
                  sx={{
                    textDecoration: "none",
                    color: "#e0e0e0",
                    "&:hover": { color: "#fff" },
                  }}
                >
                  +91 9894487988
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                <Instagram sx={{ color: "#FF8906" }} />
                <Typography
                  variant="body2"
                  component="a"
                  href="https://instagram.com/zeenath_tours"
                  target="_blank"
                  rel="noopener"
                  sx={{
                    color: "#e0e0e0",
                    textDecoration: "none",
                    "&:hover": {
                      color: "#FF8906",
                      textDecoration: "underline",
                    },
                  }}
                >
                  @zeenath_tours
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} mt={2}>
                <IconButton
                  sx={{
                    bgcolor: "#fff",
                    color: "#3b5998",
                    "&:hover": { bgcolor: "#3b5998", color: "#fff" },
                  }}
                  href="#"
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  sx={{
                    bgcolor: "#fff",
                    color: "#1DA1F2",
                    "&:hover": { bgcolor: "#1DA1F2", color: "#fff" },
                  }}
                  href="#"
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  sx={{
                    bgcolor: "#fff",
                    color: "#E1306C",
                    "&:hover": { bgcolor: "#E1306C", color: "#fff" },
                  }}
                  href="https://instagram.com/zeenath_tours"
                  target="_blank"
                  rel="noopener"
                >
                  <Instagram />
                </IconButton>
                {/* <IconButton
                  sx={{
                    bgcolor: "#fff",
                    color: "#0077B5",
                    "&:hover": { bgcolor: "#0077B5", color: "#fff" },
                  }}
                  href="#"
                >
                  <LinkedIn />
                </IconButton> */}
              </Stack>
            </Grid>
          </Grid>
        </Paper>
        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.18)" }} />
        <Typography variant="body2" align="center" sx={{ color: "#e0e0e0" }}>
          © {new Date().getFullYear()} Zeenath Tours. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
