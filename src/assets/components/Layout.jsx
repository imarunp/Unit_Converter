import {
  AppBar,
  Box,
  Button,
  IconButton,
  Switch,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import ScaleIcon from '@mui/icons-material/Scale';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState } from 'react';
import ConvertCard from './ConvertCard';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightIcon from '@mui/icons-material/Nightlight';
function Layout() {
  const [inputValue, setInputValue] = useState(0.0);
  const [checked, setChecked] = useState(true);

  function handleChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <Box
      borderRadius={2}
      sx={{ backgroundColor: checked ? '#fdf0d5' : '#0d1321' }}
      textAlign='center'
      height='80%'
      width='40%'
      border='2px solid #22223b '
      pt={1}
    >
      <Box>
        <AppBar position='static' color='transparent' elevation={0}>
          <Toolbar>
            <IconButton
              sx={{
                transform: 'scale(1.6)',
                color: checked ? '#22223b' : '#f0ebd8',
              }}
            >
              <ScaleIcon />
            </IconButton>
            <Typography
              p={1}
              fontWeight='800'
              m='0 auto'
              variant='h3'
              component='div'
              sx={{ color: checked ? '' : '#f0ebd8' }}
            >
              UNIT CONVERTER
            </Typography>
            <IconButton
              sx={{
                transform: 'scale(1.8)',
                color: checked ? '#e07a5f' : '#f0ebd8',
                display: checked ? 'block' : 'none',
              }}
            >
              <WbSunnyIcon />
            </IconButton>
            <IconButton
              sx={{
                transform: 'scale(1.8)',
                color: checked ? '#e07a5f' : '#f0ebd8',
                display: checked ? 'none' : 'block',
              }}
            >
              <NightlightIcon />
            </IconButton>
            <Switch
              color='warning'
              checked={checked}
              onClick={() => setChecked(!checked)}
            />
          </Toolbar>
        </AppBar>
      </Box>

      <Box
        mb={5}
        display='flex'
        justifyContent='center'
        alignItems='center'
        gap={2}
      >
        <TextField
          sx={{
            mt: 2,
            input: {
              color: checked ? '' : '#f0ebd8',
            },
          }}
          focused
          color='success'
          id='outlined-basic'
          label='Enter Number'
          variant='outlined'
          value={inputValue}
          onChange={handleChange}
        />
      </Box>
      <Box mb={4}>
        <ConvertCard
          checked={checked}
          title='Length '
          multiplier={3.28084}
          firstUnit='meter'
          secondUnit='feet'
          inputValue={inputValue}
        ></ConvertCard>
      </Box>
      <Box mb={4}>
        <ConvertCard
          checked={checked}
          title='Volume '
          multiplier={0.264}
          firstUnit='liter '
          secondUnit='gallon '
          inputValue={inputValue}
        ></ConvertCard>
      </Box>
      <Box mb={4}>
        <ConvertCard
          checked={checked}
          title='Mass '
          multiplier={2.204}
          firstUnit='kg'
          secondUnit='pound'
          inputValue={inputValue}
        ></ConvertCard>
      </Box>
      <Typography
        sx={{ color: checked ? '' : '#f0ebd8' }}
        display='flex'
        justifyContent='center'
        alignItems='center'
        variant='body1'
        component='span'
        gap={0}
      >
        Find my code on
        <Button href='' sx={{ ml: '0' }}>
          <Typography
            fontWeight='500'
            sx={{ color: checked ? '#22223b' : '#f0ebd8' }}
            variant='body1'
            component='span'
          >
            GitHub
          </Typography>
          <IconButton sx={{ color: checked ? '#22223b' : '#f0ebd8' }}>
            <GitHubIcon />
          </IconButton>
        </Button>
      </Typography>
    </Box>
  );
}
export default Layout;
