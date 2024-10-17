import { useRef, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import CertificatePreview from './CertificatePreview';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

export default function CertificateGenerator() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [certificateId, setCertificateId] = useState('');
  const [date, setDate] = useState<Dayjs | null>(null);
  const container = useRef(null);

  const exportPDFWithMethod = () => {
    const element = (container.current || document.body) as HTMLElement;
    savePDF(element, {
      paperSize: 'auto',
      landscape: true,
      scale: 1,
      fileName: `${name.split(' ').join('-') || 'john-doe'}-certificate.pdf`,
    });
  };

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
        <Button
          variant='contained'
          onClick={exportPDFWithMethod}
          sx={{ marginBlockStart: 2 }}
        >
          Generate Certificate
        </Button>
      </Box>

      <PDFExport paperSize='A4'>
        <Box sx={{ overflowX: 'scroll' }} ref={container}>
          <CertificatePreview
            name={name}
            description={description}
            certificateId={certificateId}
            date={date}
          />
        </Box>
      </PDFExport>
    </Box>
  );
}
