import BurgerMenuIcon from '@/components/icons/BurgerMenuIcon';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useWindowSize } from 'react-use';

const MobileMenu = (props: { children?: ReactNode; menuHandler: () => void }) => {
  const ref = useRef<HTMLDivElement>();
  const [open, setOpen] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    ref.current = document.createElement('div');
    document.body.appendChild(ref.current);
    setOpen(true);
    return () => {
      document.body.removeChild(ref.current!);
    };
  }, []);

  useEffect(() => {
    if (width > 768) setOpen(false);
  }, [width]);

  return open
    ? createPortal(
        <div
          className="fixed inset-0 z-10 flex items-center justify-end bg-black/30"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div
            className="relative flex h-full w-[90%] flex-col bg-white p-6 pt-[1.5rem] text-left"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="relative mb-[2.5rem] box-border max-w-full">
              <span className="flex items-baseline justify-between text-right font-medium text-title-black">
                <div className="w-1/2 basis-1/2">
                  <h5 className="text-center text-md font-bold">Menu</h5>
                </div>
                <div className="flex w-1/2 basis-1/2 justify-end" onClick={props.menuHandler}>
                  <div className="w-1/2">
                    <BurgerMenuIcon />
                  </div>
                </div>
              </span>
            </div>
            {props.children}
          </div>
        </div>,
        ref.current!,
      )
    : null;
};

export default MobileMenu;
