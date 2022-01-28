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
        title="Xavfsizlik siyosati"
        texts1={
          <>
            <p>
              <b>
                www.studentco.uz veb-sayti StudentCo kompaniyasiga tegishli
                bo'lib, u sizning shaxsiy ma'lumotlaringiz nazoratchisi
                hisoblanadi.
              </b>
            </p>
            <p>
              <b>
                Biz ushbu Maxfiylik siyosatini qabul qildik, u www.studentco.uz
                saytida to'plangan ma'lumotlarni qanday qayta ishlashimizni
                belgilaydi, shuningdek, siz haqingizda ma'lum shaxsiy
                ma'lumotlarni to'plashimiz sabablarini ham ko'rsatadi. Shuning
                uchun www.studentco.uz veb-saytidan foydalanishdan oldin ushbu
                Maxfiylik siyosati bilan tanishib chiqishingiz kerak.
              </b>
            </p>
            <p>
              Biz sizning shaxsiy ma'lumotlaringizga g'amxo'rlik qilamiz va
              ularning maxfiyligi va xavfsizligini kafolatlashga majburmiz.
            </p>
            <p>Biz to'playdigan shaxsiy ma'lumotlar:</p>
            <p>
              <a href="#">www.studentco.uz</a> saytiga tashrif buyurganingizda, biz avtomatik
              ravishda qurilmangiz haqidagi maʼlum maʼlumotlarni, jumladan,
              veb-brauzeringiz, IP manzilingiz, vaqt mintaqasi va qurilmangizda
              oʻrnatilgan baʼzi cookie-fayllar haqidagi maʼlumotlarni
              toʻplaymiz. Bundan tashqari, siz Saytni ko'rib chiqayotganingizda,
              biz siz ko'rgan alohida veb-sahifalar yoki mahsulotlar, qaysi
              veb-saytlar yoki qidiruv so'zlari sizni Saytga havola qilganligi
              va Sayt bilan qanday munosabatda bo'lishingiz haqida ma'lumot
              to'playmiz. Biz ushbu avtomatik to'plangan ma'lumotni "Qurilma
              haqida ma'lumot" deb nomlaymiz. Bundan tashqari, shartnomani
              bajarish uchun ro'yxatdan o'tish paytida bizga taqdim etgan
              shaxsiy ma'lumotlarni (jumladan, Ism, Familiya, Manzil, to'lov
              ma'lumotlari va boshqalar) to'plashimiz mumkin.
            </p>
            <p>Nima uchun maʼlumotlaringizni qayta ishlaymiz?</p>
            <p>
              Bizning ustuvor vazifamiz mijozlar ma'lumotlari xavfsizligidir va
              shuning uchun biz faqat minimal foydalanuvchi ma'lumotlarini qayta
              ishlashimiz mumkin, faqat veb-saytni saqlash uchun zarur bo'lgan
              darajada. Avtomatik ravishda to'plangan ma'lumotlardan faqat
              suiiste'mollikning mumkin bo'lgan holatlarini aniqlash va
              veb-saytdan foydalanish bo'yicha statistik ma'lumotlarni o'rnatish
              uchun foydalaniladi. Ushbu statistik ma'lumotlar tizimning har
              qanday aniq foydalanuvchisini identifikatsiyalashi mumkin bo'lgan
              tarzda yig'ilmagan.
            </p>
            <p>
              {" "}
              Siz veb-saytga kimligingizni aytmasdan yoki biron bir ma'lumotni
              oshkor qilmasdan tashrif buyurishingiz mumkin, bu orqali kimdir
              sizni aniq, aniqlanishi mumkin bo'lgan shaxs sifatida aniqlashi
              mumkin. Agar siz veb-saytning ba'zi xususiyatlaridan
              foydalanmoqchi bo'lsangiz yoki bizning axborot byulletenimizni
              olishni yoki shaklni to'ldirish orqali boshqa ma'lumotlarni taqdim
              qilmoqchi bo'lsangiz, bizga elektron pochtangiz, ismingiz,
              familiyangiz, shaharingiz kabi shaxsiy ma'lumotlarni taqdim
              etishingiz mumkin. yashash joyi, tashkilot, telefon raqami. Siz
              o'zingizning shaxsiy ma'lumotlaringizni bizga taqdim qilmaslikni
              tanlashingiz mumkin, ammo keyin veb-saytning ba'zi
              xususiyatlaridan foydalana olmasligingiz mumkin. Masalan, siz
              bizning axborot byulletenimizni ololmaysiz yoki biz bilan bevosita
              veb-sayt orqali bog'lana olmaysiz. Qaysi ma'lumotlar majburiy
              ekanligiga ishonchi yo'q foydalanuvchilar info@studentco.uz orqali
              biz bilan bog'lanishlari mumkin.
            </p>
            <p>Sizning huquqlaringiz:</p>
            <p>
              Agar siz Evropada rezident bo'lsangiz, shaxsiy ma'lumotlaringiz
              bilan bog'liq quyidagi huquqlarga egasiz:
            </p>
            <p>
              <ul>
                <li>Axborot olish huquqi.</li>
                <li>Kirish huquqi.</li>
                <li>Tuzatish huquqi.</li>
                <li> Yo'q qilish huquqi.</li>
                <li>Qayta ishlashni cheklash huquqi.</li>
                <li> Ma'lumotlarni ko'chirish huquqi.</li>
                <li>E'tiroz bildirish huquqi.</li>
                <li>
                  Avtomatlashtirilgan qarorlar qabul qilish va profillash bilan
                  bog'liq huquqlar.
                </li>
              </ul>
            </p>
            <p>
              {" "}
              Agar siz ushbu huquqdan foydalanmoqchi bo'lsangiz, quyidagi aloqa
              ma'lumotlari orqali biz bilan bog'laning.
            </p>
            <p>
              Bundan tashqari, agar siz Evropada rezident bo'lsangiz, biz
              sizning ma'lumotlaringizni siz bilan tuzilgan shartnomalarni
              bajarish (masalan, Sayt orqali buyurtma bergan bo'lsangiz) yoki
              boshqa yo'l bilan sanab o'tilgan qonuniy biznes manfaatlarimizni
              amalga oshirish maqsadida qayta ishlanayotganimizni ta'kidlaymiz.
              yuqorida. Bundan tashqari, maʼlumotlaringiz Yevropadan, jumladan,
              Kanada va AQShdan tashqariga uzatilishi mumkinligini unutmang.
            </p>
            <p>Boshqa veb-saytlarga havolalar:</p>
            <p>
              Bizning veb-saytimizda bizga tegishli bo'lmagan yoki nazorat
              qilinmagan boshqa veb-saytlarga havolalar bo'lishi mumkin. Shuni
              yodda tutingki, biz boshqa veb-saytlar yoki uchinchi shaxslarning
              maxfiylik amaliyotlari uchun javobgar emasmiz. Biz sizni
              veb-saytimizni tark etganingizda va shaxsiy ma'lumotlarni
              to'plashi mumkin bo'lgan har bir veb-saytning maxfiylik
              bayonnomalarini o'qiyotganingizda xabardor bo'lishingizni tavsiya
              qilamiz.
            </p>

            <h3>Axborot xavfsizligi:</h3>
            <p>
              Biz kompyuter serverlarida taqdim etgan maʼlumotlaringizni
              boshqariladigan, xavfsiz muhitda, ruxsatsiz kirish, foydalanish
              yoki oshkor qilishdan himoyalangan holda himoya qilamiz. Biz
              shaxsiy ma'lumotlarni nazorat qilish va saqlashda ruxsatsiz
              kirish, foydalanish, o'zgartirish va oshkor qilishdan himoya
              qilish uchun oqilona ma'muriy, texnik va jismoniy himoya
              choralarini saqlaymiz. Biroq, Internet yoki simsiz tarmoq orqali
              ma'lumotlarni uzatish kafolatlanmaydi.
            </p>
            <h3>Huquqiy ma'lumot:</h3>
            <p>
              Biz to'plagan, ishlatadigan yoki oladigan har qanday ma'lumotni,
              agar qonun talab qilgan yoki ruxsat bergan bo'lsa, masalan,
              chaqiruv qog'ozi yoki shunga o'xshash huquqiy jarayonga rioya
              qilish uchun va bizning huquqlarimiz, xavfsizligimiz yoki
              xavfsizligimizni himoya qilish uchun oshkor qilish zarurligiga
              vijdonan ishonganimizda oshkor qilamiz. boshqalarning xavfsizligi,
              firibgarlikni tekshirish yoki hukumat so'roviga javob berish.
            </p>
            <p>Bog'lanish uchun ma'lumot:</p>
            <p>
              Agar siz ushbu Siyosat haqida koʻproq maʼlumot olish uchun biz
              bilan bogʻlanmoqchi boʻlsangiz yoki shaxsiy huquqlar va Shaxsiy
              maʼlumotlaringiz bilan bogʻliq har qanday masala boʻyicha biz
              bilan bogʻlanmoqchi boʻlsangiz, info@studentco.uz elektron pochta
              manziliga xat yuborishingiz mumkin.
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
