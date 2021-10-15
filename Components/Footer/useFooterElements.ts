import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useSubMenuElements from "../Navigations/MainMenu/SubMenu/useSubMenuElements";

const useFooterElements = () => {
  const content = [
    {
      title: "footer:features",
      links: [],
    },
    {
      title: "Use Cases",
      links: [
        { label: "First", path: "/" },
        { label: "Second", path: "/" },
      ],
    },
    {
      title: "Education",
      links: [
        { label: "First", path: "/" },
        { label: "Second", path: "/" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "First", path: "/" },
        { label: "Second", path: "/" },
      ],
    },
  ];
  const features = useSubMenuElements();

  const makeFeatures = () => {
    features.forEach((group) => {
      const { rows } = group;
      rows.forEach((row) => {
        const { headline, link } = row;
        content[0].links.push({ label: headline, path: link });
      });
    });
  };

  makeFeatures();
  // const [footerContent, setFooterContent] = useState(content);

  return content;
};

export default useFooterElements;
