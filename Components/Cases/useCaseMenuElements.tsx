import {
  BoxOpenDuotone,
  BoxOpenRegular,
  CutDuotone,
  CutRegular,
  PhoneOfficeDuotone,
  PhoneOfficeRegular,
  ToothbrushDuotone,
  ToothbrushRegular,
  TractorDuotone,
  TractorRegular,
} from "../Icons/index";
import { useTranslation } from "next-i18next";
const appName = process.env.NEXT_PUBLIC_APPNAME;
const FOLDER = "/cases";

const useCaseMenuElements = () => {
  const { t } = useTranslation("common");

  const elements = [
    {
      label: t("distributor"),
      key: "distributor",
      Icon: PhoneOfficeRegular,
      IconTopMenu: PhoneOfficeDuotone,
      description: t("distributorDesc"),
      quote: t("distributorQuote"),
      path: `${FOLDER}/distributor`,
      more: t("distributorMore"),
    },
    {
      label: t("beauty_salon"),
      key: "beauty_salon",
      Icon: CutRegular,
      IconTopMenu: CutDuotone,
      description: t("beauty_salonDesc"),
      quote: t("beauty_salonQuote", { appName }),
      path: `${FOLDER}/beauty_salon`,
      more: t("beauty_salonMore"),
    },
    {
      label: t("dentist"),
      key: "dentist",
      Icon: ToothbrushRegular,
      IconTopMenu: ToothbrushDuotone,
      description: t("dentistDesc"),
      quote: t("dentistQuote", { appName }),
      path: `${FOLDER}/dentist`,
      more: t("dentistMore"),
    },
    {
      label: t("packing"),
      key: "packing",
      Icon: BoxOpenRegular,
      IconTopMenu: BoxOpenDuotone,
      description: t("packingDesc", { appName }),
      quote: t("packingQuote", { appName }),
      path: `${FOLDER}/packing`,
      more: t("packingMore"),
    },
    {
      label: t("plantation"),
      key: "plantation",
      Icon: TractorRegular,
      IconTopMenu: TractorDuotone,
      description: t("plantationDesc"),
      quote: t("plantationQuote", { appName }),
      path: `${FOLDER}/plantation`,
      more: t("plantationMore"),
    },
  ];

  return elements;
};

export default useCaseMenuElements;
