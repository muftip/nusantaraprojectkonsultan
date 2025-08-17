import React from 'react';
import Style from './Home.module.scss';
import { Box } from '@mui/material';

export default function Home({ innerRef }) {
  return (
    <Box
      ref={innerRef}
      component={'main'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      justifyContent={'flex-start'}
      minHeight={'calc(100vh - 175px)'}
      p={{ xs: '1rem', md: '3rem' }}
      id={'home'}
    >
      {/* Company Name */}
      <Box mb={'2rem'} textAlign={'center'}>
        <div style={{ overflow: 'hidden', width: '100%' }}>
          <h2
            style={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
              paddingLeft: '100%', // mulai dari luar layar kanan
              animation: 'marquee 10s linear infinite',
              fontSize: '2rem',
              marginBottom: '1rem',
            }}
          >
            Nusantara Project Konsultan
          </h2>
        </div>

        <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
          Menjadi unit jasa profesional berbasis keterampilan kolektif yang berperan aktif dalam memperkuat gerakan koperasi rakyat yang mandiri, adil, dan berkelanjutan.
        </p>
      </Box>

      {/* Latar Belakang */}
      <Box maxWidth={'800px'} fontSize={{ xs: '1rem', md: '1.125rem', lg: '1.25rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          Latar Belakang Pembentukan Usaha Jasa Kolektif
        </h2>
        <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
          Dalam menghadapi tantangan pengelolaan dan pengembangan koperasi di berbagai sektor, dibutuhkan dukungan jasa profesional yang mampu menjawab kebutuhan spesifik koperasi—mulai dari tata kelola organisasi, sistem keuangan, digitalisasi, hingga pengembangan usaha.
        </p>
        <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
          Namun selama ini, banyak koperasi mengalami kesulitan dalam mengakses layanan konsultasi yang relevan, terjangkau, dan berpihak pada semangat kolektif. Di sisi lain, terdapat banyak individu dengan keterampilan dan keahlian di berbagai bidang seperti manajemen koperasi, akuntansi, fasilitasi komunitas, teknologi informasi, pemasaran, hukum, serta pendidikan, yang tersebar dan belum terorganisir secara strategis.
        </p>
        <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
          Merespons kebutuhan tersebut, dibentuklah sebuah badan usaha berbentuk PT Perorangan sebagai sarana legal yang menjadi penopang administratif dari kerja kolektif ini. Meskipun secara hukum dimiliki oleh satu orang, usaha ini dijalankan berdasarkan nilai-nilai kolektifisme, kesetaraan, dan gotong royong, serta mengadopsi prinsip kerja koperasi dalam pengambilan keputusan, pembagian hasil, dan sistem kontribusi.
        </p>
        <p style={{ lineHeight: '1.6' }}>
          Unit usaha ini dirancang sebagai wadah kolektif yang menghimpun tenaga-tenaga ahli dari berbagai latar belakang untuk menawarkan jasa konsultasi kepada koperasi, khususnya Koperasi Merah Putih dan jaringan anggotanya. Tujuannya bukan semata menjadi penyedia jasa profesional, tetapi juga menjadi ruang pemberdayaan, di mana setiap anggota kolektif dapat menjual keterampilannya, memperoleh nilai ekonomi secara adil, dan turut serta dalam memperkuat gerakan koperasi rakyat.
        </p>
      </Box>

      {/* Keyframes untuk marquee */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </Box>
  );
}
