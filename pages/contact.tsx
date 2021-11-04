import styled, { useTheme } from "styled-components";
import Layout from "../Components/Layout";
import { FunctionComponent } from "react";
import staticPropsInitialize from "../utils/staticPropsInitialize";

import { useTranslation } from "react-i18next";
import ContactForm from "../Components/Contact/form";
import antdBreakpoints from "../themes/antdBreakpoints";

type Props = {};
const Wrapper = styled.section`
  padding: 30px 0;
  @media ${antdBreakpoints.lgMax} {
    padding: 30px 30px;
  }
  flex: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  .title {
    font-size: 1.7em;
    padding: 20px 0;
    margin-bottom: 20px;
    font-weight: 700;
    text-align: center;
    color: ${({ theme }) => theme.colors.text.dark};
  }
  .content {
    display: flex;
    .contact__column1,
    .contact__column2 {
      width: 50%;
    }
    @media ${antdBreakpoints.lgMax} {
      width: 100%;
    }
    @media ${antdBreakpoints.mdMax} {
      flex-direction: column;
      width: 100%;
      gap: 25px 25px;
      .contact__column1,
      .contact__column2 {
        width: 100%;
      }
    }
    gap: 0 25px;
    width: ${({ theme }) => theme.sizes.pageWidth};
  }
`;

const ContactPage: FunctionComponent<Props> = () => {
  const { t, i18n } = useTranslation("common");
  const theme = useTheme();

  return (
    <Layout backgroundColor={theme.colors.palette.contact}>
      <Wrapper>
        <h2 className="title">{t("contactTitle")}</h2>
        <div className="content">
          <div className="contact__column1">
            <ContactForm />
          </div>
          <div className="contact__column2">
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
              officiis tempora, doloribus deserunt sed exercitationem modi
              quaerat, libero at eligendi neque iusto vitae! Et odit recusandae
              ab! Voluptates, nihil quia? Nemo maiores, earum in molestias
              quibusdam numquam itaque, cupiditate reiciendis illo nostrum
              expedita velit ab consequuntur amet ratione. Dignissimos in
              corrupti aspernatur numquam voluptatibus aliquam aperiam
              perferendis ipsum nulla ullam ipsa voluptas maiores tempora
              quibusdam cum explicabo veritatis consequuntur accusamus, quaerat
              nostrum rerum facere, aliquid eos velit! Sint blanditiis soluta
              natus rerum, ad cum dolore enim. Rerum cum velit asperiores
              mollitia, vero dignissimos veritatis reiciendis pariatur delectus
              voluptas! Facere, minus.
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export const getServerSideProps = staticPropsInitialize;
export default ContactPage;
