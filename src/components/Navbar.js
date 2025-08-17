// src/components/Navbar.js
import React, { useState } from 'react';
import Style from './Navbar.module.scss';
import { HashLink as Link } from 'react-router-hash-link';
import { Box, Button, Switch, IconButton, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { info, singlePage } from "../info/Info";

const links = [
  { name: 'Home', to: '', active: 'home' },
  { name: 'Visi & Misi', to: 'about', active: 'about' },
  { name: 'Project', to: 'portfolio', active: 'portfolio' }
];

const scrollWidthOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
};

export default function Navbar({ darkMode, handleClick, active, setActive }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Box
      component="nav"
      width="100%"
      position={singlePage ? 'fixed' : 'relative'}
      className={darkMode ? Style.dark : Style.light}
      sx={{
        top: 0,
        left: 0,
        zIndex: 1200,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 3,
        py: 2,
        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
        background: darkMode ? "#121212" : "#f9f9f9"
      }}
    >
      {/* Logo */}
      <Box fontWeight="bold" fontSize="1.4rem" sx={{ letterSpacing: "1px" }}>
        Nusantara Project
      </Box>

      {/* Desktop Menu */}
      <Box display={{ xs: "none", md: "flex" }} gap="1rem" alignItems="center">
        {links.map((link) => (
          <Link
            key={link.name}
            to={singlePage ? `#${link.to}` : `/${link.to}`}
            scroll={(el) => scrollWidthOffset(el)}
            smooth
            onClick={() => setActive(link.active)}
            className={Style.link}
          >
            <Button
              sx={{
                px: 3,
                py: 1,
                borderRadius: "12px",
                fontWeight: "600",
                textTransform: "none",
                transition: "all 0.2s ease-in-out",
                background: link.active === active
                  ? "linear-gradient(145deg, #3f51b5, #5c6bc0)"
                  : "linear-gradient(145deg, #ffffff, #e6e6e6)",
                color: link.active === active
                  ? "#fff"
                  : (darkMode ? "#fff" : "#333"),
                boxShadow: link.active === active
                  ? "4px 4px 8px rgba(0,0,0,0.3), -4px -4px 8px rgba(255,255,255,0.1)"
                  : "4px 4px 8px rgba(0,0,0,0.2), -4px -4px 8px rgba(255,255,255,0.6)",
                "&:hover": {
                  background: link.active === active
                    ? "linear-gradient(145deg, #3949ab, #5c6bc0)"
                    : "linear-gradient(145deg, #f0f0f0, #dcdcdc)",
                  transform: "translateY(-2px)"
                }
              }}
            >
              {link.name}
            </Button>
          </Link>
        ))}

        {/* 🔥 Tombol WhatsApp */}
        <Button
          component="a"
          href="https://wa.me/6282378993396"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<WhatsAppIcon />}
          sx={{
            px: 3,
            py: 1,
            borderRadius: "12px",
            fontWeight: "600",
            textTransform: "none",
            background: "linear-gradient(145deg, #25D366, #128C7E)",
            color: "#fff",
            boxShadow: "4px 4px 8px rgba(0,0,0,0.3)",
            "&:hover": {
              background: "linear-gradient(145deg, #20b85d, #0e6f5c)",
              transform: "translateY(-2px)"
            }
          }}
        >
          Hubungi WA
        </Button>

        {/* Dark Mode Switch */}
        <Switch checked={darkMode} onChange={handleClick} color="default" />
      </Box>

      {/* Mobile Menu Button */}
      <IconButton
        sx={{ display: { xs: "block", md: "none" } }}
        onClick={() => setMobileOpen(true)}
      >
        <MenuIcon sx={{ color: darkMode ? "#fff" : "#333" }} />
      </IconButton>

      {/* Drawer Mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            p: 2,
            background: darkMode ? "#121212" : "#fff",
            color: darkMode ? "#fff" : "#333"
          }}
        >
          <IconButton onClick={() => setMobileOpen(false)} sx={{ alignSelf: "flex-end" }}>
            <CloseIcon sx={{ color: darkMode ? "#fff" : "#333" }} />
          </IconButton>
          <List>
            {links.map((link) => (
              <ListItem key={link.name} onClick={() => setMobileOpen(false)}>
                <Link
                  to={singlePage ? `#${link.to}` : `/${link.to}`}
                  scroll={(el) => scrollWidthOffset(el)}
                  smooth
                  className={Style.link}
                >
                  {link.name}
                </Link>
              </ListItem>
            ))}
            <ListItem>
              <Button
                component="a"
                href="https://wa.me/6282378993396"
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<WhatsAppIcon />}
                sx={{
                  mt: 2,
                  px: 2,
                  py: 1,
                  width: "100%",
                  borderRadius: "8px",
                  fontWeight: "600",
                  textTransform: "none",
                  background: "linear-gradient(145deg, #25D366, #128C7E)",
                  color: "#fff",
                  "&:hover": {
                    background: "linear-gradient(145deg, #20b85d, #0e6f5c)"
                  }
                }}
              >
                Hubungi WA
              </Button>
            </ListItem>
            <ListItem>
              <Switch checked={darkMode} onChange={handleClick} color="default" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
