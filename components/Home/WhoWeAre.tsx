import Image from "next/image";

export default function WhoWeAre() {
  return (
    <div className="w-full h-[43rem] p-20 flex justify-between  ">
      <ul className=" flex flex-col gap-12  w-[calc(50%-5rem)]">
        {items.map((item, index) => (
          <li key={index}>
            <h5 className="text-xmd text-mainGray-600 font-semibold leading-28">
              {item.header}
            </h5>
            <p className="text-normal leading-30 text-mainGray-800">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
      <div className="image-border h-full aspect-square before:bg-mainGold-500 after:bg-mainGold-500 relative object-cover ">
        <Image
        fill
          src={"/imgs/whoWeAre.svg"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Who we are"
          className="object-cover "
          priority
        />
      </div>
    </div>
  );
}

const items = [
  {
    header: "מי אנחנו?",
    text: `
    .אנחנו קבוצה של סטודנטים, מילואימניקים, מורים, עובדים בהייטק, ועוד
    רבים המתנדבים לסייע לאחינו המפונים מהדרום והצפון
 `,
  },
  {
    header: "מה המטרה שלנו",
    text: `
    להעניק תמיכה חינוכית ולימודית למפונים מהדרום ומהצפון, לסייע
    בהתאקלמות 💙 .ולתת לכל תלמיד שעה של פוקוס`,
  },
  {
    header: "איך זה עובד",
    text: `
    אנחנו נתאם חיבור בין המתנדבים לתלמידים, ונקצה לכל תלמיד מורה פרטי
    שיספק לו שיעור פרטי אונליין במשך שעה אחת בשבוע, בנושא אחד שיבחר.`,
  },
];
