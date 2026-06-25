import { Badge } from '@/ui/badge/badge';
import { Button } from '@/ui/button/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card/card';
import { Icon, component, package_, sparkles, zap } from '@/ui/icon/icon';
import { H1, P } from '@/ui/typography/typography';
import { Link } from 'wouter';
import classes from './home.module.css';

export default function Home({ firstComponent }: { firstComponent: string }) {
  return (
    <>
      <div className={classes.hero}>
        <img
          className={classes.logo}
          src={`${import.meta.env.BASE_URL}/favicon.svg`}
          alt=''
          onError={e => (e.currentTarget.style.display = 'none')}
        />

        <Badge variant='primary'>Zero-dependency & delightfully wonky</Badge>

        <H1 className={classes.title}>Cartoonish UI components for serious React apps</H1>

        <P className={classes.subtitle}>
          Hand-drawn borders, wobbly corners, and bouncy animations - all built with pure CSS Modules and zero
          dependencies. It's like your UI went to art school and actually graduated.
        </P>

        <div className={classes.actions}>
          <Button as={Link} href='/docs/installation' size='lg'>
            Get Started
          </Button>
          <Button as={Link} href={`/components/${firstComponent}`} variant='secondary' size='lg'>
            Browse Components
          </Button>
        </div>
      </div>

      <div className={classes.features}>
        <Card>
          <CardHeader>
            <Icon path={zap} />
            <CardTitle>Zero Dependencies</CardTitle>
          </CardHeader>
          <CardContent>
            <P>
              No giant node_modules black hole here! Just React and CSS Modules. Your bundle stays smol and your build
              stays fast. I promise not to install half the internet.
            </P>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Icon path={component} />
            <CardTitle>shadcn-Compatible</CardTitle>
          </CardHeader>
          <CardContent>
            <P>
              Same architecture, same CLI workflow, totally different vibe. Drop these into any shadcn project and watch
              your UI go from corporate to cartoon in seconds.
            </P>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Icon path={package_} />
            <CardTitle>Pure CSS Modules</CardTitle>
          </CardHeader>
          <CardContent>
            <P>
              No Tailwind, no global namespace nightmares. Every component is self-contained with CSS Modules. Works
              instantly with Vite, Next.js, or whatever fancy setup you've got.
            </P>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Icon path={sparkles} />
            <CardTitle>Delightfully Wonky</CardTitle>
          </CardHeader>
          <CardContent>
            <P>
              Random outlines, hand-drawn icons, bouncy hover animations, and fill patterns. Each component instance is
              uniquely wobbly - no two buttons look exactly the same!
            </P>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
