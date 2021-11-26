import styled, { useTheme } from "styled-components";
import { FunctionComponent, RefObject, useEffect, useState } from "react";
import { CommentAltLinesSolid } from "../Icons";
import useOnScreen from "../../hooks/useOnScreen";
import ContactForm from "../Contact/form";

type Props = {
  refToChangeColor: RefObject<HTMLInputElement>;
};

const ContactButtonStyled = styled.button<{ isOpen: boolean }>`
  position: fixed;
  bottom: 30px;
  right: 40px;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  transition: all 0.2s ease-in;
  &:active {
    transform: scale(0.9);
  }
`;

const ContactWrapperStyled = styled.div<{ background: string; show: boolean }>`
  transition: all 0.35s ease-in-out;
  transform: ${({ show }) => (show ? "translateX(0px)" : "translateX(500px)")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  background: ${(props) => props.theme.colors.palette.orange.light};
  position: fixed;
  bottom: 20px;
  right: 0px;
  width: 310px;
  padding: 15px;
  padding-right: 32px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadows.contactForm};
  z-index: 1;
`;

const ContactWrapper = ({
  close,
  color,
  show,
}: {
  color: string;
  close: () => void;
  show: boolean;
}) => {
  return (
    <ContactWrapperStyled background={color} show={show}>
      {Boolean(show)}
      <ContactForm close={close} />
    </ContactWrapperStyled>
  );
};

const ContactButtonIcon = styled(CommentAltLinesSolid)<{ color: string }>`
  font-size: 2em !important;
  color: ${(props) => props.color};
`;

const ContactButton: FunctionComponent<Props> = ({ refToChangeColor }) => {
  const isVisible = useOnScreen(refToChangeColor, "-50px");
  const [contactIsOpen, setContactIsOpen] = useState(false);

  const handleOpenContact = () => {
    setContactIsOpen(true);
  };

  const handleCloseContact = () => {
    setContactIsOpen(false);
  };

  const theme = useTheme();
  const color = isVisible
    ? theme.colors.text.light
    : theme.colors.palette.darkBlue.main;

  return (
    <>
      <ContactButtonStyled onClick={handleOpenContact} isOpen={contactIsOpen}>
        <ContactButtonIcon color={color} />
      </ContactButtonStyled>
      <ContactWrapper
        close={handleCloseContact}
        color={color}
        show={contactIsOpen}
      />
    </>
  );
};

export default ContactButton;
