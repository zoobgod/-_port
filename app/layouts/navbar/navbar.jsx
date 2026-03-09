import { Icon } from '~/components/icon';
import { tokens } from '~/components/theme-provider/theme';
import { Transition } from '~/components/transition';
import { useWindowSize } from '~/hooks';
import { Link as RouterLink, useLocation } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { cssProps, media, msToNum, numToMs } from '~/utils/style';
import { NavToggle } from './nav-toggle';
import { ThemeToggle } from './theme-toggle';
import { navLinks, socialLinks } from './nav-data';
import styles from './navbar.module.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const windowSize = useWindowSize();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const getCurrent = pathname => (pathname === location.pathname ? 'page' : undefined);

  return (
    <header className={styles.navbar}>
      <RouterLink
        unstable_viewTransition
        prefetch="intent"
        to="/"
        data-navbar-item
        className={styles.logo}
        aria-label="Nick Arkhipov home"
      >
        <span className={styles.wordmark}>NA</span>
      </RouterLink>
      <NavToggle onClick={() => setMenuOpen(!menuOpen)} menuOpen={menuOpen} />
      <nav className={styles.nav}>
        <div className={styles.navList}>
          {navLinks.map(({ label, pathname }) => (
            <RouterLink
              unstable_viewTransition
              prefetch="intent"
              to={pathname}
              key={label}
              data-navbar-item
              className={styles.navLink}
              aria-current={getCurrent(pathname)}
            >
              {label}
            </RouterLink>
          ))}
        </div>
        <NavbarIcons desktop />
      </nav>
      <Transition unmount in={menuOpen} timeout={msToNum(tokens.base.durationL)}>
        {({ visible, nodeRef }) => (
          <nav className={styles.mobileNav} data-visible={visible} ref={nodeRef}>
            {navLinks.map(({ label, pathname }, index) => (
              <RouterLink
                unstable_viewTransition
                prefetch="intent"
                to={pathname}
                key={label}
                className={styles.mobileNavLink}
                data-visible={visible}
                aria-current={getCurrent(pathname)}
                style={cssProps({
                  transitionDelay: numToMs(
                    Number(msToNum(tokens.base.durationS)) + index * 50
                  ),
                })}
              >
                {label}
              </RouterLink>
            ))}
            <NavbarIcons />
            <ThemeToggle isMobile />
          </nav>
        )}
      </Transition>
      {!isMobile && <ThemeToggle data-navbar-item />}
    </header>
  );
};

const NavbarIcons = ({ desktop }) => {
  if (!socialLinks.length) return null;

  return (
    <div className={styles.navIcons}>
      {socialLinks.map(({ label, url, icon }) => (
        <a
          key={label}
          data-navbar-item={desktop || undefined}
          className={styles.navIconLink}
          aria-label={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className={styles.navIcon} icon={icon} />
        </a>
      ))}
    </div>
  );
};
