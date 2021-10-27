import styled, { useTheme } from "styled-components";
import Layout from "../Components/Layout";
import { FunctionComponent, useCallback } from "react";
import { Input } from "antd";
import staticPropsInitialize from "../utils/staticPropsInitialize";
import { useForm, Resolver, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

const { TextArea } = Input;

type FormValues = {
  email: string;
  message: string;
};

type Props = {};
const Wrapper = styled.section`
  flex: 0;
  display: flex;
  justify-content: center;
`;

const ContactPage: FunctionComponent<Props> = () => {
  const { t, i18n } = useTranslation("common");

  const validationSchema = yup.object({
    email: yup
      .string()
      .email(t("common:correctEmail"))
      .required(t("common:required")),
    message: yup.string().required("Required"),
  });
  const resolver = yupResolver(validationSchema);
  const theme = useTheme();

  const defaultValues = { email: "", message: "" };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormValues>({ resolver, defaultValues });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    reset(defaultValues); // share the same reference
  });

  return (
    <Layout backgroundColor={theme.colors.palette.contact}>
      <Wrapper>
        <form onSubmit={onSubmit}>
          {/* <input {...register("firstName")} placeholder="Bill" /> */}

          <Controller
            control={control}
            name="email"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
            }) => <Input onBlur={onBlur} onChange={onChange} value={value} />}
          />

          {errors?.email && <p>{errors.email.message}</p>}

          <Controller
            control={control}
            name="message"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
            }) => (
              <TextArea
                placeholder="textarea with clear icon"
                allowClear
                onChange={onChange}
                value={value}
              />
            )}
          />

          {errors?.message && <p>{errors.message.message}</p>}

          {/* <input {...register("lastName")} placeholder="Luo" /> */}

          <input type="submit" />
        </form>
      </Wrapper>
    </Layout>
  );
};

export const getServerSideProps = staticPropsInitialize;
export default ContactPage;
