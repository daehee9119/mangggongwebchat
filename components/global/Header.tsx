import mangGgongProfile from '@/public/images/mangggong_profile.png';
import clsx from 'clsx';
import Image from 'next/image';

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
  const menuDecorationStyle = '';

  return (
    <header className="box-border py-4 px-2 text-sm" data-testid={'menu-home'}>
      <div className="relative mr-auto ml-auto w-full max-w-[1200px] px-[60px]">
        <div className="flex flex-row flex-wrap items-center justify-between text-center">
          <div className="flex flex-row items-center">
            <div className="h-32 w-32 overflow-hidden rounded-[70%]">
              <a href="/" className="box-border flex">
                <Image
                  src={mangGgongProfile}
                  alt="맹꽁"
                  style={{ objectFit: 'cover' }}
                  sizes="100vh, 100vw"
                />
              </a>
            </div>
            <span className="text-3xl">안녕? 나는 맹꽁</span>
          </div>
          <div>
            {navigationConfiguration.length > 0 &&
              navigationConfiguration.map((item: IMenuItem) => {
                return (
                  <div
                    className={clsx(
                      'my-5',
                      'mx-8',
                      'box-border',
                      'inline-block',
                      'text-center',
                      'text-[36px]',
                      'font-bold',
                      'text-frog-color',
                      'md:my-2',
                      'md:text-[48px]',
                    )}
                  >
                    <a href={item.link}>
                      <span className="menu-item-text">{item.title}</span>
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
