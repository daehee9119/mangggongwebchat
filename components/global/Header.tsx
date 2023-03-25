import MobileMenu from '@/components/global/MobileMenu';
import BurgerMenuIcon from '@/components/icons/BurgerMenuIcon';
import mangggongProfile from '@/public/images/mangggong-profile.png';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

interface IMenuItem {
  linkId: string;
  title: string;
}

const navigationConfiguration: Array<IMenuItem> = [
  { linkId: 'intro', title: '맹꽁은?' },
  { linkId: 'discordIntro', title: '디스코드는?' },
  { linkId: 'chatting', title: '채팅하기!' },
];

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const mobileMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  const scrollToMenu = (menuId: string) => {
    const element = document.getElementById(menuId) as HTMLDivElement;
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const MenuItems = () => {
    if (navigationConfiguration.length > 0) {
      return navigationConfiguration.map((item: IMenuItem, index) => (
        <divs
          className={clsx(
            'my-5',
            'mx-8',
            'box-border',
            'inline-block',
            'text-center',
            'text-frog-light',
            'md:my-2',
            'text-md',
            'lg:text-lg',
            'xl:text-xl',
            'cursor-pointer',
          )}
          key={index}
        >
          <span className="menu-item-text" onClick={() => scrollToMenu(item.linkId)}>
            {item.title}
          </span>
        </divs>
      ));
    } else return;
  };

  return (
    <header className="box-border py-4 px-2 text-sm" data-testid={'menu-home'}>
      <div className="flex flex-row flex-nowrap items-center justify-between text-center">
        <div className="flex flex-row items-center">
          <div className="h-6 w-6 overflow-hidden rounded-[70%] border-2 border-online hover:border-4 hover:transition-transform hover:duration-100 xs:h-24 xs:w-24 md:h-32 md:w-32">
            <a href="/">
              <Image
                src={mangggongProfile}
                alt="맹꽁"
                style={{ objectFit: 'cover' }}
                sizes="100vh, 100vw"
              />
            </a>
          </div>
          <span className="ml-2 text-sm lg:text-md">안녕? 나는 맹꽁</span>
        </div>
        <div className="hidden md:block">
          <MenuItems />
        </div>
        <div className="block md:hidden" onClick={mobileMenuHandler}>
          <BurgerMenuIcon />
        </div>
        <CSSTransition
          in={openMobileMenu}
          timeout={300}
          classNames="overlay-transition"
          className="overlay-transition"
          unmountOnExit
          appear
        >
          <MobileMenu menuHandler={mobileMenuHandler}>
            <MenuItems />
          </MobileMenu>
        </CSSTransition>
      </div>
    </header>
  );
};
export default Header;
