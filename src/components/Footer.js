import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box m="40px" bgcolor="#FFF3F4">
    <Stack sx={{ alignItems: "center" }} px="40px" p="24px">
      <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
    </Stack>
  </Box>
);

export default Footer;
