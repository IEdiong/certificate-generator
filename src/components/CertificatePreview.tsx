import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { Dayjs } from 'dayjs';

type CertificatPreviewProps = {
  name?: string;
  description?: string;
  certificateId?: string;
  date: Dayjs | null;
};

function CertificatePreview({
  name,
  description,
  certificateId,
  date,
}: CertificatPreviewProps) {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '894.92px',
        color: 'black',
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
          position: 'relative',
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
              letterSpacing: '0.2em',
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
            letterSpacing: '0.2em',
          }}
        >
          of internship
        </Typography>

        <Box sx={{ marginBlockStart: '35px' }}>
          <Box sx={{ height: '60px' }}>
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: '40px',
                textTransform: 'capitalize',
              }}
            >
              {name || 'John Doe'}
            </Typography>
          </Box>
          <Box sx={{ width: '80%', height: '1px', backgroundColor: 'black' }} />
          <Typography
            sx={{
              color: 'black',
              marginBlockStart: '15px',
              fontSize: '14px',
              width: '80%',
            }}
          >
            {description ||
              `successfully completed the 4-Week AI Internship Program at
              Tublian, demonstrating exceptional dedication and a commendable
              work ethic throughout the internship. The contributions made,
              including the development of an advanced chatbot, have added
              significant value to the AI community.`}
          </Typography>
        </Box>

        <Box
          sx={{
            width: '100%',
            height: '130px',
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              bottom: '10%',
              transform: 'translateX(-50%)',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'Open Sans',
              }}
            >
              <img src='/signature.svg' alt='signature' />
              <Typography sx={{ fontSize: '11px', fontWeight: '800' }}>
                Nilanjan Raychaudhuri
              </Typography>
              <Typography sx={{ fontSize: '10px', fontWeight: '700' }}>
                Founder, Tublian
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              right: '22px',
              bottom: '10%',
            }}
          >
            <Box sx={{ display: 'flex', columnGap: '5px' }}>
              <img src='cert-badge.svg' alt='badge' />
              <Box>
                <Typography
                  sx={{
                    textTransform: 'uppercase',
                    fontSize: '14px',
                    fontFamily: 'poppins',
                    fontWeight: '700',
                    color: '#FD642E',
                  }}
                >
                  CERTIFIED
                </Typography>
                <Typography
                  sx={{
                    fontSize: '12px',
                    fontFamily: 'Open sans',
                    fontWeight: '800',
                  }}
                >
                  {certificateId || 'Certificate ID'}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '12px',
                    fontFamily: 'Open sans',
                    fontWeight: '800',
                  }}
                >
                  {date?.format('DD/MM/YYYY') || '15/12/2023'}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CertificatePreview;
