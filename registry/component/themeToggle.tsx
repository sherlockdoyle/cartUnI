import useTheme from '@/hook/useTheme';
import { Button } from '@/ui/button/button';
import { Icon, monitorSmartphone, moon, sun } from '@/ui/icon/icon';

export function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  return (
    <Button
      title={`${theme[0].toUpperCase() + theme.slice(1)} Theme`}
      variant='secondary'
      size='icon'
      onClick={() => setTheme(theme === 'dark' ? 'system' : theme === 'system' ? 'light' : 'dark')}
    >
      <Icon path={theme === 'light' ? sun : theme === 'dark' ? moon : monitorSmartphone} />
    </Button>
  );
}
