import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { Button } from '@/components';
import { GBIcon, PLIcon } from '@/components/Icons';
import { LANGUAGE, languageAtom } from '@/store';

const Wrapper = styled.div`
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  display: flex;
  gap: 5px;
  align-items: center;
`;

const StyledGBIcon = styled(GBIcon)``;

const StyledPLIcon = styled(PLIcon)``;

type Props = {};

export const LanguageSwitch: FC<Props> = ({}) => {
  const [language, setLanguage] = useRecoilState(languageAtom);

  const { i18n } = useTranslation();

  const handleClick = useCallback(() => {
    const next = language === LANGUAGE.EN ? LANGUAGE.PL : LANGUAGE.EN;

    setLanguage(next);
    i18n.changeLanguage(next);
  }, [language]);

  return (
    <Wrapper>
      <StyledButton onClick={handleClick}>
        {language === LANGUAGE.EN ? 'PL' : 'EN'}
        {language === LANGUAGE.EN ? <StyledPLIcon /> : <StyledGBIcon />}
      </StyledButton>
    </Wrapper>
  );
};
