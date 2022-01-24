import React, { FC } from "react";
import { Container } from "../../..";
import { Flex, FlexItem50 } from "../../../common/global-style/global-style";
import { AdditionalSection, AdditionTitle } from "./additional.e";
import { AdditionalProps } from "./additional.t";
import Accordion from "../../../common/accordion/accordion";

// const sections = [
//   {
//     id: 1,
//     title: "Promo kod nima o’zi?",
//     info: "Internetda xarid qilgan har bir kishi xarid uchun to‘lovni amalga oshirishdan oldin “promo-kodni kiriting” maydoniga e’tibor bergan bo‘lishi kerak. Havolani bosish orqali siz promo-kodlar haqida hamma narsani bilib olasiz.",
//     urlText: "Promo-kodlar va kupon kodlari haqida ko'proq",
//     url: "#",
//   },
//   {
//     id: 2,
//     title: "Xarid qilish bo'yicha maslahatlar",
//     info: "Internetda xarid qilgan har bir kishi xarid uchun to‘lovni amalga oshirishdan oldin “promo-kodni kiriting” maydoniga e’tibor bergan bo‘lishi kerak. Havolani bosish orqali siz promo-kodlar haqida hamma narsani bilib olasiz.",
//     urlText: "Promo-kodlar va kupon kodlari haqida ko'proq",
//     url: "#",
//   },
//   {
//     id: 3,
//     title: "Sovg'a sertifikatlari",
//     info: "Internetda xarid qilgan har bir kishi xarid uchun to‘lovni amalga oshirishdan oldin “promo-kodni kiriting” maydoniga e’tibor bergan bo‘lishi kerak. Havolani bosish orqali siz promo-kodlar haqida hamma narsani bilib olasiz.",
//     urlText: "Promo-kodlar va kupon kodlari haqida ko'proq",
//     url: "#",
//   },
// ];

