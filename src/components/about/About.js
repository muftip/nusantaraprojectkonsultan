import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";

export default function About({ innerRef }) {
    const theme = useTheme(); // akses tema MUI
    const isDark = theme.palette.mode === 'dark';

    const boxStyle = {
        border: `1px solid ${isDark ? '#555' : '#ccc'}`,
        borderRadius: '12px',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: isDark ? '0 4px 12px rgba(0,0,0,0.6)' : '0 4px 12px rgba(0,0,0,0.1)',
        backgroundColor: isDark ? '#1e1e1e' : '#f9f9f9',
        width: '100%',
        maxWidth: '800px',
        color: isDark ? '#f0f0f0' : '#111'
    };

    return (
        <Box 
            ref={innerRef} 
            display={'flex'} 
            flexDirection={'column'} 
            alignItems={'center'} 
            mt={'3rem'} 
            id={'about'}
        >
            {/* Visi */}
            <Box sx={boxStyle}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    Visi Usaha Kolektif
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    Menjadi unit jasa profesional berbasis keterampilan kolektif yang berperan aktif dalam memperkuat gerakan koperasi rakyat yang mandiri, adil, dan berkelanjutan.
                </Typography>
            </Box>

            {/* Misi */}
            <Box sx={boxStyle}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    Misi Usaha Kolektif
                </Typography>
               <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                    Menghimpun dan memberdayakan individu yang memiliki keahlian di berbagai bidang jasa
konsultasi.
Menyediakan layanan konsultasi, pelatihan, dan pendampingan yang relevan, berkualitas,
dan terjangkau bagi koperasi dan komunitas.
Membangun ekosistem kerja kolektif yang transparan, partisipatif, dan berbasis nilai
solidaritas.
                </Typography>
            </Box>
        </Box>
    );
}
