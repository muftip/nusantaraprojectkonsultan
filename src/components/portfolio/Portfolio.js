// src/components/portfolio/VisiMisi.js
import React from "react";
import { Box, Typography, useTheme, Divider } from "@mui/material";

export default function VisiMisi() {
  const theme = useTheme();

  const listStyle = {
    margin: 0,
    paddingLeft: "1.5rem",
    lineHeight: 1.9,
    fontSize: "1.15rem",
    color: theme.palette.text.secondary, // 🔑 pakai abu-abu cerah
  };

  return (
    <Box
      id="about"
      display="flex"
      flexDirection="column"
      alignItems="center"
      py={{ xs: 4, md: 8 }}
      px={2}
      maxWidth={900}
      mx="auto"
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          mb: 6,
          fontWeight: 800,
          color: theme.palette.text.primary, // judul tetap lebih tegas
        }}
      >
        Tawaran Jenis-Jenis Jasa
      </Typography>

      {/* Pelatihan */}
      <Box mb={6} width="100%">
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mb: 2, color: theme.palette.text.primary }}
        >
          Pelatihan dan Pendampingan
        </Typography>
        <Divider sx={{ my: 2, borderColor: theme.palette.divider }} />
        <ul style={listStyle}>
          <li>Pelatihan tata kelola koperasi, kepemimpinan, manajemen usaha, sistem kaderisasi, dan keuangan.</li>
          <li>Pelatihan pengembangan usaha pertanian dan peternakan (sektor riil).</li>
          <li>Pelatihan branding, dokumentasi, dan digital marketing.</li>
          <li>Pelatihan penyusunan laporan bulanan, triwulan, dan tahunan.</li>
        </ul>
      </Box>

      {/* Pembuatan Instrumen */}
      <Box mb={6} width="100%">
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mb: 2, color: theme.palette.text.primary }}
        >
          Pembuatan Instrumen dan Tools Kerja
        </Typography>
        <Divider sx={{ my: 2, borderColor: theme.palette.divider }} />
        <ul style={listStyle}>
          <li>Penyusunan modul kaderisasi dan media edukasi koperasi.</li>
          <li>Pembuatan sistem informasi koperasi (keuangan, inventaris, anggota), aplikasi dan website.</li>
          <li>Produksi materi visual untuk identitas, promosi, pelaporan, serta dokumentasi kegiatan dan capaian koperasi.</li>
          <li>Pembuatan profil video koperasi.</li>
        </ul>
      </Box>

      {/* Desain Infrastruktur */}
      <Box mb={6} width="100%">
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mb: 2, color: theme.palette.text.primary }}
        >
          Desain Infrastruktur dan Tata Ruang
        </Typography>
        <Divider sx={{ my: 2, borderColor: theme.palette.divider }} />
        <ul style={listStyle}>
          <li>Penyusunan rencana teknis dan desain infrastruktur pendukung koperasi dan komunitas, termasuk fasilitas produksi, ruang belajar, atau kawasan terpadu berbasis kebutuhan lokal.</li>
          <li>Perencanaan kawasan pangan koperasi.</li>
        </ul>
      </Box>

      {/* Riset */}
      <Box mb={6} width="100%">
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mb: 2, color: theme.palette.text.primary }}
        >
          Riset dan Pengembangan
        </Typography>
        <Divider sx={{ my: 2, borderColor: theme.palette.divider }} />
        <ul style={listStyle}>
          <li>Pelaksanaan studi, survei, dan riset terapan untuk mendukung pengambilan keputusan koperasi dan penguatan dampak sosial ekonomi.</li>
          <li>Studi kelayakan unit usaha koperasi.</li>
          <li>Survey anggota dan kebutuhan komunitas.</li>
        </ul>
      </Box>
    </Box>
  );
}