const sections = [
  {
    id: 1,
    isReverse: true,
    title: "Promo kod nima o’zi?",
    info: "Internetda xarid qilgan har bir kishi xarid uchun to‘lovni amalga oshirishdan oldin “promo-kodni kiriting” maydoniga e’tibor bergan bo‘lishi kerak. Havolani bosish orqali siz promo-kodlar haqida hamma narsani bilib olasiz.",
    urlText: "Promo-kodlar va kupon kodlari haqida ko'proq",
    url: "#",
    batafsil: [
      "Chegimalar va Promo-kodlar nima? Chegirma tovarlar yoki xizmatlar uchun odatdagi narxdan pasayishni anglatadi. Chegirmaga misol - 10 foiz chegirma. ... Chegirma deb ta'riflangan narsaga misol sifatida odatdagi narxidan 50 foizga arzon sotilgan hamyon yoki dizaynerlik buyumlarini bozor narxlaridan pastroq narxlarda sotishga qaratilgan do'konni keltirish mumkin. Chegirma takliflari turli hil toifalar uchun mavjud bo’ladi. StudentCo bilan esa faqatgina Universitet yoki eng kamida kollej/litsey ta’lim olayotgan talabalargina chegirmalarga ega bo’lishi mumkin. Promo-kodlar - bu ma'lum bir kodni tashkil etuvchi harflar va raqamlar aralashmasi. Promo kodlar asosan bepul yetkazib berish yoki mahsulot va xizmatga chegirma olish uchun Promo - kodni taklif qilayotgan elektron tijorat veb-saytiga kiritish mumkin. StudentCo tizimida tepada keltirilgan har ikki bo’lim ishlaydi.",
    ],
  },
  {
    id: 2,
    title: "Xarid qilish bo'yicha maslahatlar",
    info: "Internetda xarid qilgan har bir kishi xarid uchun to‘lovni amalga oshirishdan oldin “promo-kodni kiriting” maydoniga e’tibor bergan bo‘lishi kerak. Havolani bosish orqali siz promo-kodlar haqida hamma narsani bilib olasiz.",
    urlText: "Xarid qilish bo'yicha maslahatlar haqida ko'proq",
    url: "#",
    isReverse: true,
    batafsil: [
      "Onlayn xaridlar uchun maslahatlar",
      "Onlayn xaridlar - bu internet yoki mobil ma'lumot ulanishi bilan istalgan joydan narxlarni solishtirish, savdolarni topish va pulni tejashning ajoyib usuli. Ammo uning mashhurligi oshgani sayin, xavf-xatarlar ham ortib bormoqda, ko'proq odamlar sizni pulingizni aldashga yoki kartangiz ma'lumotlarini o'g'irlashga harakat qilmoqda.Lekin siz bir nechta oddiy qoidalarga amal qilsangiz, mutlaqo xavfsiz onlayn xarid qilish tajribasiga ega bo'lishingiz mumkin.",
      "Bular har kuni foydalanishingiz mumkin bo'lgan xavfsiz onlayn xarid qilishning juda oddiy usullari:",
      "1.Ular qonuniy ekanligiga ishonch hosil qiling, onlayn sotuvchilarni ko’proq o'rganing.",
      "2.Veb-sayt xavfsiz ekanligiga ishonch hosil qiling. Odatda xavfsizligi mavjud bo’lmagan veb saytlarda “not secure” belgisi ko’rinib turadi.",
      "3.Huquqlaringizni va kompaniyaning qaytarish siyosatini o’rganib chiqing.",
      "4.Dasturiy ta'minot va virusdan himoyalanishni yangilab turing va shahsiy akkountlaringizga uchun kuchli parollardan foydalaning.",
      "5.Umumiy Wi-Fi tizimlaridan foydalanmang (Universitet, restaran, metro vk. Sizning shahsiy internet tarmog’ingiz xavfsizroq.",
      "6.Kredit karta yordamida ko’proq haridlarni amalga oshiring. Siz ko'proq himoyaga ega bo'lasiz. Yoki PayPal, Payme, Click kabi onlayn xizmatlardan foydalaning - firibgarlar sizning bank ma'lumotlaringizni qo'lga kirita olmaydi.",
      "7. E’tiborli va aqlli bo’ling. Agar sizga taklif etilayotgan hizmat yoki mahsulot ko’zingizga ishonchli va haqiqatga yaqin ko’rinsa, ehtimol shundaydir. Asosiy taklifimiz, Agar siz veb saytda yangi bo’lsangiz, bishlanishiga mahsulot sotuvchi internet do’konning arzonroq mahsulotini xarid qiling.",
    ],
  },
  {
    id: 3,
    key: 1,
    isReverse: true,
    title: "Sovg'a sertifikatlari",
    info: "Internetda xarid qilgan har bir kishi xarid uchun to‘lovni amalga oshirishdan oldin “promo-kodni kiriting” maydoniga e’tibor bergan bo‘lishi kerak. Havolani bosish orqali siz promo-kodlar haqida hamma narsani bilib olasiz.",
    urlText: "Sovg'a sertifikatlari haqida ko'proq",
    url: "",
    batafsil: ["ma'lumotlar yo'q"],
  },
];

const Additional: FC<AdditionalProps> = () => {
  return (
    <React.Fragment>
      <AdditionalSection>
        <Container>
          <Flex>
            {sections.map((section) => {
              return (
                <div>
                  <div className="container" key={section.id}>
                    <div className="row" >
                      <div className="col-md-4">

                        <AdditionTitle>{section.title}</AdditionTitle>
                        <p>{section.info}</p>
                        <a>{section.urlText}</a>
                        <Accordion items={section.batafsil} />

                      </div>
                    </div>
                  </div>
                  {/* <FlexItem50 key={section.id}>
                    <AdditionTitle>{section.title}</AdditionTitle>
                    <p className="info">{section.info}</p> */}
                  {/* <a href={section.urlText}>{section.urlText}</a> */}
                  {/* <Flex
                      className={!section.isReverse ? "flex reverse" : "flex"}
                    ></Flex>
                    <Accordion items={section.batafsil} />
                  </FlexItem50> */}
                </div>
              );
            })}
          </Flex>
        </Container>
      </AdditionalSection>

      {/* <AdditionalSection>
        <Container>
          <Flex>
            {sections.map((section) => {
              return (
                <FlexItem30 key={section.id}>
                  <AdditionTitle>{section.title}</AdditionTitle>
                  <p>{section.info}</p>
                  <a href={section.url}>{section.urlText}</a>
                </FlexItem30>
              );
            })}
          </Flex>
        </Container>
      </AdditionalSection> */}
    </React.Fragment>
  );
};

export default Additional;
