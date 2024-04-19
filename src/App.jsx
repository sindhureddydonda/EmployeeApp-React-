import { useState } from 'react'
import Title from './components/title.jsx'
import data from './data/data.js'
import MediaCard from './components/Employee-App.jsx'
import './App.css'
import Container from '@mui/material/Container';
import './App.css'



function App() {
  
  return (
    <Container fixed>
   <MediaCard employee={data}/>
   <MediaCard />
   <MediaCard />
   <MediaCard />
  </Container>
    
  );
}

export default App
