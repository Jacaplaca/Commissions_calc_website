import styled, { useTheme } from "styled-components";
import Layout from "../Components/Layout";
import { FunctionComponent } from "react";
import staticPropsInitialize from "../utils/staticPropsInitialize";

import { useTranslation } from "react-i18next";
import ContactForm from "../Components/Contact/form";

type Props = {};
const Wrapper = styled.section`
  padding: 30px 0;
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
  }
  .content {
    display: flex;
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
        <div className="title">{t("contactTitle")}</div>
        <div className="content">
          <ContactForm />
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
            officiis tempora, doloribus deserunt sed exercitationem modi
            quaerat, libero at eligendi neque iusto vitae! Et odit recusandae
            ab! Voluptates, nihil quia? Nemo maiores, earum in molestias
            quibusdam numquam itaque, cupiditate reiciendis illo nostrum
            expedita velit ab consequuntur amet ratione. Dignissimos in corrupti
            aspernatur numquam voluptatibus aliquam aperiam perferendis ipsum
            nulla ullam ipsa voluptas maiores tempora quibusdam cum explicabo
            veritatis consequuntur accusamus, quaerat nostrum rerum facere,
            aliquid eos velit! Sint blanditiis soluta natus rerum, ad cum dolore
            enim. Rerum cum velit asperiores mollitia, vero dignissimos
            veritatis reiciendis pariatur delectus voluptas! Facere, minus.
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export const getServerSideProps = staticPropsInitialize;
export default ContactPage;
