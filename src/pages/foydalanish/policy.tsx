import { FC } from "react";
import { NavBar } from "../../components";
import Footer from "../../components/common/footer/footer";
import Story from "../../components/common/story/story";
import TopButton from "../../components/common/top-button/top-button";
import { PolicyProps } from "./policy.t";

const Policy: FC<PolicyProps> = () => {
  return (
    <>
      <NavBar userExist={false} bg="#fafafa" isLanding={true} />
      <Story
        title="Foydalanish shartlari"
        texts1={
          <>
            <p>
              <b>studentco ga xush kelibsiz!</b>
            </p>
            <p>
              <b>
                Ushbu shartlar www.studentco.uz manzilida joylashgan Studentco
                veb-saytidan foydalanish qoidalari va qoidalarini belgilaydi.
              </b>
            </p>
            <p>
              Ushbu veb-saytga kirish orqali siz ushbu foydalanish shartlarini
              qabul qilasiz deb hisoblaymiz. Agar siz ushbu sahifada
              ko'rsatilgan barcha foydalanish shartlaridan qabul qilishga rozi
              bo'lmasangiz studentco-dan foydalanishni davom ettirmang.
            </p>
            <h4> Cookie fayllari:</h4>
            <p>
              Veb-sayt sizning onlayn tajribangizni shaxsiylashtirishga yordam
              berish uchun cookie-fayllardan foydalanadi. studentco-ga kirish
              orqali siz kerakli cookie-fayllardan foydalanishga rozilik
              bildirgansiz.
            </p>

            <p>
              Cookie - bu veb-sahifa serveri tomonidan qattiq diskingizga
              joylashtirilgan matnli fayl. Cookie-fayllardan dasturlarni ishga
              tushirish yoki kompyuteringizga virus yetkazish uchun
              foydalanilmaydi. Cookie-fayllar sizga noyob tarzda tayinlangan va
              faqat sizga cookie-faylni bergan domendagi veb-server tomonidan
              o'qilishi mumkin.
            </p>
            <p>
              Biz veb-saytimizni ishlatish uchun statistik yoki marketing
              maqsadlarida ma'lumotlarni to'plash, saqlash va kuzatish uchun
              cookie-fayllardan foydalanishimiz mumkin. Siz ixtiyoriy
              cookie-fayllarni qabul qilish yoki rad etish imkoniyatiga egasiz.
              Veb-saytimizning ishlashi uchun zarur bo'lgan ba'zi bir talab
              qilinadigan cookie-fayllar mavjud. Ushbu cookie fayllari sizning
              roziligingizni talab qilmaydi, chunki ular har doim ishlaydi.
              Yodda tutingki, kerakli cookie-fayllarni qabul qilish orqali siz
              uchinchi tomon cookie-fayllarini ham qabul qilasiz, agar siz
              bizning veb-saytimizda bunday xizmatlardan foydalansangiz,
              uchinchi tomon tomonidan taqdim etilgan xizmatlar orqali
              ishlatilishi mumkin, masalan, uchinchi shaxslar tomonidan taqdim
              etilgan va o'rnatilgan videoni ko'rsatish oynasi. bizning
              veb-saytimizga.
            </p>
            <h4> Litsenziya:</h4>
            <p>
              Agar boshqacha ko'rsatilmagan bo'lsa, Studentco va/yoki uning
              litsenziya beruvchilari studentco haqidagi barcha materiallar
              uchun intellektual mulk huquqlariga ega. Barcha intellektual mulk
              huquqlari himoyalangan. Siz buni studentco'dan shaxsiy
              foydalanishingiz uchun ushbu shartlar va shartlarda o'rnatilgan
              cheklovlarga rioya qilgan holda kirishingiz mumkin.
            </p>

            <p>Siz qilmasligingiz kerak:</p>
            <p>
              Studentco-dan materialni nusxalash yoki qayta nashr qilish
              Studentco-dan materialni sotish, ijaraga berish yoki
              sub-litsenziyaga berish Studentco-dan materialni ko'paytirish,
              ko'paytirish yoki nusxalash Studentco kontentini qayta tarqating
              Ushbu Shartnoma imzolangan kundan boshlanadi.
            </p>

            <p>
              Ushbu veb-saytning ayrim qismlari foydalanuvchilarga veb-saytning
              ma'lum sohalarida fikr va ma'lumotlarni joylashtirish va almashish
              imkoniyatini beradi. Studentco sharhlarni veb-saytda mavjud
              bo'lgunga qadar filtrlamaydi, tahrirlamaydi, nashr etmaydi yoki
              ko'rib chiqmaydi. Sharhlar Studentco, uning agentlari va/yoki
              filiallarining qarashlari va fikrlarini aks ettirmaydi. Sharhlar
              o'z qarashlari va fikrlarini joylashtirgan shaxsning qarashlari va
              fikrlarini aks ettiradi. Amaldagi qonunlar tomonidan ruxsat
              etilgan darajada, Studentco Sharhlar yoki ushbu sharhlardan har
              qanday foydalanish va/yoki e'lon qilish va/yoki ko'rinishi
              natijasida etkazilgan va/yoki ko'rilgan har qanday javobgarlik,
              zarar yoki xarajatlar uchun javobgar bo'lmaydi. veb-sayt.
            </p>
            <p>
              {" "}
              Studentco barcha Sharhlarni kuzatish va nomaqbul, haqoratomuz yoki
              ushbu Shartlarning buzilishiga olib keladigan har qanday
              Sharhlarni olib tashlash huquqini o'zida saqlab qoladi.
            </p>
            <h4>Siz quyidagilarni kafolatlaysiz va tasdiqlaysiz:</h4>
            <p>
              <ul>
                <li>
                  Siz sharhlaringizni bizning veb-saytimizda joylashtirish
                  huquqiga egasiz va buning uchun barcha zarur litsenziyalar va
                  roziliklarga egasiz;
                </li>
                <li>
                  {" "}
                  Sharhlar hech qanday intellektual mulk huquqiga, jumladan,
                  cheklanmagan holda mualliflik huquqi, patent yoki uchinchi
                  tomonning savdo belgisiga daxl qilmaydi;
                </li>
                <li>
                  Sharhlarda har qanday tuhmat, tuhmat, haqoratli, odobsiz yoki
                  boshqa noqonuniy materiallar mavjud emas, bu shaxsiy hayotga
                  tajovuzdir.
                </li>
                <li>
                  Sharhlar biznes yoki odatiy yoki tijorat faoliyati yoki
                  noqonuniy faoliyatni taklif qilish yoki targ'ib qilish uchun
                  ishlatilmaydi.
                </li>
              </ul>
            </p>
            <p>
              Siz shu bilan Studentco-ga har qanday va barcha shakllarda,
              formatlarda yoki ommaviy axborot vositalarida Sharhlaringizdan
              foydalanish, ko'paytirish va tahrirlash uchun foydalanish,
              ko'paytirish, tahrirlash va boshqalarga ruxsat berish uchun
              noeksklyuziv litsenziya berasiz.
            </p>
            <h4>Kontentimizga giperhavola:</h4>
            <p>
              Quyidagi tashkilotlar bizning veb-saytimizga oldindan yozma
              ruxsatisiz havola qilishi mumkin:
            </p>
            <p>
              <ul>
                <li> Davlat organlari;</li>
                <li>Qidiruv tizimlari;</li>
                <li>Axborot tashkilotlari;</li>
              </ul>
            </p>
            <p>
              Onlayn ma'lumotnoma distribyutorlari bizning veb-saytimizga boshqa
              ro'yxatdagi korxonalarning veb-saytlariga giperhavola berganidek
              ulanishi mumkin; va Tizim bo'ylab akkreditatsiyalangan korxonalar,
              notijorat tashkilotlari, xayriya savdo markazlari va xayriya
              mablag'larini yig'ish guruhlarini so'rashdan tashqari, bizning
              veb-saytimizga havola qila olmaydi.
            </p>
            <p>
              Ushbu tashkilotlar bizning bosh sahifamizga, nashrlarga yoki
              boshqa veb-sayt ma'lumotlariga havola qilishlari mumkin, agar
              havola: (a) hech qanday tarzda aldamchi bo'lmasa; (b) soxta
              homiylik, ma'qullash yoki bog'lovchi tomon va uning mahsulotlari
              va/yoki xizmatlarini tasdiqlashni nazarda tutmaydi; va (c)
              bog'lovchi tomonning sayti kontekstiga mos keladi.
            </p>
            <h4>
              Biz quyidagi turdagi tashkilotlarning boshqa havola soʻrovlarini
              koʻrib chiqishimiz va tasdiqlashimiz mumkin:
            </h4>
            <p>
              <ul>
                <li>
                  {" "}
                  keng tarqalgan iste'molchi va/yoki biznes axborot manbalari;
                  dot.com hamjamiyat saytlari;
                </li>
                <li>
                  xayriya tashkilotlarini ifodalovchi uyushmalar yoki boshqa
                  guruhlar;
                </li>
                <li>onlayn katalog distribyutorlari;</li>
                <li>internet portallari;</li>
                <li>
                  buxgalteriya, huquq va konsalting firmalari; va ta'lim
                  muassasalari va savdo birlashmalari.
                </li>
              </ul>
            </p>
            <h4>
              Quyidagilarga qaror qilsak, biz ushbu tashkilotlarning havola
              soʻrovlarini maʼqullaymiz:
            </h4>
            <p>
              <ul>
                <li>
                  (a) havola bizni oʻzimizga yoki akkreditatsiyadan oʻtgan
                  korxonalarimizga salbiy taʼsir koʻrsatmaydi;
                </li>
                <li>
                  (b) tashkilotning bizda hech qanday salbiy yozuvlari yo'q;{" "}
                </li>
                <li>
                  (c) giperhavolaning ko'rinishidan biz uchun foyda Studentco
                  yo'qligini qoplaydi;
                </li>
                <li>
                  (d) havola umumiy manba ma'lumotlari kontekstida bo'lsa.
                </li>
              </ul>
            </p>
            <h4>
              Ushbu tashkilotlar bizning bosh sahifamizga havola qilishlari
              mumkin:
            </h4>
            <p>
              <ul>
                <li>(a) hech qanday aldamchi bo'lmasa; </li>
                <li>
                  (b) soxta ravishda homiylik, ma'qullash yoki bog'lovchi tomon
                  va uning mahsulotlari yoki xizmatlarini tasdiqlashni nazarda
                  tutmaydi;{" "}
                </li>
                <li>(c) bog'lovchi tomonning sayti kontekstiga mos keladi.</li>
              </ul>
            </p>

            <p>
              Agar siz yuqoridagi 2-bandda sanab o'tilgan tashkilotlardan biri
              bo'lsangiz va bizning veb-saytimizga ulanishga qiziqsangiz,
              Studentco ga elektron pochta orqali xabar yuborishingiz kerak.
              Iltimos, ismingizni, tashkilotingiz nomini, aloqa ma'lumotlarini,
              shuningdek, saytingizning URL manzilini, veb-saytimizga havola
              qilmoqchi bo'lgan har qanday URL-manzillar ro'yxatini va
              saytimizdagi siz kirmoqchi bo'lgan URL-manzillar ro'yxatini
              kiriting. Biz havolaNi tez ko’rib chiqamiz 2-3 kun oralig’ida.
            </p>
            <p>
              Tasdiqlangan tashkilotlar bizning veb-saytimizga quyidagi tarzda
              havola qilishi mumkin:
            </p>
            <p>
              Bizning korporativ nomimizdan foydalangan holda; yoki Bog'langan
              yagona resurs lokatoridan foydalanish orqali; yoki Bizning
              veb-saytimizga bog'langan har qanday boshqa tavsifdan foydalanish
              bog'langan tomonning saytidagi kontentning konteksti va formatida
              mantiqiy bo'ladi. Savdo belgisi litsenziya shartnomasi mavjud
              bo'lmasa, bog'lash uchun Studentco logotipi yoki boshqa san'at
              asarlaridan foydalanishga ruxsat berilmaydi.
            </p>
            <h4>Kontent javobgarligi:</h4>
            <p>
              Biz sizning veb-saytingizda paydo bo'ladigan har qanday kontent
              uchun javobgar emasmiz. Siz veb-saytingizda ko'tarilgan barcha
              da'volarga qarshi bizni himoya qilishga va himoya qilishga rozilik
              bildirasiz. Har qanday veb-saytda tuhmat, odobsiz yoki jinoiy deb
              talqin qilinishi mumkin bo'lgan yoki uchinchi shaxslarning
              huquqlarini buzadigan, boshqa tarzda buzadigan yoki buzilishini
              yoki boshqa buzilishini himoya qiladigan hech qanday havola (lar)
              ko'rsatilmasligi kerak.
            </p>
            <p>Huquqlarni saqlash:</p>
            <p>
              Biz veb-saytimizga barcha havolalarni yoki har qanday alohida
              havolani olib tashlashingizni so'rash huquqini o'zida saqlab
              qolamiz. Siz so'rov bo'yicha bizning veb-saytimizga barcha
              havolalarni darhol olib tashlashni ma'qullaysiz.
            </p>
            <p>
              Shuningdek, biz istalgan vaqtda ushbu shartlar va shartlarni va
              uning bog'lash siyosatini o'zgartirish huquqini saqlab qolamiz.
              Bizning veb-saytimizga doimiy ravishda ulanish orqali siz ushbu
              ulanish shartlari va shartlariga bog'lanishga rozilik bildirasiz.
            </p>
            <h4> Saytimizdan havolalarni olib tashlash:</h4>
            <p>
              {" "}
              Agar siz bizning veb-saytimizda biron bir sababga ko'ra haqoratli
              bo'lgan havolani topsangiz, istalgan vaqtda biz bilan
              bog'lanishingiz va xabardor qilishingiz mumkin. Biz havolalarni
              o'chirish bo'yicha so'rovlarni ko'rib chiqamiz, lekin biz sizga
              to'g'ridan-to'g'ri javob berishga majbur emasmiz.
            </p>
            <p>
              {" "}
              Biz ushbu veb-saytdagi ma'lumotlarning to'g'riligiga ishonch hosil
              qilmaymiz. Biz uning to'liqligi yoki to'g'riligiga kafolat
              bermaymiz, shuningdek, veb-sayt mavjud bo'lib qolishiga yoki
              veb-saytdagi materiallar yangilanib turishiga kafolat bermaymiz.
            </p>
            <h4> Rad etish:</h4>
            <p>
              Amaldagi qonunlar tomonidan ruxsat etilgan maksimal darajada biz
              veb-saytimizga va ushbu veb-saytdan foydalanishga tegishli barcha
              vakillik, kafolatlar va shartlarni istisno qilamiz.
            </p>
            <h4>Ushbu rad etishda hech narsa:</h4>
            <p>
              <ul>
                <li>
                  o'lim yoki shaxsiy jarohatlar uchun bizning yoki sizning
                  javobgarligingizni cheklash yoki istisno qilish;
                </li>
                <li>
                  firibgarlik yoki yolg‘on ma’lumot uchun bizning yoki sizning
                  javobgarligingizni cheklash yoki istisno qilish;
                </li>
                <li>
                  amaldagi qonunchilikda ruxsat etilmagan har qanday tarzda
                  bizning yoki sizning majburiyatlaringizni cheklash; yoki
                  amaldagi qonunchilikka binoan chiqarib tashlanmasligi mumkin
                  bo'lgan har qanday bizning yoki sizning majburiyatlaringizni
                  istisno qiling.
                </li>
              </ul>
            </p>

            <p>
              Ushbu bo'limda va ushbu rad etishning boshqa joylarida belgilangan
              javobgarlik cheklovlari va taqiqlari:
            </p>
            <p>
              <ul>
                <li>(a) oldingi bandga bo'ysunadi; </li>
                <li>
                  (b) rad etish bo'yicha yuzaga keladigan barcha
                  majburiyatlarni, shu jumladan shartnoma, huquqbuzarlik va
                  qonun bilan belgilangan majburiyatlarni buzganlik uchun kelib
                  chiqadigan majburiyatlarni boshqaradi.
                </li>
              </ul>
            </p>
            <p>
              Veb-sayt va veb-saytdagi ma'lumotlar va xizmatlar bepul taqdim
              etilgan ekan, biz har qanday yo'qotish yoki har qanday tabiatdagi
              zarar uchun javobgar bo'lmaymiz.
            </p>
            
          </>
        }
        warning={<></>}
        subtitle=""
        texts2={<></>}
      />
      <TopButton />
      <Footer />
    </>
  );
};

export default Policy;
