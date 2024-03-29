import Pond from '@/public/images/mangggong-onair-bg.png';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { connect } from 'socket.io-client';

interface IMessage {
  user: string;
  message: string;
}

const user = 'User_' + String(new Date().getTime()).substring(-3);

const Chatting = () => {
  const [message, setMessage] = useState<string>('');
  const [connected, setConnected] = useState<boolean>(false);
  const [chat, setChat] = useState<IMessage[]>([]);
  const inputRef = useRef(null);

  useEffect((): any => {
    // socket server instance
    const socket = connect(process.env.BASE_URL, {
      path: '/api/chat/socketio',
    });

    // set log when socket is connected
    socket.on('connect', () => {
      console.log('SOCKET CONNECTED!', socket.id);
      setConnected(true);
    });

    // update new message in chat room
    socket.on('message', (message: IMessage) => {
      chat.push(message);
      setChat([...chat]);
    });

    // disconnect socket when component is unmounted
    if (socket) return () => socket.disconnect();
  }, []);

  const sendMessage = async () => {
    if (message) {
      const messagePayload: IMessage = {
        user: user,
        message: message,
      };

      // dispatch message to other users
      const dispatchResponse = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(messagePayload),
      });

      if (dispatchResponse.ok) setMessage('');
    }

    inputRef.current?.focus();
  };

  return (
    <section id="chatting" className="right-block-container" data-testid="intro-container">
      <Fade direction="left">
        <div className="flex  justify-between align-middle">
          <div className="w-[49%]">
            <Image src={Pond} alt="pond" style={{ objectFit: 'cover' }} sizes="100vh, 100vw" />
          </div>
          <div className="relative w-[49%] pb-[4rem]">
            <h6 className="md:text-2xml text-center font-UhBeeGmin2Bold text-lg leading-[1.18] text-frog-light sm:text-xl">
              맹꽁과 트수들
            </h6>
            <p className="mx-0 mt-[1.5rem] mb-[2rem] text-center text-[21px] leading-[1.41] text-frog">
              맹꽁맹꽁..나는 비가 오면 울어..
            </p>
            <div className="flex flex-1 flex-col bg-gray-200">
              <div className="flex-1 p-4 text-md">
                {chat.length ? (
                  chat.map((chat, index) => (
                    <div key={['msg_', index].join(' ')} className="mt-1">
                      <span
                        className={clsx(
                          { 'text-red-500': chat.user === user },
                          'font-semibold text-black',
                        )}
                      >
                        {chat.user === user ? 'Me' : chat.user}
                      </span>
                      : {chat.message}
                    </div>
                  ))
                ) : (
                  <div className="text-grey-400 py-6 text-center text-xl">
                    No chat messages before
                  </div>
                )}
              </div>
              <div className="sticky bottom-0 h-20 bg-gray-400 p-4">
                <div className="flex h-full flex-1 flex-row divide-x divide-gray-200">
                  <div className="flex-1 pr-2">
                    <input
                      id="chat_input_id"
                      ref={inputRef}
                      type="text"
                      value={message}
                      placeholder={connected ? 'Type a message...' : 'Connecting...'}
                      className="h-full w-full rounded border border-gray-400 px-2 shadow"
                      disabled={!connected}
                      onChange={(e) => {
                        setMessage(e.target.value);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          sendMessage().then();
                        }
                      }}
                    />
                  </div>
                  <div className="flex flex-col items-stretch justify-center pl-2">
                    <button
                      className="h-full rounded bg-blue-500 px-2 text-sm text-white shadow"
                      onClick={sendMessage}
                      disabled={!connected}
                    >
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Chatting;
