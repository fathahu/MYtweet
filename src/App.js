import React, { useState } from 'react'
import Navbar from './components/Navbar'
import RightBar from './components/RightBar'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Box from '@mui/material/Box';
import { Stack, ThemeProvider, createTheme } from '@mui/material'
import AddPost from './components/AddPost'

const App = () => {
  const [mode, SetMode] = useState('light')
  const darkTheme = createTheme({
    palette:{
      mode: mode,
    }
  })
  return (

    <>
    <ThemeProvider theme={darkTheme}>

      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar /> 
        <Stack direction={'row'}  justifyContent={'space-between'}>
        <Sidebar mode = {mode} SetMode = {SetMode} />
        <Feed />
        <RightBar />
        <AddPost/>
        </Stack>
      </Box>
      </ThemeProvider>
    
    </>
  )
}

export default App