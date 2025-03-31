import { Language } from '@/view/types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MdCheck, MdOutlineLanguage } from 'react-icons/md';
import { Content, Dropdown, Item } from './styles';
import ActionButton from '@/view/components/shared/ActionButton';
import useBreakpoint from '@/view/hooks/useBreakpoint';
import useDropdownClickAway from './useDropdownClickAway';
import useToggle from '@/view/hooks/useToggle';
import useLanguageSelector from './useLanguageSelector';

/** Component to select the application language */
export default function LanguageSelector() {
  // Object with the i18n instance
  const { t, i18n } = useTranslation();

  /** Hook to get the current breakpoint */
  const breakpoint = useBreakpoint();

  // Hook to toggle the dropdown
  const { isOpen, handleClose, toggle } = useToggle();

  // Ref to the dropdown container
  const { containerRef } = useDropdownClickAway({ onClose: handleClose });

  // Hook to change the application language
  const { changeLanguage } = useLanguageSelector();

  return (
    <div style={{ position: 'relative', flexGrow: 1 }} ref={containerRef}>
      <ActionButton onClick={toggle} startIcon={<MdOutlineLanguage />}>
        {breakpoint != 'xs' && <span>{t('language')}</span>}
        {breakpoint == 'xs' && <span>{t('languageShort')}</span>}
      </ActionButton>

      {isOpen && (
        <Dropdown>
          <Content>
            <Item
              onClick={() => changeLanguage('en')}
              selected={i18n.language == 'en'}
            >
              {t('en')} {t('english')}
              {i18n.language == 'en' && <MdCheck />}
            </Item>

            <Item
              onClick={() => changeLanguage('pt')}
              selected={i18n.language == 'pt'}
            >
              {t('pt')} {t('portuguese')}
              {i18n.language == 'pt' && <MdCheck />}
            </Item>

            <Item
              onClick={() => changeLanguage('es')}
              selected={i18n.language == 'es'}
            >
              {t('es')} {t('spanish')}
              {i18n.language == 'es' && <MdCheck />}
            </Item>
          </Content>
        </Dropdown>
      )}
    </div>
  );
}
