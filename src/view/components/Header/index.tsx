import { Container, SecondaryTitle, Title, ButtonContainer } from './styles';
import { MdChecklist } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import Box from '@/view/components/shared/Box';
import Spacer from '@/view/components/Spacer';
import DarkModeSwitch from './DarkModeSwitch';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  // Hook to get the translation function
  const { t } = useTranslation();

  return (
    <Container gap={2}>
      <Box direction="row" display="flex" alignItems="center" gap={5}>
        <MdChecklist css={{ fontSize: '4rem' }} />
        <Box>
          <Title>{t('taskList')}</Title>
          <SecondaryTitle>{t('manageYourTasks')}</SecondaryTitle>
        </Box>
      </Box>

      <Spacer />

      <ButtonContainer>
        <LanguageSelector />
        <DarkModeSwitch />
      </ButtonContainer>
    </Container>
  );
}
