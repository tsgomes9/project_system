import styled from '@emotion/styled'
import { Box, FormControl, Grid, Paper, Typography } from '@mui/material'
import Startup from '../../../assets/Startup.png'

export const PaperStyled = styled(Paper)({
  paddingInline: '3rem',
  height: '75%',
  display: 'flex',
  alignItems: 'center',
  minWidth: '60%',
  justifyContent: 'center',
  flexDirection: 'column',
  borderRadius: '1rem',
})

export const BoxStyled = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#F1F4FA',
})

export const GridImg = styled(Grid)({
  backgroundImage: `url(${Startup})`,
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#F1F4FA',
  backgroundPosition: 'center',
  backgroundSize: '90%',
})

export const TypographyError = styled(Typography)({
  marginTop: '1rem',
  color: 'red',
})
