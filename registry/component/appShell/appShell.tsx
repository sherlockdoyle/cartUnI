import { useCachedStyles } from '@/hook/useCachedStyles';
import { cn, getCommonProps, type CommonProps } from '@/lib/utils';
import commonClasses from '@/style/common.module.css';
import { Button } from '@/ui/button/button';
import { Icon, menu } from '@/ui/icon/icon';
import { useId, useState, type CSSProperties, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import classes from './appShell.module.css';

interface NavHeader {
  type: 'header';
  iconPath?: string;
  label: string;
}
interface NavItem {
  type?: 'item';
  iconPath: string;
  label: string;
  href: string;
}
type Nav = NavHeader | NavItem;
type ContentOrNav = ReactNode | Nav[];
function isNav(nav: ContentOrNav): nav is Nav[] {
  return Array.isArray(nav) && nav.length > 0 && 'label' in nav[0];
}

function NavLink({ label, iconPath, href }: NavItem) {
  const [path] = useLocation();

  return (
    <Link className={cn(classes.navItem, path === href && classes.active)} title={label} href={href}>
      <Icon path={iconPath} />
      <span className={classes.navLabel}>{label}</span>
    </Link>
  );
}

function SidebarNav({ className, children }: { className?: string; children: ContentOrNav }) {
  const isNavChildren = isNav(children);
  return (
    <div className={cn(className, isNavChildren && classes.navWrapper)}>
      {isNavChildren
        ? children.map(c => {
            if (c.type === 'header')
              return (
                <div key={c.label} className={classes.navHeader}>
                  {c.iconPath && <Icon path={c.iconPath} />}
                  <h3 className={classes.navLabel}>{c.label}</h3>
                </div>
              );

            return <NavLink key={c.label} {...c} />;
          })
        : children}
    </div>
  );
}

const HEADER_CLASSES = `${commonClasses.shadow} ${classes.headerWrapper}`,
  SIDEBAR_CLASSES = `${commonClasses.shadow} ${classes.sidebarWrapper}`;
export function AppShell({
  header,
  action,
  sidebar,
  sidebarHeader,
  sidebarFooter,
  sidebarWidth = '16rem',
  style,
  children,
  ...props
}: CommonProps<
  'div',
  {
    header: string;
    action?: ReactNode;
    sidebar: ContentOrNav;
    sidebarHeader?: string;
    sidebarFooter?: ContentOrNav;
    sidebarWidth?: CSSProperties['width'];
  }
>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => window && window.innerWidth > 768);

  const cStyles = useCachedStyles();
  const id = useId();

  return (
    <div
      style={{ ...cStyles, ...style, '--sidebar-width': sidebarWidth } as CSSProperties} // used by children
      {...getCommonProps(props, classes.appShell, isSidebarOpen ? classes.open : classes.closed)}
    >
      <header className={HEADER_CLASSES}>
        <Button
          size='icon'
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          variant={isSidebarOpen ? 'primary' : 'secondary'}
          aria-label='Toggle Sidebar'
          aria-controls={id}
          aria-expanded={isSidebarOpen}
        >
          <Icon path={menu} />
        </Button>
        <h1 className={classes.header}>{header}</h1>
        {action && <div className={classes.action}>{action}</div>}
      </header>

      <aside id={id} className={SIDEBAR_CLASSES}>
        {sidebarHeader && <h2 className={classes.sidebarHeader}>{sidebarHeader}</h2>}
        <SidebarNav className={classes.sidebar}>{sidebar}</SidebarNav>
        {sidebarFooter && <SidebarNav className={classes.sidebarFooter}>{sidebarFooter}</SidebarNav>}
      </aside>

      <div className={classes.backdrop} onClick={() => setIsSidebarOpen(false)} aria-hidden='true' />

      <main className={classes.main}>{children}</main>
    </div>
  );
}
