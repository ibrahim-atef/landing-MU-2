import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  GitHub,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
        borderTop: "1px solid #444",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Connect with us
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
 
   
        <IconButton
          component={Link}
          href="https://github.com/ibrahim-atef"
          target="_blank"
          color="inherit"
        >
          <GitHub />
        </IconButton>
        <IconButton
          component={Link}
          href="https://www.linkedin.com/in/ibrahim-atef-6816a91b0/"
          target="_blank"
          color="inherit"
        >
          <LinkedIn />
        </IconButton>
  
      </Box>

      <Grid container spacing={4} justifyContent="center" sx={{ mb: 3 }}>
        <Grid item>
          <Typography variant="h6">Quick Links</Typography>
          <Link
            href="#"
            color="inherit"
            sx={{ textDecoration: "none", display: "block", mt: 1 }}
          >
            Home
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ textDecoration: "none", display: "block", mt: 1 }}
          >
            About Us
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ textDecoration: "none", display: "block", mt: 1 }}
          >
            Services
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ textDecoration: "none", display: "block", mt: 1 }}
          >
            Contact
          </Link>
        </Grid>
        <Grid item>
          <Typography variant="h6">Resources</Typography>
          <Link
            href="#"
            color="inherit"
            sx={{ textDecoration: "none", display: "block", mt: 1 }}
          >
            Blog
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ textDecoration: "none", display: "block", mt: 1 }}
          >
            FAQs
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ textDecoration: "none", display: "block", mt: 1 }}
          >
            Support
          </Link>
        </Grid>
        <Grid item>
          <Typography variant="h6">Company</Typography>
          <Link
            href="#"
            color="inherit"
            sx={{ textDecoration: "none", display: "block", mt: 1 }}
          >
            Careers
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ textDecoration: "none", display: "block", mt: 1 }}
          >
            Press
          </Link>
          <Link
            href="#"
            color="inherit"
            sx={{ textDecoration: "none", display: "block", mt: 1 }}
          >
            Investors
          </Link>
        </Grid>
      </Grid>

      <Typography variant="body2" sx={{ mb: 2 }}>
        &copy; {new Date().getFullYear()} LEVI. All rights
        reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="#" color="inherit" sx={{ textDecoration: "none" }}>
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
}
