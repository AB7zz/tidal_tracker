import React from 'react'
import {Card, CardContent, Typography, TextField} from '@mui/material'
import TopNav from '../TopNavbar/Topnav'
import SendIcon from '@mui/icons-material/Send';

const Chat = () => {
  return (
    <>
      <TopNav/>
      <div className="p-5">
        <Card style={{minHeight: '400px !important'}}>
          <CardContent>
            <Typography className='font-bold'>
              Fishermen near Kalamasserry
            </Typography>
            <hr />
            <div className="flex justify-start mt-5 mb-5">
              <p className='p-2 text-white bg-orange-300 rounded w-1/3'>Yo!</p>
            </div>
            <div className="flex justify-start mt-5 mb-5">
              <p className='p-2 text-white bg-orange-300 rounded w-1/3'>Hey man!</p>
            </div>
            <div className="flex justify-end mt-5 mb-5">
              <p className='p-2 text-white bg-green-600 rounded w-1/3'>Hola!</p>
            </div>
            <TextField  />
            <SendIcon className='text-white bg-blue-500 rounded ml-3 mt-3 p-1'/>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Chat