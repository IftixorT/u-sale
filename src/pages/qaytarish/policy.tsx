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
        title="Qaytarish siyosati"
        texts1={
          <>
            <p>
              <b>
                Siz 30 kun ichida hech qanday sabab ko'rsatmasdan buyurtmangizni
                bekor qilishga haqlisiz.
              </b>
            </p>
            <p>
              <b>
                Buyurtmani bekor qilish muddati - siz tovarni olgan kundan
                boshlab yoki siz tayinlagan uchinchi shaxs, tashuvchi bo'lmagan,
                yetkazib berilgan mahsulotni egallab olgan kundan boshlab 30
                kun.
              </b>
            </p>
            <p>
              Bekor qilish huquqidan foydalanish uchun siz o'z qaroringiz haqida
              aniq bayonot orqali bizga xabar berishingiz kerak.
            </p>
            <p>
              Qaroringiz haqida bizga support@studentco.uz elektron pochta
              orqali xabar berishingiz mumkin
            </p>
            <p>
              Qaytarilgan tovarlarni olgan kundan boshlab 30 kundan kechiktirmay
              sizga to'lovni qaytaramiz. Buyurtma uchun ishlatgan to'lov
              vositalaridan foydalanamiz va bunday to'lov uchun sizdan hech
              qanday to'lov olinmaydi.
            </p>
            <p>Qaytarilish shartlari:</p>
            <p>
              Tovarlarni qaytarib olish huquqiga ega bo'lishi uchun
              quyidagilarga ishonch hosil qiling:
            </p>
            <p>
              Tovarlar oxirgi 30 kun ichida sotib olingan Tovarlar asl qadoqda
              bo’lishi zarur. yoki tovarlarimizda biz tomondan keltirilgan
              jiddiy sabablar bo’lishi lozim: Notog’ri tovarlar Sifati buzilgan.
              Quyidagi tovarlarni qaytarib olinmaydi.
            </p>
            <p>
              Sizning hohish ixtiyoringizga ko’ra foydalanilgan, mahsulotda
              kamchilik bo’lmagan yoki siz tomondan yo’l qo’yilgan har qanday
              xato. Sizning spetsifikatsiyalaringizga muvofiq tayyorlangan yoki
              aniq moslashtirilgan tovarlarni etkazib berish. O'z tabiatiga
              ko'ra qaytarib berishga yaroqsiz bo'lgan tovarlarni etkazib
              berish, masalan, tez yomonlashadigan yoki yaroqlilik muddati
              tugagan tovarlar. Sog'liqni saqlash yoki gigiena nuqtai nazaridan
              qaytarish uchun yaroqsiz bo'lgan va etkazib berilgandan keyin
              muhrlangan tovarlarni etkazib berish. Yetkazib berilgandan keyin
              o'z tabiatiga ko'ra boshqa tovarlar bilan ajralmas aralashgan
              tovarlar yetkazib berish. Biz o'z ixtiyorimiz bilan yuqoridagi
              qaytarish shartlariga javob bermaydigan har qanday tovarni
              qaytarishni rad etish huquqini saqlab qolamiz.
            </p>
            <p>Tovarlarni qaytarish:</p>
            <p>
              Siz tovarni bizga qaytarish uchun xarajatlar va xavf uchun
              javobgarsiz. Tovarlarni quyidagi manzilga yuborishingiz kerak:
            </p>
            <p><a href="#">support@studentco.uz</a></p>
            <p>
              Biz qaytarib yuborilganda shikastlangan yoki yo'qolgan tovarlar
              uchun javobgar bo'la olmaymiz. Shuning uchun biz sug'urtalangan va
              kuzatilishi mumkin bo'lgan pochta xizmatini tavsiya qilamiz. Biz
              tovarni haqiqiy qabul qilmasdan yoki olingan qaytarilgan yetkazib
              berishni tasdiqlamasdan pulni qaytarib bera olmaymiz.
            </p>
            <p> Sovg'alar:</p>
            <p>
              Agar tovar sotib olinayotganda sovg'a sifatida belgilangan bo'lsa
              va to'g'ridan-to'g'ri sizga jo'natilgan bo'lsa, siz qaytarganingiz
              qiymati uchun sovg'a kreditini olasiz. Qaytarilgan mahsulot qabul
              qilingandan so'ng, sizga sovg'a sertifikati yuboriladi.
            </p>
            <p>
              Agar tovar sotib olayotganda sovg'a sifatida belgilanmagan bo'lsa
              yoki sovg'a beruvchi buyurtmani keyinroq sizga berish uchun o'ziga
              jo'natgan bo'lsa, biz to'lovni sovg'a beruvchiga yuboramiz.
            </p>
            <p>Biz bilan bog'lanish</p>
            <p>
              Qaytarish va to‘lovni qaytarish siyosatimiz bo‘yicha savollaringiz
              bo‘lsa, support@studentco.uz elektron pochta orqali biz bilan
              bog‘laning.
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
