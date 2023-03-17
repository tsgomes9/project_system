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
import { HTMLAttributes, useState } from 'react'
import {
  PaperStyled,
  BoxStyled,
  GridImg,
  TypographyError,
} from './components/loginStyles'

export function Login() {
  const [showPassword, setShowPassword] = useState(false)

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const [error, setError] = useState(false)

  const userExemple = {
    name: 'admin',
    pass: '123',
  }

  const HandleClick = () => setShowPassword((show) => !show)

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (userExemple.pass !== password || userExemple.name !== user) {
      setError(true)

      setTimeout(() => {
        setError(false)
      }, 5000)
    } else {
      setError(false)
    }
  }

  return (
    <Grid container>
      <GridImg item xs={false} sm={false} md={false} lg={6} />

      <Grid item xs={12} sm={12} md={12} lg={6}>
        <form onSubmit={submitForm}>
          <BoxStyled>
            <PaperStyled>
              <Typography variant="h5">Welcome to App</Typography>
              <Typography sx={{ mb: 3 }}>
                Fill the login fields to access the system
              </Typography>

              <FormControl variant="outlined" sx={{ width: '100%', m: 2 }}>
                <InputLabel htmlFor="user-form">User</InputLabel>
                <OutlinedInput
                  type="text"
                  id="user-form"
                  label="User"
                  onChange={(e) => setUser(e.target.value)}
                  required
                />
              </FormControl>

              <FormControl variant="outlined" sx={{ width: '100%', m: 2 }}>
                <InputLabel htmlFor="password-form">Password</InputLabel>
                <OutlinedInput
                  required
                  id="password-form"
                  type={showPassword ? 'text' : 'password'}
                  onChange={(e) => setPassword(e.target.value)}
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

              <Button
                type="submit"
                variant="contained"
                sx={{ p: 2, mt: 1 }}
                fullWidth
              >
                Log in
              </Button>

              {error && (
                <TypographyError>Usuário não encontrado</TypographyError>
              )}
            </PaperStyled>
          </BoxStyled>
        </form>
      </Grid>
    </Grid>
  )
}
