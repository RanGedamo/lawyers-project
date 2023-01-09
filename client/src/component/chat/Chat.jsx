import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import icon_user from '../../assets/images/icon-user.png';
import support_avatar from '../../assets/images/supportAvatar.png';
import { ThemeProvider } from 'styled-components';
const steps = [
  {
    id: '1',
    message: 'מה השם שלך?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'היי {previousValue}, נעים להכיר אותך',
    end: true,
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
              botAvatar={support_avatar}
              userAvatar={icon_user}

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
