import React from 'react'
import {Card, CardContent, Typography, TextField} from '@mui/material'
import TopNav from '../TopNavbar/Topnav'
import SendIcon from '@mui/icons-material/Send';
import { Context } from '../AppContext/AppContext';

export const DisplayChats = ({user, message, userName}) => {
  // console.log(user, message)
  if(user == userName){
    return(
      <div className="flex justify-end mt-5 mb-5">
        <p className='p-2 text-white bg-green-600 rounded w-1/3'>{message}</p>
      </div>
    )
  }else{
    return(
    <div className="flex justify-start mt-5 mb-5">
      <p className='p-2 text-white bg-orange-300 rounded w-1/3'>{message}</p>
    </div>
    )
  }
}

const Chat = () => {
  const {userName} = React.useContext(Context)
  const [message, setMessage] = React.useState()
  const [allMessages, setAll] = React.useState([])
  const [lastData, setLastData] = React.useState([])

  React.useEffect(() => {
    readData()
  }, [])

  const readData = () => {
    const res2 = fetch('https://bytecode-631f7-default-rtdb.asia-southeast1.firebasedatabase.app/chats.json', 
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }).then(response => { return response.json() })
    .then((data) => {
      for(let key in data) {
        setAll(allMessages => [...allMessages, {user: data[key].user, message: data[key].message}])
      }
    })
  }

  const uploadData = async (event) => {
    event.preventDefault()
    const res = fetch('https://bytecode-631f7-default-rtdb.asia-southeast1.firebasedatabase.app/chats.json', 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: userName,
        message: message
      })
    })
    if(res){
      console.log('message sent')
    }else{
      console.log('message not sent')
    }

    setAll(allMessages => [...allMessages, {user: userName, message: message}])

  }
  return (
    <>
      <TopNav/>
      <div className="p-5 mb-10">
        <Card style={{minHeight: '400px !important'}}>
          <CardContent>
            <Typography className='font-bold'>
              Fishermen near Kalamasserry
            </Typography>
            <hr />
            {allMessages && allMessages.map(data => (
              <DisplayChats user={data.user} message={data.message} userName={userName} />
            ))}
            <TextField onChange={(e) => setMessage(e.target.value)}  />
            <SendIcon onClick={uploadData} className='text-white bg-blue-500 rounded ml-3 mt-3 p-1'/>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Chat