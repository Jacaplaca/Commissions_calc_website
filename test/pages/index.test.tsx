import {
  addI18nResources,
  initI18n,
  render,
  screen,
  act,
  waitFor,
} from "../test-utils";
import HomePage from "../../pages/index";
import Privacy from "../../pages/privacy";
import Terms from "../../pages/terms";

import Beauty from "../../pages/cases/beauty_salon";
import Dentist from "../../pages/cases/dentist";
import Distributor from "../../pages/cases/distributor";
import Packaging from "../../pages/cases/packing";
import Plantation from "../../pages/cases/plantation";
import ContactForm from "../../Components/Contact/form";
import { fireEvent } from "@testing-library/dom";

const INITIAL_TRANSLATION = {};
beforeAll(() => {
  initI18n(INITIAL_TRANSLATION);
});
afterEach(() => {
  // this would remove all existing translation and load initial one.
  addI18nResources(INITIAL_TRANSLATION);
});

describe("HomePage", () => {
  it("should render home page", async () => {
    render(<HomePage />);

    const logo = screen.getByRole("img", { name: /company_logo/i });
    expect(logo).toBeInTheDocument();

    const sliderFreeButton = screen.getByRole("button", {
      name: /getstartedfree/i,
    });
    expect(sliderFreeButton).toBeInTheDocument();

    const helpWithTitle = screen.getByRole("heading", {
      name: /helpWithMainTitle/i,
    });
    expect(helpWithTitle).toBeInTheDocument();

    const case1button = screen.getByRole("button", {
      name: /dentist/i,
    });
    expect(case1button).toBeInTheDocument();
  });
});

describe("Law pages", () => {
  it("should render privacy", async () => {
    render(<Privacy />);
    const logo = screen.getByRole("img", { name: /company_logo/i });
    expect(logo).toBeInTheDocument();
  });
  it("should render terms", async () => {
    render(<Terms />);
    const logo = screen.getByRole("img", { name: /company_logo/i });
    expect(logo).toBeInTheDocument();
  });
});

describe("Cases", () => {
  it("should render beauty", async () => {
    render(<Beauty />);
    const logo = screen.getByRole("img", { name: /company_logo/i });
    expect(logo).toBeInTheDocument();
  });
  it("should render dentist", async () => {
    render(<Dentist />);
    const logo = screen.getByRole("img", { name: /company_logo/i });
    expect(logo).toBeInTheDocument();
  });
});

describe("ContactForm", () => {
  it("should send contact and return success message", async () => {
    const emailAddress = "jacek@placek.com";
    const message = "sample message";
    render(<ContactForm />);
    const inputEmail = screen.getByPlaceholderText("contactEmail");
    const inputMessage = screen.getByPlaceholderText("contactMessage");
    const submitButton = screen.getByRole("button", { name: /contactSend/i });
    fireEvent.change(inputEmail, { target: { value: emailAddress } });
    fireEvent.change(inputMessage, { target: { value: message } });
    await act(async () => {
      fireEvent.click(submitButton);
    });
    const success = await waitFor(() => screen.getByText(/contactSent/i));
    expect(success).toBeInTheDocument();
  });
});
