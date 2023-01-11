import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
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
  message: 'Automobile Accidents',
  trigger: '',
},
{
  id: '5',
  message: 'Disabilities',
  trigger: '',
},
{
  id: '6',
  message: 'Mortgages',
  trigger: '',
},
{
  id: '7',
  message: 'Criminal Defense',
  trigger: '',
},
{
  id: '8',
  message: 'Government',
  trigger: '',
},
{
  id: '9',
  message: 'Business',
  trigger: '',
},
{
  id: '10',
  message: 'Financial',
  trigger: '',
},
{
  id: '11',
  message: 'Adoptions',
  trigger: '',
},
{
  id: '12',
  message: 'Wills Probate',
  trigger: '',
},

];

function Chat() {
  const [supportChat, setSupportChat] = useState(false)

  return (
    <div className="chat d-flex " style={{ marginTop: "20px", justifyContent: "end" }} >
      {supportChat ?
        (<div className="" >
          <ThemeProvider theme={{
              background: '#f5f8fb',
              fontFamily: 'Helvetica Neue',
              headerBgColor: '#CC2029',
              headerFontColor: '#fff',
              headerFontFamily: 'system-ui',
              botBubbleColor: '#CC2029',
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
              botAvatar={"images/chat-bot-img/supportAvatar.png"}
              userAvatar={"images/chat-bot-img/icon-user.png"}

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
