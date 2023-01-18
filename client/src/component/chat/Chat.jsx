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
      { value: 1, label: 'Employment', trigger: '4' },
      { value: 2, label: 'Personal Injury', trigger: '5' },
      { value: 3, label: 'Family Law', trigger: '6' },
      { value: 4, label: 'Real Estate', trigger: '7' },
      { value: 5, label: 'Probate', trigger: '8' },
      { value: 6, label: 'Financial', trigger: '9' },
      { value: 7, label: 'Business', trigger: '10' },
      { value: 8, label: 'Government', trigger: '11' },
      { value: 9, label: 'Criminal Defense', trigger: '12' },
    ],
  },
  {
    id: '4',
    message: 'Click on the image - Employment',
    trigger: '101',
  },
  {
    id: '101',
    component: (
    <a href="/category/63c43ba1a234173839cd98a3" className="col-12"><img src="/images/chat-bot-img/Employment.png" style={{borderRadius:"10%"}} /></a>
    ),
    },
  {
    id: '5',
    message: 'Click on the image - Personal Injury',
    trigger: '102',
  },
  {
    id: '102',
    component: (
    <a href="/category/63c439aea234173839cd9894" className="col-12"><img src="/images/chat-bot-img/PersonalInjury.png" style={{borderRadius:"10%"}} /></a>
    ),
    },
  {
    id: '6',
    message: 'Click on the image - Family Law',
    trigger: '103',
  },
  {
    id: '103',
    component: (
    <a href="/category/63c438bfc6d4d52b2c1fa52f" className="col-12"><img src="/images/chat-bot-img/FamilyLaw.png" style={{borderRadius:"10%"}} /></a>
    ),
    },
  {
    id: '7',
    message: 'Click on the image - Real Estate',
    trigger: '104',
  },
  {
    id: '104',
    component: (
    <a href="/category/63c44106539b4d290ee7fd45" className="col-12"><img src="/images/chat-bot-img/RealEstate.png" style={{borderRadius:"10%"}} /></a>
    ),
    },
  {
    id: '8',
    message: 'Click on the image - Probate',
    trigger: '105',
  },
  {
    id: '105',
    component: (
    <a href="/category/63c4405057c87f24ec8c3771" className="col-12"><img src="/images/chat-bot-img/Probate.png" style={{borderRadius:"10%"}} /></a>
    ),
    },
  {
    id: '9',
    message: 'Click on the image - Financial',
    trigger: '106',
  },
  {
    id: '106',
    component: (
    <a href="/category/63c43e6757c87f24ec8c376b" className="col-12"><img src="/images/chat-bot-img/Financial.png" style={{borderRadius:"10%"}} /></a>
    ),
    },
  {
    id: '10',
    message: 'Click on the image - Business',
    trigger: '107',
  },
  {
    id: '107',
    component: (
    <a href="/category/63c4504bb187c601731ff1bb" className="col-12"><img src="/images/chat-bot-img/Business.png" style={{borderRadius:"10%"}} /></a>
    ),
    },
  {
    id: '11',
    message: 'Click on the image - Government',
    trigger: '108',
  },
  {
    id: '108',
    component: (
    <a href="/category/63c44e26b187c601731ff1b5" className="col-12"><img src="/images/chat-bot-img/Government.png" style={{borderRadius:"10%"}} /></a>
    ),
    },
  {
    id: '12',
    message: 'Click on the image - Criminal Defense',
    trigger: '109',
  },
  {
    id: '109',
    component: (
    <a href="/category/63c44349539b4d290ee7fd64" className="col-12"><img src="images/chat-bot-img/criminalDefense.png" style={{borderRadius:"10%"}} /></a>
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
              headerTitle="Support Chat"
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
