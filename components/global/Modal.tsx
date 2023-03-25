import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export interface ModalProps {
  onErrorModalClose: () => void;
  title: string;
  content: string;
}

const Modal = (props: ModalProps) => {
  const ref = useRef<HTMLDivElement>();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.createElement('div');
    document.body.appendChild(ref.current);
    setMounted(true);
    return () => {
      document.body.removeChild(ref.current);
    };
  }, []);

  return mounted
    ? createPortal(
        <div
          className="fixed inset-0 z-10 flex items-end justify-center bg-black/30 sm:items-center"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div
            className="relative flex max-h-[250px] w-[720px] flex-col items-center justify-between bg-white py-[32px] px-[23px]"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex">
                <div className="relative mr-[8px] mt-[6px] h-[25px] w-[24px] sm:mt-[8px] md:mt-[10px]">
                  <Image
                    src="/images/icon-solid-error-info.svg"
                    alt="error icon"
                    fill
                    style={{ objectFit: 'fill' }}
                  />
                </div>
                <div
                  className="block text-left font-UhBeeGmin2Bold text-md leading-[1.2] text-youtube-black md:text-lg"
                  data-testid={'error_modal_title'}
                >
                  {props.title}
                </div>
              </div>
            </div>
            <div className="mr-[15px] w-full py-[23px] px-[10px] text-sm sm:text-md">
              {props.content}
            </div>
            <div className="flex w-full justify-around">
              <button onClick={props.onErrorModalClose} className="flex items-center">
                <Image
                  src="/images/mangggong-helltaker.gif"
                  alt="close image"
                  width={40}
                  height={40}
                />
                <span className="ml-2 font-UhBeeGmin2Bold text-[1rem] text-youtube-black">
                  닫기
                </span>
              </button>
            </div>
          </div>
        </div>,
        ref.current!,
      )
    : null;
};

export default Modal;
