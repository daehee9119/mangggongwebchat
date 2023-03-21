import BurgerMenuIcon from '@/components/icons/BurgerMenuIcon';
import mangggongProfile from '@/public/images/mangggong_profile.png';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

interface IMenuItem {
  link: string;
  title: string;
}

const navigationConfiguration: Array<IMenuItem> = [
  { link: '/about', title: '맹꽁은?' },
  { link: '/chat', title: '채팅하기' },
  { link: '/loadertest', title: '로딩바테스트' },
];

const Header = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const mobileMenuHandler = () => {
    setOpenMobileMenu(!openMobileMenu);
  };

  return (
    <header className="box-border py-4 px-2 text-sm" data-testid={'menu-home'}>
      <div className="common-container">
        <div className="flex flex-row flex-wrap items-center justify-between text-center">
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
            <span className="ml-2 text-sm  md:text-md">안녕? 나는 맹꽁</span>
          </div>
          <div className="hidden md:block">
            {navigationConfiguration.length > 0 &&
              navigationConfiguration.map((item: IMenuItem, index) => {
                return (
                  <div
                    className={clsx(
                      'my-5',
                      'mx-8',
                      'box-border',
                      'inline-block',
                      'text-center',
                      'font-bold',
                      'text-frog',
                      'md:my-2',
                      'sm:text-md',
                      'md:text-lg',
                      'lg:text-xl',
                    )}
                    key={index}
                  >
                    <a href={item.link}>
                      <span className="menu-item-text">{item.title}</span>
                    </a>
                  </div>
                );
              })}
          </div>
          <div className="block md:hidden" onClick={mobileMenuHandler}>
            <BurgerMenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
