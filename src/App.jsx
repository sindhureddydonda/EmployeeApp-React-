import { useState } from 'react'
import Title from './components/title.jsx'
import MediaCard from './components/Employee-App.jsx'
import Container from '@mui/material/Container';
import data from './data/data.js'
import './App.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';

const label = { inputProps: { 'aria-label': 'Switch demo' } };






function App() {
 
  
 const [onLeave,setLeave] = useState(false);
 const lable = {inputProps: { 'aria-label': 'Switch demo'} };
 const filteredData = onLeave ? data.filter((data)=>data.onLeave) : data;
 
  const handleToggle = (event) => {
    setLeave(event.target.checked);
    console.log (event.target.checked);
  }

  console.log(onLeave);

  return (
    

  <Container fixed>
    <Typography variant="h1" component="h2">
  Employee Dashboard 
</Typography>

    
    <Stack spacing={2} direction="row">

      
      <Switch {...label} checked={onLeave} onClick={handleToggle} />
    </Stack>
     <MediaCard data={filteredData} /> 
  </Container>
   
      
    
  );
 
}


export default App

