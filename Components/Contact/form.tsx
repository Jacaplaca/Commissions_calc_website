import styled, { useTheme } from "styled-components";
import { FunctionComponent } from "react";
import { Input, Button, notification, Select } from "antd";
import { useForm, Resolver, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

const { Option } = Select;

const { TextArea } = Input;

type FormValues = {
  email: string;
  message: string;
  subject: string;
};

type Props = {};
const Wrapper = styled.section`
  flex: 0;
  display: flex;
  justify-content: center;
  width: 500px;
`;

const Form = styled.form`
  width: inherit;
  .buttons {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: flex-end; */
  /* flex: 0; */
`;

const SendButton = styled(Button)`
  border-radius: 10px;
`;

const Field = styled.div`
  .error {
    color: ${({ theme }) => theme.colors.palette.red.main};
    font-size: 0.75em;
    height: 15px;
    padding: 0;
    margin: 0;
    padding-left:10px;
    /* font-weight: bold; */
  }
  input,
  .ant-select-selector,
  .ant-input-affix-wrapper,
  textarea {
    border-radius: 10px!important;
    padding: 7px;
  }
  padding-bottom: 10px;
`;

const ContactForm: FunctionComponent<Props> = () => {
  const { t, i18n } = useTranslation("common");

  const validationSchema = yup.object({
    email: yup
      .string()
      .email(t("common:correctEmail"))
      .required(t("common:required")),
    message: yup.string().required(t("common:required")),
  });
  const resolver = yupResolver(validationSchema);

  const defaultValues = { email: "", message: "" };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    formState,
    reset,
    setValue,
  } = useForm<FormValues>({ resolver, defaultValues });

  const onSubmit = handleSubmit((data) => {
    // console.log(data);

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
      }
    })

    notification["success"]({
      message: t("contactSent"),
      description: t("contactAfterSend"),
      duration: 10,
    });
    // reset(defaultValues); // share the same reference
  });

  // function onChange(value) {
  //   console.log(`selected ${value}`);
  // }

  // function onBlur() {
  //   console.log("blur");
  // }

  // function onFocus() {
  //   console.log("focus");
  // }

  // function onSearch(val) {
  //   console.log("search:", val);
  // }

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        {/* <input {...register("firstName")} placeholder="Bill" /> */}
        <Field>
          <Controller
            control={control}
            name="email"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
            }) => (
              <Input
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                placeholder={t("contactEmail")}
              />
            )}
          />

          <p className="error">{errors?.email ? errors.email.message : ""}</p>
        </Field>
        <Field>
          <Controller
            control={control}
            name="message"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
            }) => (
              <TextArea
                placeholder={t("contactMessage")}
                allowClear
                onChange={onChange}
                value={value}
                autoSize={{ minRows: 6, maxRows: 6 }}
              />
            )}
          />

          <p className="error">
            {errors?.message ? errors.message.message : ""}
          </p>
        </Field>
        {/* <Field>
          <Controller
            control={control}
            name="subject"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
            }) => (
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            )}
          />

          <p className="error">
            {errors?.message ? errors.message.message : ""}
          </p>
        </Field> */}
        {/* <input {...register("lastName")} placeholder="Luo" /> */}
        <div className="buttons">
          <SendButton type="primary" htmlType="submit">
            {t("contactSend")}
          </SendButton>
        </div>
      </Form>
    </Wrapper>
  );
};
export default ContactForm;
