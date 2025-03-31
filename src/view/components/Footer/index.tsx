import { useTranslation } from 'react-i18next';
import { Heartbeat } from './styles';
import Box from '@/view/components/shared/Box';

export default function Footer() {
  // Hook to get the translation function
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      justifyContent="center"
      css={(theme) => ({
        fontWeight: theme.typography.fontWeight.bold,
        color: theme.colors.text,
      })}
    >
      <p>
        {t('madeWith')} <Heartbeat>❤️</Heartbeat> {t('by')}{' '}
        <span>
          <a
            href="https://github.com/c-diego"
            target="_blank"
            css={(theme) => ({
              textDecoration: 'none',
              color: theme.colors.text,
            })}
          >
            c-diego
          </a>
        </span>
      </p>
    </Box>
  );
}
