import React from 'react'
import TopNav from '../TopNavbar/TopNav'
import { Card, CardContent, CardMedia, TextField } from '@mui/material'
import face from './face.jpg'
import { Link } from 'react-router-dom'
const Profile = () => {
  return (
    <>
        <TopNav/>
        <div className="p-4">
            <Card>
                <CardMedia
                    image={face}
                    sx={{height: 140, width: 100}}
                />
                <CardContent className='block'>
                    <TextField className='mb-5' id="standard-basic" label="Name" variant="standard" value="Abhinav" />
                    <TextField id="standard-basic" label="Phone" variant="standard" value="+91-9778393558" />
                    <br />
                    <br />
                    <Link className='mt-5 bg-red-500 text-white rounded p-3'>Sign out</Link>
                </CardContent>
            </Card>
        </div>
    </>
  )
}

export default Profile