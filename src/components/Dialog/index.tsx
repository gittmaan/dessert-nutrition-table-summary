import React, {
  useEffect,
} from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

interface DialogProps {
  children: any,
  onClose?: any,
  toggler: any,
}
const DialogStyle = styled.div.attrs({
  className: 'fixed flex items-center justify-center bg-light-gray'
})`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

const DialogContentStyle = styled.div.attrs({
  className: 'relative bg-white pa3 mw7 w-100 br3'
})``;

const dialogContainer = document.getElementById('dialog-container');

const Dialog = ({ children, onClose, toggler }: DialogProps) => {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        toggler()
      }
    }
    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [])

  return(
    createPortal(
      <DialogStyle>
        <DialogContentStyle>
          {children}
        </DialogContentStyle>
      </DialogStyle>,
      dialogContainer as HTMLElement
    )
  );
};

export default Dialog;