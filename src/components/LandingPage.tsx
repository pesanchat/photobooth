import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      height="95vh"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        marginBottom={3}
      >
        <Typography variant="h2" color="primary" align="center">
          Selamat datang di Photobox
        </Typography>
        <Typography variant="h6" color="primary" align="center">
          Abadikan momen serumu, kapan saja dan di mana saja
        </Typography>
        <Typography
          variant="subtitle1"
          color="primary"
          fontFamily={"serif"}
          align="center"
        >
          Foto hanya dapat dilihat oleh Anda. Kami tidak mengumpulkan data
          pribadi Anda.
        </Typography>
      </Box>

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => navigate("/template")}
        sx={{
          px: 5,
          py: 1.4,
          borderRadius: "999px",
          background: "linear-gradient(135deg, #a83f65 0%, #e87883 100%)",
          color: "#fff",
          boxShadow: "0 8px 20px rgba(157, 53, 88, 0.24)",
          transition: "transform 180ms ease, box-shadow 180ms ease",
          "&:hover": {
            background: "linear-gradient(135deg, #913354 0%, #d96674 100%)",
            boxShadow: "0 11px 24px rgba(157, 53, 88, 0.3)",
            transform: "translateY(-2px)",
          },
        }}
      >
        Mulai
      </Button>
    </Box>
  );
};

export default LandingPage;
