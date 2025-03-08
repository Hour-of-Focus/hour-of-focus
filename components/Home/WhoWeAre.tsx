import Image from "next/image";
import ItemList from "../UI/ItemList";
import { WHO_WE_ARE_IMAGE } from "@/constants/images";

export default function WhoWeAre() {
  return (
    <div className="w-full px-20 medium:px-10 mobile:px-4 py-20 medium:py-10 flex mobile:flex-col-reverse mobile:h-fit medium:gap-6 mobile:gap-6 justify-around home-layout-who-we-are">
      <ItemList<{ header: string; text: string; _id: undefined }>
        listStyle=" flex flex-col gap-12 w-[calc(50%-5rem)] mobile:w-full"
        items={items}
        renderItem={(item) => (
          <WhoWeAreItem header={item.header} text={item.text} />
        )}
      />

      <div className="image-border h-[32rem] medium:h-[26rem] mobile:h-64 mobile:w-[21.8rem] mobile:max-w-[calc(100%-.5rem)] aspect-square before:bg-mainGold-500 after:bg-mainGold-500 relative">
        <Image
          width={512}
          height={512}
          src={WHO_WE_ARE_IMAGE}
          alt="Who we are"
          className="object-cover h-full "
          priority
        />
      </div>
    </div>
  );
}

const items = [
  {
    _id: undefined,
    header: "מי אנחנו?",
    text: `
    .אנחנו קבוצה של סטודנטים, מילואימניקים, מורים, עובדים בהייטק, ועוד
    רבים המתנדבים לסייע לאחינו המפונים מהדרום והצפון
 `,
  },
  {
    _id: undefined,

    header: "מה המטרה שלנו",
    text: `הפרויקט פועל מתוך רוח של ערבות הדדית, במטרה להעניק תמיכה חינוכית ולימודית לתלמידים המפונים, לסייע בנחיתה רכה לאלו שכבר חזרו לבתיהם, ולאפשר לכל תלמיד שעה של פוקוס 💙.`,
  },
  {
    _id: undefined,

    header: "איך זה עובד",
    text: `
    אנחנו נתאם חיבור בין המתנדבים לתלמידים, ונקצה לכל תלמיד מורה פרטי
    שיספק לו שיעור פרטי אונליין במשך שעה אחת בשבוע, בנושא אחד שיבחר.`,
  },
];

const WhoWeAreItem = ({ header, text }: { header: string; text: string }) => {
  return (
    <li>
      <h5 className="medium:text-normal">{header}</h5>
      <p className="text-normal medium:text-[1rem] leading-30 text-mainGray-800">
        {text}
      </p>
    </li>
  );
};
