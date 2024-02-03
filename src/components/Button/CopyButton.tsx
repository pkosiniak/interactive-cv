import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { Copy20Regular } from '@fluentui/react-icons';
import { FCC } from '@/types';
import { Button, ButtonProps } from './Button';

const TIMEOUT = 2000;

const RelativeWrapper = styled.div`
  position: relative;
`;

const StyledButton = styled(Button)``;

const Popup = styled.div`
  position: absolute;
  top: 0;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 3px;
  padding: 3px 5px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.8rem;
`;

type Props = ButtonProps & {
  textToCopy: string;
};

export const CopyButton: FCC<Props> = ({ textToCopy, children, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (isVisible)
      setTimeout(() => {
        setIsVisible(false);
      }, TIMEOUT);
  }, [isVisible]);

  const handleClick = useCallback(() => {
    navigator.clipboard.writeText(textToCopy);
    setIsVisible(true);
  }, [textToCopy]);

  return (
    <RelativeWrapper>
      <StyledButton onClick={handleClick} {...props}>
        <Copy20Regular />
      </StyledButton>

      {isVisible && <Popup>{t('copied')}</Popup>}
    </RelativeWrapper>
  );
};
