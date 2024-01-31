import { Dispatch, FC, ReactNode, SetStateAction, useCallback, useState } from 'react';
import { Button } from './Button';
import styled from '@emotion/styled';
import { CloseIcon } from '../Icons/CloseIcon';

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.colors.text};
  fill: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
`;

const Close = styled(CloseIcon)`
  width: 20px;
  height: 20px;
`;

type Props = {
  onOpen?: (prev: boolean) => void;
  onClose?: (prev: boolean) => void;
  onChange?: Dispatch<SetStateAction<boolean>>;
  initialState?: boolean;
  openIcon: ReactNode;
};

export const ToggleButton: FC<Props> = ({ initialState = false, onOpen, onClose, onChange, openIcon }) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const handleClick = useCallback(() => {
    const next = !isOpen;
    setIsOpen(next);
    next ? onOpen?.(isOpen) : onClose?.(isOpen);
    onChange?.(next);
  }, [isOpen]);

  return <StyledButton onClick={handleClick}>{isOpen ? <Close /> : openIcon}</StyledButton>;
};
