import { useTranslation } from "react-i18next";
import {
  AngleDownRegular,
  BellOnDuotone,
  BuildingDuotone,
  CogDuotone,
  CommentsAltDuotone,
  FileChartPieDuotone,
  MedalDuotone,
  SitemapDuotone,
  StopwatchDuotone,
  TachometerAltFastDuotone,
  TasksAltDuotone,
  UsersClassDuotone,
  UsersDuotone,
} from "../../../Icons";

const useSubMenuElements = () => {
  const { t } = useTranslation("subMenu");

  const elements = [
    {
      title: t("informed"),
      rows: [
        {
          Icon: BellOnDuotone,
          link: "/notifications",
          headline: t("notifications"),
          description: t("notificationsDesc"),
        },
        {
          Icon: CommentsAltDuotone,
          link: "/chat",
          headline: t("chat"),
          description: t("chatDesc"),
        },
        {
          Icon: FileChartPieDuotone,
          link: "/transactions",
          headline: t("transactions"),
          description: t("transactionsDesc"),
        },
        {
          Icon: MedalDuotone,
          link: "/rankings",
          headline: t("rankings"),
          description: t("rankingsDesc"),
        },
      ],
    },
    {
      title: t("config"),
      rows: [
        {
          Icon: SitemapDuotone,
          link: "/items",
          headline: t("items"),
          description: t("itemsDesc"),
        },
        {
          Icon: TasksAltDuotone,
          link: "/systems",
          headline: t("systems"),
          description: t("systemsDesc"),
        },
        {
          Icon: TachometerAltFastDuotone,
          link: "/thresholds",
          headline: t("thresholds"),
          description: t("thresholdsDesc"),
        },
        {
          Icon: CogDuotone,
          link: "/system_creator",
          headline: t("system_creator"),
          description: t("system_creatorDesc"),
        },
      ],
    },
    {
      title: t("additionals"),
      rows: [
        {
          Icon: StopwatchDuotone,
          link: "/timers",
          headline: t("timers"),
          description: t("timersDesc"),
        },
        {
          Icon: UsersClassDuotone,
          link: "/teams",
          headline: t("teams"),
          description: t("teamsDesc"),
        },
        {
          Icon: UsersDuotone,
          link: "/users",
          headline: t("users"),
          description: t("usersDesc"),
        },
        {
          Icon: BuildingDuotone,
          link: "/organizations",
          headline: t("organizations"),
          description: t("organizationsDesc"),
        },
      ],
    },
  ];

  return elements;
};

export default useSubMenuElements;
