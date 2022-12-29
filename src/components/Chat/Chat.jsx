import React from 'react'
import {Card, CardContent, Typography, TextField} from '@mui/material'
import TopNav from '../TopNavbar/Topnav'
import SendIcon from '@mui/icons-material/Send';
import { Context } from '../AppContext/AppContext';

const Chat = () => {
  const {userName} = React.useContext(Context)
  const [message, setMessage] = React.useState()

  const lol = async (event) => {
    event.preventDefault()
    // const res = fetch('https://bytecode-631f7-default-rtdb.asia-southeast1.firebasedatabase.app/chats.json', 
    // {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     user: userName,
    //     message: message
    //   })
    // })
    // if(res){
    //   console.log('message sent')
    // }else{
    //   console.log('message not sent')
    // }

    const res2 = fetch('https://bytecode-631f7-default-rtdb.asia-southeast1.firebasedatabase.app/chats.json', 
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }).then(response => { return response.json() })
    .then((data) => {
      for(let key in data) {
        console.log("Key: " + key)
      }
    })
  }
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
            <TextField onChange={(e) => setMessage(e.target.value)}  />
            <SendIcon onClick={lol} className='text-white bg-blue-500 rounded ml-3 mt-3 p-1'/>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Chat