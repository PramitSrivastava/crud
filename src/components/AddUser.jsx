import React from 'react'
import { useState  } from 'react'
import { FormControl,FormGroup,InputLabel,Input, Typography, styled ,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { addUser } from '../service/api';
const Container = styled(FormGroup)`
width: 50%;
margin: 5% auto;
justify-content: center;
text-align: center;
& > div{
    margin-top: 20px;
}
`
const defaultValue ={
    name: '',
    username: '',
    email: '',
    phone: '',
}
const AddUser = () => {
    const [user ,setUser] = useState(defaultValue);

    const navigate = useNavigate();

    const onValueChange = (e) => {
       
        setUser({ ...user , [e.target.name]:e.target.value});
        
    }
    const addUserDetails = async () => {
       await addUser(user);
       navigate('/all')

    }
  return (
    <Container>
        <Typography variant='h4'>Add User</Typography>
    <FormControl>
        <InputLabel>Name</InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='name'/>
    </FormControl>
    <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='username' />
    </FormControl><FormControl>
        <InputLabel>Email</InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='email' />
    </FormControl><FormControl>
        <InputLabel>Phone</InputLabel>
        <Input  onChange={(e) => onValueChange(e)} name='phone' />
    </FormControl>
    <FormControl>
    <Button variant="contained" onClick={() =>addUserDetails()}>Add User</Button>
    </FormControl>
    </Container>
  )
}

export default AddUser