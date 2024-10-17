'use client';

import { useState } from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

export default function CertificateGenerator() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [certificateId, setCertificateId] = useState('');
  const [date, setDate] = useState<Dayjs | null>(null);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        alignItems: { xs: 'center', lg: 'flex-start' },
        columnGap: 8,
        rowGap: 3,
        width: '100%',
        maxWidth: '1200px',
        paddingInline: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '400px',
        }}
      >
        <TextField
          id='name'
          label='Name'
          variant='standard'
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter recipient's name"
          value={name}
        />
        <TextField
          id='description'
          label='Certificate Description'
          variant='standard'
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter certificate description'
          value={description}
          multiline
          rows={4}
        />
        <TextField
          id='certificateId'
          label='Certificate ID'
          variant='standard'
          onChange={(e) => setCertificateId(e.target.value)}
          placeholder='Enter certificate ID'
          value={certificateId}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label='Date'
            value={date}
            onChange={(newDate) => setDate(newDate)}
            slotProps={{ textField: { variant: 'standard' } }}
          />
        </LocalizationProvider>
      </Box>

      <Box
        sx={{
          width: '100%',
          maxWidth: '894.92px',
          // height: '595.5px',
          backgroundColor: 'white',
          aspectRatio: '297/210',
          backgroundImage: 'url("/bg-tublian.svg")',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingBlock: '30px',
          paddingInline: '32px',
        }}
      >
        <Box
          sx={{
            borderColor: '#FD642E',
            borderWidth: '6px',
            borderStyle: 'solid',
            borderRadius: '20px',
            height: '100%',
            padding: '22px',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <img src='/logo.svg' alt='logo' />
            <Typography
              variant='h2'
              sx={{
                fontWeight: 'bold',
                marginBlockStart: '12px',
                textTransform: 'uppercase',
              }}
            >
              Tublian
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: '42px',
              fontWeight: 'bold',
              marginBlockStart: '3px',
              color: 'black',
              textTransform: 'uppercase',
              fontFamily: 'Inter',
            }}
          >
            Certificate
          </Typography>
          <Typography
            sx={{
              fontSize: '21px',
              fontWeight: 'medium',
              color: '#FC3946',
              textTransform: 'uppercase',
              fontFamily: 'poppins',
              marginBlockStart: '-10px',
            }}
          >
            of internship
          </Typography>
        </Box>
      </Box>

      {/* <div className='border-4 border-gray-800 p-8 bg-gray-100 relative'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold mb-4'>
            Certificate of Achievement
          </h2>
          <p className='text-xl mb-8'>This certifies that</p>
          <p className='text-2xl font-bold mb-8'>
            {name || '[Recipient Name]'}
          </p>
          <p className='mb-8'>{description || '[Certificate Description]'}</p>
          <div className='flex justify-between mb-16'>
            <p>Certificate ID: {certificateId || '[ID]'}</p>
            <p>Date: {date?.format('DD/MM/YYYY') || '[Date]'}</p>
          </div>
          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
            <p className='text-sm'>
              This is a generated certificate and may not be officially
              recognized.
            </p>
          </div>
        </div>
      </div> */}
    </Box>
  );
}
