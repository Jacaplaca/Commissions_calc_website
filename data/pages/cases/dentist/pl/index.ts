const FOLDER = "cases/dentist";
const LANGUAGE = "pl";
const appName = process.env.NEXT_PUBLIC_APPNAME;

const dentistCasePage = `
<div className="image_container">
<img
  src="/pages/${FOLDER}/dentist.jpg"
  alt="add_buttons"
  className="one_image"
/>
</div>

Przed rozpoczęciem korzystania z ${appName} gabinet nie korzystał z żadnego specjalnego systemu prowizyjnego. Pracownicy byli wynagradzani tylko za czas spędzony w gabinecie + % od każdego klienta. Największym argumentem dla rozpoczęcia korzystania z ${appName} była dla właściciela możliwość dodania progów prowizyjnych i ustalenie różnych prowizji dla różnych usług tak aby uwzględnić ich realny wpływ na wyniki firmy. W końcu nie wszystko było tak samo opłacalne z punktu widzenia właściciela a nie miało to odbicia w płaconych prowizjach.  Transakcje są dodawane ręcznie przez osobę pracującą w recepcji. Przez pierwszy miesiąc ${appName} był wykorzystywany równolegle ze starym sposobem naliczania prowizji. Pracownicy mieli sami ustalić jak wolą być rozliczani i zadecydować, z którego systemu korzystać. Okazało się że pomimo bardziej skomplikowanego sposobu liczenia ${appName} przyjął się bardzo dobrze. Pracownicy jednogłośnie ocenili że wolą korzystać z nowego sposobu ponieważ codziennie mogą sprawdzić swoje wyniki. Dodatkowo nowe progi wprowadziły element grywalizacji, nie wspominając nawet o fakcie oszczędności czasu na liczeniu.


`;

export default dentistCasePage;
