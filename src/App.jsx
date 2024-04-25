import { useState } from 'react'
import Title from './components/title.jsx'
import MediaCard from './components/Employee-App.jsx'
import Container from '@mui/material/Container';
import data from './data/data.js'
import './App.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';






function App() {
  
  const [onLeave,setLeave] = useState(true);
  console.log(onLeave);
  return (
    

  <Container fixed>
    <Stack spacing={2} direction="row">
      <Button variant="contained">Active</Button>
      <Button variant="outlined">Inactive</Button>
    </Stack>
     <MediaCard data={data} /> 
  </Container>
   
      
    
  );
 
}


export default App

