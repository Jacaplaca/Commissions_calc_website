import useCaseMenuElements from "../Cases/useCaseMenuElements";
import useSubMenuElements from "../Navigations/MainMenu/SubMenu/useSubMenuElements";

const useFooterElements = () => {
  const content = [
    {
      title: "footer:features",
      links: [],
    },
    {
      title: "common:casesMenuLabel",
      links: [],
    },
    // {
    //   title: "Education",
    //   links: [
    //     { label: "First", path: "/" },
    //     { label: "Second", path: "/" },
    //   ],
    // },
    {
      title: "Company",
      links: [
        { label: "First", path: "/" },
        { label: "Second", path: "/" },
      ],
    },
  ];
  const features = useSubMenuElements();
  const cases = useCaseMenuElements();

  const makeFeatures = () => {
    features.forEach((group) => {
      const { rows } = group;
      rows.forEach((row) => {
        const { headline, link } = row;
        content[0].links.push({ label: headline, path: link });
      });
    });
  };

  const makeCases = () => {
    cases.forEach((group) => {
      const { path, label } = group;
      content[1].links.push({ label, path });
    });
  };

  makeFeatures();
  makeCases();
  // const [footerContent, setFooterContent] = useState(content);

  return content;
};

export default useFooterElements;
