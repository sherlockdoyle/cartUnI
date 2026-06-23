import { AppShell } from '@/component/appShell/appShell';
import { ThemeToggle } from '@/component/themeToggle';
import { component, externalLink, house, package_, paintbrush, shapes } from '@/ui/icon/icon';
import { lazy, Suspense } from 'react';
import { Route, Router, Switch } from 'wouter';
import { useHashLocation } from 'wouter/use-hash-location';
import classes from './app.module.css';
import CommonStyles from './docs/common-styles';
import Home from './docs/home';
import Icons from './docs/icons';
import Installation from './docs/installation';

const componentModules = import.meta.glob('./components/*.tsx') as Record<
  string,
  () => Promise<{ default: React.ComponentType }>
>;
const componentPages = Object.entries(componentModules).map(([path, loader]) => {
  const fileName = path.split('/').pop()!.split('.')[0];
  const titleCaseName = fileName
    .split('-')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');
  return { fileName, titleCaseName, Component: lazy(loader) };
});

function App() {
  return (
    <Router hook={useHashLocation}>
      <AppShell
        header='cartUnI'
        action={<ThemeToggle />}
        sidebar={[
          { iconPath: house, label: 'Home', href: '/' },
          { type: 'header', label: 'Getting Started' },
          { iconPath: package_, label: 'Installation', href: '/docs/installation' },
          { iconPath: paintbrush, label: 'Common Styles', href: '/docs/common-styles' },
          { iconPath: shapes, label: 'Icons', href: '/docs/icons' },
          { type: 'header', label: 'Components' },
          ...componentPages.map(({ titleCaseName, fileName }) => ({
            iconPath: component,
            label: titleCaseName,
            href: `/components/${fileName}`,
          })),
        ]}
        sidebarFooter={[
          {
            iconPath: externalLink,
            label: 'GitHub',
            href: 'https://github.com/sherlockdoyle/cartUnI',
            target: '_blank',
          },
        ]}
      >
        <Suspense>
          <Switch>
            <Route path='/'>
              <Home firstComponent={componentPages[0].fileName} />
            </Route>
            <Route path='/docs/installation'>
              <Installation />
            </Route>
            <Route path='/docs/common-styles'>
              <CommonStyles />
            </Route>
            <Route path='/docs/icons'>
              <Icons />
            </Route>
            {componentPages.map(({ fileName, Component }) => (
              <Route key={fileName} path={`/components/${fileName}`}>
                <Component />
              </Route>
            ))}
            <Route>
              <div className={classes.defaultRoute}>404 - This page wandered off.</div>
            </Route>
          </Switch>
        </Suspense>
      </AppShell>
    </Router>
  );
}
export default App;
