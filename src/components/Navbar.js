import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      // sx for aditional style property
      sx={{
        //sm :small devices . xs:extra small devices
        gap: { sm: "122px", xs: "40px" },
        // mt :margin top
        mt: {
          sm: "32px",
          xs: "20px",
        },
        justifyContent: "none",
      }}
      px="20px"
    >
      <Link to="/GYM_with_React">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>

      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          // to="/GYM_with_React"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          // href="/GYM_with_React/#exercises"
          href="/#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
