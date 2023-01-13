import React, { useState } from "react";
import { useSelector } from "react-redux";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';

function Chat() {
  const [supportChat, setSupportChat] = useState(false)
  const user=useSelector((state)=>state.userData)

  const steps = [
    {
      id: '1',
      message: 'Hi, whats your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, Nice to meet you. What service are you interested in?',
      trigger: '100',
    },
    {
      id: '100',
    options: [
      { value: 1, label: 'Automobile Accidents', trigger: '4' },
      { value: 2, label: 'Disabilities', trigger: '5' },
      { value: 3, label: 'Mortgages', trigger: '6' },
      { value: 4, label: 'Criminal Defense', trigger: '7' },
      { value: 5, label: 'Government', trigger: '8' },
      { value: 6, label: 'Business', trigger: '9' },
      { value: 7, label: 'Financial', trigger: '10' },
      { value: 8, label: 'Adoptions', trigger: '11' },
      { value: 9, label: 'Wills Probate', trigger: '12' },
    ],
  },
  {
    id: '4',
    message: 'Click on the image',
    trigger: '101',
  },
  {
    id: '101',
    component: (
    <a href="/category/63b57b92bf06bcefd6812e98" className="col-12"><img src="/images/chat-bot-img/real-estate.png" style={{borderRadius:"10%"}} /></a>
    ),
    },
  {
    id: '5',
    message: 'Disabilities',
    trigger: '102',
  },
  {
    id: '102',
    component: (
    <a href="/category/63b57b92bf06bcefd6812e98" className="col-12"><img src="/images/chat-bot-img/real-estate.png" style={{borderRadius:"10%"}} /></a>
    ),
    },
  {
    id: '6',
    message: 'Mortgages',
    trigger: '103',
  },
  {
    id: '103',
    component: (
    <a href="/category/63b57b92bf06bcefd6812e98" className="col-12"><img src="/images/chat-bot-img/real-estate.png" style={{borderRadius:"10%"}} /></a>
    ),
    },
  {
    id: '7',
    message: 'Criminal Defense',
    trigger: '104',
  },
  {
    id: '104',
    component: (
    <a href="/category/63b57b92bf06bcefd6812e98" className="col-12"><img src="/images/chat-bot-img/real-estate.png" style={{borderRadius:"10%"}} /></a>
    ),
    },
  {
    id: '8',
    message: 'Government',
    trigger: '105',
  },
  {
    id: '105',
    component: (
    <a href="/category/63b57b92bf06bcefd6812e98" className="col-12"><img src="/images/chat-bot-img/real-estate.png" style={{borderRadius:"10%"}} /></a>
    ),
    },
  {
    id: '9',
    message: 'Business',
    trigger: '106',
  },
  {
    id: '106',
    component: (
    <a href="/category/63b57b92bf06bcefd6812e98" className="col-12"><img src="/images/chat-bot-img/real-estate.png" style={{borderRadius:"10%"}} /></a>
    ),
    },
  {
    id: '10',
    message: 'Financial',
    trigger: '107',
  },
  {
    id: '107',
    component: (
    <a href="/category/63b57b92bf06bcefd6812e98" className="col-12"><img src="/images/chat-bot-img/real-estate.png" style={{borderRadius:"10%"}} /></a>
    ),
    },
  {
    id: '11',
    message: 'Adoptions',
    trigger: '108',
  },
  {
    id: '108',
    component: (
    <a href="/category/63b57b92bf06bcefd6812e98" className="col-12"><img src="/images/chat-bot-img/real-estate.png" style={{borderRadius:"10%"}} /></a>
    ),
    },
  {
    id: '12',
    message: 'Wills Probate',
    trigger: '109',
  },
  {
    id: '109',
    component: (
    <a href="/category/63b57b92bf06bcefd6812e98" className="col-12"><img src="/images/chat-bot-img/real-estate.png" style={{borderRadius:"10%"}} /></a>
    ),
    },
  
  ];

  return (
    <div className="chat d-flex " style={{ marginTop: "20px", justifyContent: "end" }} >
      {supportChat ?
        (<div className="" >
          <ThemeProvider theme={{
              background: '#f5f8fb',
              fontFamily: 'Helvetica Neue',
              headerBgColor: '#4299E1',
              headerFontColor: '#fff',
              headerFontFamily: 'system-ui',
              botBubbleColor: '#00BFFF',
              botFontColor: '#fff',
              userBubbleColor: '#fff',
              userFontColor: '#4a4a4a',
              headerFontSize:"25px"
          }}>
            <ChatBot
              headerTitle="some text"
              speechSynthesis={{ enable: true, lang: 'he' }}
              color={{ background: '#f5f8fb' }}
              steps={steps}
              botAvatar={"/images/chat-bot-img/supportAvatar.png"}
              userAvatar={user?.currentUser?.photoURL}

            />
          </ThemeProvider>
        </div>) :
        ""
      }
      <div style={{ marginTop: "480px" }} onClick={() => supportChat ? setSupportChat(false) : setSupportChat(true)}>
       <button style={{background:"transparent",border:"solid 1px transparent"}}> <img src="https://www.insegment.com/blog/wp-content/uploads/2020/11/chatbot-marketing.gif" alt="" style={{ width: 100 }} /></button>
      </div>

    </div>
  );
}
export default Chat;
