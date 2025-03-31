import { SyntheticEvent, useState } from 'react';
import { createPortal } from 'react-dom';
import { MdClose } from 'react-icons/md';
import {
  CloseButton,
  DialogWrapper,
  InputWrapper,
  Label,
  Overlay,
  StyledTextarea,
} from './styles';
import { useTranslation } from 'react-i18next';
import Box from '@/view/components/shared/Box';
import ActionButton from '@/view/components/shared/ActionButton';
import Spacer from '../Spacer';

interface DialogProps {
  dialogTitle: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: string) => void;
  onCancel: () => void;
}

/** Dialog component to add a new task */
export default function Dialog({
  isOpen,
  dialogTitle,
  onClose,
  onCancel,
  onSave,
}: DialogProps) {
  // Hook to get the translation function
  const { t } = useTranslation();

  /** State to store the input value */
  const [value, setValue] = useState('');

  /** State to store the invalid state of the input */
  const [isInvalid, setInvalid] = useState(false);

  /**  Function to handle the input change */
  const handleChange = (event: SyntheticEvent<HTMLTextAreaElement>) => {
    const description = event.currentTarget.value;

    if (description.length > 0) {
      setInvalid(false);
    }

    setValue(description);
  };

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <Overlay onClick={onClose}>
      <DialogWrapper onClick={(e) => e.stopPropagation()}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          css={{ padding: '0.5rem 1rem' }}
        >
          <h1>{dialogTitle}</h1>

          <CloseButton onClick={onClose} aria-label="Close dialog">
            <MdClose />
          </CloseButton>
        </Box>

        <Box
          css={(theme) => ({
            minHeight: 200,
            maxHeight: 'calc(100vh - 200px)',
            overflowY: 'auto',
            padding: `${theme.spacing.small} ${theme.spacing.large}`,
          })}
        >
          <InputWrapper>
            <Label>{t('taskDescription')}*</Label>

            <StyledTextarea
              placeholder={t('taskDetailsPlaceholder')}
              rows={6}
              autoFocus
              onChange={handleChange}
              value={value}
              invalid={isInvalid}
            />
          </InputWrapper>
        </Box>

        <Box
          display="flex"
          justifyContent="flex-end"
          gap="1rem"
          css={(theme) => ({
            padding: `${theme.spacing.small} ${theme.spacing.small}`,
            borderTop: `1px solid ${theme.colors.border}`,
          })}
        >
          <ActionButton onClick={onCancel} variant="danger">
            {t('cancel')}
          </ActionButton>

          <Spacer />

          <ActionButton
            onClick={() => {
              if (value.length === 0) {
                setInvalid(true);
                return;
              }

              onSave(value);
            }}
            variant="success"
          >
            {t('save')}
          </ActionButton>
        </Box>
      </DialogWrapper>
    </Overlay>,
    document.body
  );
}
