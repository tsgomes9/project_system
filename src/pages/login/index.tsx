// import { styled as Styled, createTheme, ThemeProvider } from '@mui/system'
import {
  Button,
  Grid,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
} from '@mui/material'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { PaperStyled, BoxStyled, GridImg } from './styles/loginStyles'

export function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const HandleClick = () => setShowPassword((show) => !show)

  return (
    <Grid container>
      <GridImg item xs={false} sm={false} md={7} lg={7} />

      <Grid item xs={12} sm={12} md={5} lg={5}>
        <BoxStyled>
          <PaperStyled>
            <Typography variant="h5">Welcome to App</Typography>
            <Typography sx={{ mb: 3 }}>
              Fill the login fields to access the system
            </Typography>

            <FormControl variant="outlined" sx={{ width: '100%', m: 2 }}>
              <InputLabel htmlFor="user-form">User</InputLabel>
              <OutlinedInput type="text" id="user-form" label="User" required />
            </FormControl>

            <FormControl variant="outlined" sx={{ width: '100%', m: 2 }}>
              <InputLabel htmlFor="password-form">Password</InputLabel>
              <OutlinedInput
                required
                id="password-form"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                    <span
                      className="material-symbols-outlined"
                      onClick={HandleClick}
                    >
                      {showPassword ? 'visibility' : 'visibility_off'}
                    </span>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <Button variant="contained" sx={{ p: 2, mt: 1 }} fullWidth>
              Log in
            </Button>
          </PaperStyled>
        </BoxStyled>
      </Grid>
    </Grid>
  )
}
