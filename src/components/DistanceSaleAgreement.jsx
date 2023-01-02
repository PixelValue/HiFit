import React from "react";
// import "././css/style.css";
import "./css/dsa.css";
import logo from "./images/logo.png";
import table_one from "./images/table1.png";
import table_two from "./images/table2.png";
import table_three from "./images/table3.png";
import app_stote from "./images/app_stote.png";
import play_store from "./images/google_play.png";
import hand from "./images/hand.png";
import aboutus from "./images/about-us.png";
import leftImg from "./images/leftimg.png";
import rightimg from "./images/right-img.png";
import one from "./images/one.png";
import two from "./images/two.png";
import three from "./images/three.png";
import exercise from "./images/exercise.png";
import dumble from "./images/dumble.png";
import dumble_des from "./images/hamer-discrip.png";
import comeon from "./images/comeon.png";
import runner from "./images/runner.png";
import weight from "./images/weight.png";
import instagram from "./images/instagram.png";
import linkdin from "./images/linkdin.png";
import twitter from "./images/twitter.png";
import ticktok from "./images/ticktok.png";
import footercard from "./images/footer-card.png";
import curveimage from "./images/curve-img.png";
import { useNavigate } from "react-router-dom";

const DistanceSaleAgreement = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* <!-- header --> */}
      <header>
        <nav className="navbar navbar-dark bg-transperent">
          <div className="container" />

          <div className="logo">
            <a href="/hifit">
              <img src={logo} />
            </a>
          </div>
          <div>
            <a href="">
              <span className="language-muted">TR</span>
              <span className="language-text"> / EN</span>
            </a>
          </div>
        </nav>
      </header>

      <div className="headerText1">
        <h4 className="text-white mt-5 "> MESAFELİ SATIŞ SÖZLEŞMESİ</h4>
        <p className="headerText1_des">
          Bu Sözleşme, ALICI (Tüketici)’nın, mobil cihazındaki uygulama ile
          işlem yaptığı halleri de kapsamak üzere SATICI’ya ait HİFİT APP
          elektronik ticaret internet sitesine (“İNTERNET SİTESİ”) sipariş
          vererek satın almak istediği aşağıda belirtilen ürün/hizmetlerin
          (“Ürün/Ürünler”) ALICI’ya satışı-teslimi ve diğer hususlara ilişkin
          olarak tarafların hak ve yükümlülüklerini düzenler. ALICI bu
          Sözleşme’yi İNTERNET SİTESİ’nde onayladıktan sonra, sipariş verdiği
          Ürün(ler)’in bedeli ve masrafları seçtiği ödeme yöntemi ile tahsil
          olunur.
        </p>
      </div>

      <div className="headerText2">
        <h5 className="text-white mt-4 ">Madde1: TARAFLAR</h5>
        <img src={table_one} alt="table1" className="table_one" />
      </div>

      <div className="headerText1">
        <h5 className="text-white mt-5 mb-3 ">
          Madde 2: SÖZLEŞME KONUSU ÜRÜN, FİYAT, ÖDEME VE TESLİMAT
        </h5>
        <p className="headerText1_des">
          Ürünlerin (malların/hizmetlerin) Cinsi ve Türü, Miktarı, Marka/Modeli/
          Rengi, Brim Fiyat(lar)ı ve Satış Bedeli ile Ödeme (tahsilat) Bilgileri
          ve ALICI’nın bildirdiği teslim yeri dahil Teslimat Bilgileri aşağıda
          belirtildiği gibidir. Teslimatı yapacak kargo firmasının ALICI’nın
          bulunduğu yerde şubesi olmadığı takdirde ALICI’nın SATICI tarafından
          bildirilecek bir diğer yakın şubesinden teslim alması gerekmektedir
          (Bu hususta ALICI’ya gerekli bilgilendirme, e-posta/mail, SMS veya
          telefonla yapılacaktır). Teslimat ile ilgili diğer konular
          Sözleşme’nin aşağıdaki 7. maddesinde belirtilmiştir.
        </p>

        <img src={table_two} alt="table1" className="table_two" />

        <div className="headerText2_para">
          <p className="headerText1_des mt-3">
            Ödeme (Tahsilat) Bilgileri<br></br>
            Ödeme Şekli-Aracı : (Kredi Kartı / KapıdaKredi Kartlı veya Nakit
            Tahsilat)<br></br>
            [Kart Tipi Visa ….<br></br>
            KartNumarası ….<br></br>
            Ödeme Kredi Kartı …<br></br>
            Kredi Kartına Taksit/TekÇekim .<br></br>
            Toplam Tutar … ]
          </p>
        </div>

        <img src={table_three} alt="table1" className="table_three" />
      </div>

      <div className="headerText1">
        <h5 className="text-white mt-4 mb-3 ">
          Madde 3- ALICI’NIN ÖNCEDEN BİLGİLENDİRİLDİĞİ HUSUSLAR
        </h5>

        <p className="headerText2_des">
            ALICI, aşağıdaki hususlarda, bu Sözleşme’nin ALICI tarafından
          İNTERNET SİTESİ’nde kabulü ile kurulmasından ve gerek siparişi, gerek
          ödeme yükümlülüğü altına girmesinden önce İNTERNET SİTESİ’nin ilgili
          sayfaları-kısımlarındaki tüm genel-özel açıklamaları görerek ve
          inceleyerek bilgilendiğini teyiden kabul eder. - SATICI’nın unvanı ve
          iletişim bilgileri ile güncel tanıtıcı bilgileri, - Ürün(ler)’in
          İNTERNET SİTESİ’nden alınması sırasındaki satış işlemi aşamaları ile
          yanlış girilen bilgilerin düzeltilmesine ilişkin amaca uygun
          araçlar-yöntemler, - SATICI’nın mensubu olduğu Meslek Odası
          (İTO-İstanbul Ticaret Odası) ve ITO’nun meslek ile ilgili öngördüğü
          davranış kuralları bilgisinin edinebileceği elektronik iletişim
          bilgileri (Telefon: 4440486, www.ito.org.tr) - SATICI tarafından
          uygulanan ALICI bilgileri için geçerli gizlilik, veri kullanımı-işleme
          ve ALICI’ya elektronik iletişim kuralları ile ALICI’nın bu hususlarda
          SATICI’ya verdiği izinler, ALICI’nın kanuni hakları, SATICI’nın
          hakları ve tarafların haklarını kullanım usulleri, - Ürünler için
          SATICI tarafından öngörülen gönderim kısıtlamaları, - Sözleşme konusu
          Ürün(ler) için SATICI tarafından kabul edilen ödeme yöntem-araçları
          ile Ürünler’in temel özellik-nitelikleri, vergiler dahil toplam fiyatı
          (ilgili masraflar da dahil olmak üzereALICI’nın SATICI’ya ödeyeceği
          toplam bedel), - Ürüler’in ALICI’ya teslimine ilişkin usuller ile
          nakliye-teslim-kargo masrafları hakkında bilgiler, - Ürünler ile
          ilgili diğer ödeme/tahsilat ve teslimat bilgileri ile Sözleşme’nin
          ifasına ilişkin bilgiler, bu hususlarda tarafların
          taahhüt-sorumlulukları, - ALICI’nın cayma hakkına sahip olmadığı
          Ürünler ve diğer mal-hizmetler, - ALICI’nın cayma hakkının olduğu
          durumlarda bu hakkını kullanma şartları, süresi ve usulü ile hakkın
          süresinde kullanılmaması durumunda ALICI’nın cayma hakkını
          kaybedeceği, - Cayma hakkı olan Ürünler’de, Ürün cayma süresi içinde
          kullanım talimatlarına, olağan işleyişine veya teknik özelliklerine
          uygun kullanılmamasından ötürü bozulduğu veya bir değişikliğe uğradığı
          takdirde ALICI’nın cayma talebinin kabul edilmeyebileceği ve her
          durumda SATICI’ya karşı sorumlu olacağı, SATICI’nın kabul ettiği
          hallerde söz konusu bozukluğa veya değişime göre uygun bulduğu bir
          tutarı ALICI’ya yapacağı geri ödemeden tenzil (mahsup) ile tahsil
          edebileceği, - Cayma hakkının bulunduğu durumlarda Ürünleri SATICI’ya
          ne şekilde iade edebileceği ve ilgili tüm mali hususlar (iade yolları,
          masrafı ve Ürün bedelinin iadesi ve iade sırasında ALICI tarafından
          kazanılmış/kullanılmış ödül puanları için yapılabilecek indirim ve
          mahsuplar dahil), - ALICI’nın tüzel kişi olması halinde, ticari ya da
          mesleki amaçlarla satın aldığı Ürünler için (örneğin toplu alımlar
          herhalükarda bu nitelikte sayılır) cayma hakkı başta olmak üzere
          “tüketici haklarını” kullanamayacağı, - Mahiyetine göre bu Sözleşme’de
          de yer alan diğer tüm satış şartları ile işbu Sözleşme ALICI
          tarafından İNTERNET SİTESİ’nde onaylanarak kurulduktan sonra ALICI’ya
          elektronik posta ile gönderildiğinden ALICI tarafından istenen süre
          ile saklanıp buradan erişilebileceği, SATICI’nın da üç yıl süre ile
          nezdinde saklayabileceği. - Uyuşmazlık hallerinde ALICI’nın SATICI’ya
          şikayetlerini iletebileceği iletişim bilgileri ile yasal başvurularını
          6502 Sayılı Kanun’un ilgili hükümlerine uygun olarak İlçe/İl Hakem
          Heyetlerine ve Tüketici Mahkemeleri’ne yapabileceği.
          <h5 className="text-white mt-4 mb-3 ">  Madde 4- CAYMAHAKKI </h5>
          ALICI Ürün’ü teslim aldığı tarihten itibaren ondört (14) gün içinde
          herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin bu
          Sözleşme’den cayma hakkına sahiptir. Ancak kanunen şu mal/hizmetlere
          ilişkin sözleşmelerde, kullanılmamış/istifade edilmemiş olsa dahi,
          cayma hakkı bulunmamaktadır : a) ALICI'nın özel istekleri veya onun
          kişisel ihtiyaçları doğrultusunda hazırlanan mallar (üzerinde
          değişiklik ya da ilaveler yapılarak kişiye/kişisel ihtiyaçlara özel
          hale getirilenler, ALICI siparişine istinaden yurt içinden veya
          dışından ithal/temin edilen özel Ürünler dahil) b) kozmetik vb.leri
          ile çikolata vb. gıda maddeleri gibi çabuk bozulabilen veya son
          kullanma tarihi geçebilecek mallar c) yine kozmetik, mayo, iç giyim
          mamülleri vb. teslimden sonra ambalaj, bant, mühür, paket gibi
          koruyucu unsurları açılmış ve iadesi sağlık-hijyen açısından uygun
          olmayan mallar d) teslimden sonra başka ürünlerle karışan ve doğası
          gereği ayrıştırılması mümkün olmayan mallar e) ambalaj, bant, mühür,
          paket gibi koruyucu unsurları açılmış kitap, CD, DVD, ses ve görüntü
          kayıtları, yazılımlar vb. digital içerikli her türlü ürünler ile
          bilgisayar sarf malzemeleri; vi) elektronik ortamda anında ifa edilen
          tüm hizmetler ve tüketiciye anında teslim edilen her türlü gayri maddi
          mallar f) fiyatı finansal piyasalardaki dalgalanmalara bağlı olarak
          değişen ve satıcı/sağlayıcının kontrolünde olmayan mal veya
          hizmetler, g) abonelik sözleşmesi kapsamında sağlananlar dışında,
          gazete ve dergi gibi süreli yayınlar h) belirli bir tarihte veya
          dönemde yapılması gereken, konaklama, eşya taşıma, araba kiralama,
          yiyecek-içecek tedariki ve eğlence veya dinlenme amacıyla yapılan boş
          zamanın değerlendirilmesi hizmeti i) ALICI onayı ile cayma hakkı
          süresi içinde ifasına başlanan hizmetler ve j) genel olarak ilgili
          mevzuat uyarınca mesafeli satış kapsamı dışında kabul edilen diğer
          mal-hizmetler ile ALICI'nın ticari/mesleki amaçla satın alma yaptığı
          haller. Cayma hakkı kullanımı mümkün olan hallerde, ALICI, cayma
          süresi içinde malı, işleyişine, teknik özelliklerine ve kullanım
          talimatlarına uygun bir şekilde kullanmadığı takdirde meydana gelen
          değişiklik ve bozulmalardan kanun gereği sorumludur. Buna göre, cayma
          tarihine kadarki süreçte Ürün'ün kullanım talimatlarına, teknik
          özelliklerine ve işleyişine uygun bir şekilde kullanılmamasından ötürü
          değişiklik veya bozulma olursa ALICI cayma hakkını kaybedebilir;
          SATICI tarafından kabul edildiği hallerde, iade edilecek Ürün
          bedelinden değişiklik / bozulma kadar indirim yapılır. Cayma hakkı
          bulunan hallerde ALICI'nın cayma hakkını kullandığına dair açık bir
          bildirimi yasal 14 günlük süre içinde SATICI'ya yöneltmiş (yukarıda
          belirtilen iletişim adreslerine sözlü/yazılı iletmiş) olması
          yeterlidir. Söz konusu hakkın süresi içerisinde kullanılması
          durumunda, Ürün'ün azami on (10) gün içerisinde, giderleri ALICI'ya
          ait olmak üzere SATICI'nın yukarıdaki adresine gönderilmesi
          zorunludur. INTERNET SİTESİ'nde ürün iadeleri için anlaşmalı kargo
          firması belirtilmiş ise, ALICI Ürün'ü bulunduğu İlçe dahilindeki veya
          harindeki bir şubesinden gönderebilir, bu takdirde ALICI'dan masraf
          alınmaz. Bu iade işleminde Ürün'ün kutusu, ambalajı, varsa standart
          aksesuarları ile birlikte eksiksiz ve hasarsız olarak teslim edilmesi
          gerekmektedir. Ayrıca vergi mevzuatı gereği, ALICI tarafından kanunen
          İade Faturası kesilmesi gereken hallerin yanı sıra Ürünle beraber iade
          edilecek olan fatura üzerinde, aşağıda belirtilen, iade ile ilgili
          bölüm doldurulup imzalanacaktır. Faturası kurumlar (tüzel kişiler)
          adına düzenlenen sipariş iadeleri, İade Faturası kesilmediği takdirde
          kabul edilmeyecektir). "Ürünün iade edileceği adres, SATICI adresi /
          iade için teslim olunan kargo firması adresi." Yukarıdaki belirtilen
          gereklerin ALICI tarafından yerine getirilmesi kaydı ile, cayma
          bildiriminin SATICI'ya ulaştığı tarihten itibaren 14 gün içinde, Ürün
          bedeli ve varsa Ürün'ün ALICI'ya teslim masrafları ALICI'ya, Ürün'ü
          satın alırken kullandığı ödeme aracına uygun bir şekilde iade edilir.
          ALICI'nın Ürünler'e ilişkin cayma süresi sonrasındaki kanuni
          hakları-sorumlulukları ile SATICI'nın ALICI'dan olan, ödül puanlarına
          ilişkin bulunları da kapsamak üzere akdi ve kanuni tahsil-mahsup
          hakları dahil hak ve yükümlülükleri ayrıca mevcut ve geçerlidir.
          <h5 className="text-white mt-4 mb-3 ">
            5 - ALICI'NIN SÖZLEŞME KONUSU ÜRÜNÜ SATIN ALIRKEN ÖDÜL PUANLARI
            KAZANDIĞI VE/VEYA ÖDÜL PUANLARI KULLANARAK SATICI'YA ÖDEME YAPTIĞI
            HALLERDE UYGULANACAK ÖZEL ŞARTLAR
          </h5>
          5.1. Ödül puanları vb.lerini kazandıran bir kuruluş ile ALICI ve
          SATICI arasında, ödül puanlarının SATICI'ya ait İNTERNET SİTESİ'nden
          alışverişlerde indirim vb. sağlamasına imkan veren cari bir
          anlaşmanın-sözleşmenin varlığında, ALICI, SATICI'nın söz konusu
          anlaşması ve keza kendisinin anılan kuruluş ile sözleşmesinin gereği
          olarak bu Sözleşme konusu alışverişi sebebi ile öyle bir ödül puanı
          kazanmış ise, işbu Sözleşme'den cayılması ve sair suretle
          feshi/sipariş iptali ile ALICI'ya bir geri ödeme yapılması mevzubahis
          olan hallerde, ALICI tarafından bu Sözleşme konusu satın alma ile
          kazanılmış ödül puanları, hediyeler ve benzerlerinin tutarı (parasal
          değeri) ALICI'dan geri alınır. Şöyleki; bu geri alma işlemi,
          SATICI'nın ilgili kuruluş ile anlaşmasında farklı bir yöntem
          öngörülmedikçe, ALICI'nın anılan kuruluş-sistem nezdinde (işbu
          Sözleşme konusu alışveriş ile kazanılmış ödül puanları hariç)
          yeterli-başka ödül puanı mevcut ise öncelikle o ödül puanlarından,
          mevcut değil ise SATICI'nın ALICI'ya iade edeceği bedelden nakden
          indirilerek (mahsup edilerek) yapılır 5.2. ALICI tarafından işbu
          Sözleşme konusu Ürün alışverişinde SATICI'ya ödeme kısmen/tamamen ödül
          puanları vb. ile yapılmış ise, bu suretle satın alınan Ürün'ün bu
          Sözleşme'nin ilgili hükümlerine göre Ürün bedeli ALICI'ya geri
          ödenecek biçimde iadesinin söz konusu olduğu hallerde, ALICI'nın
          Ürün'ü İNTERNET SİTESİ'nde satın alırken SATICI nezdindeki kullandığı
          ödül puanı ve benzerleri, SATICI'nın ilgili kuruluş ile farklı bir
          anlaşması olmadıkça, ALICI'ya (yine puan olarak) iade edilebilir. 5.3.
          ALICI tarafından herhangi bir surette haksız ödül puanı kazanımı veya
          kullanımının tespit edildiği durumlarda geçerli bir genel kural
          olarak, söz konusu ödül puanlarının parasal değeri-tutarı SATICI
          tarafından ALICI'dan (kredi kartından, nakden ve sair yasal yöntemler
          ile) tahsil olunabilecektir. Bu hüküm, öyle bir sistemin uygulaması
          neticesi SATICI tarafından ALICI'ya hediye verilen malların bedeli
          için de geçerlidir. 5.4. Ödül puanı ve benzerlerinin kazanım ve
          kullanım işlemleri ilgili diğer hususlar, söz konusu kuruluş ile ALICI
          ve SATICI arasındaki anlaşma-sözleşmelerin hükümlerine tabi olup,
          ilgili hallerde SATICI, gerek burada, gerek anılan
          sözleşme-anlaşmalarda belirli tüm hak-yetkileri ALICI ve kuruluş
          nezdinde kullanabilir, ilgili işlemleri belirtilen kuruluş ve/veya
          aynı sistemdeki diğer işyerleri adına ve/veya hesabına da
          yapabilir. 5.5. SATICI'dan kazanılan veya SATICI nezdinde kullanılan
          ödül puanları, hediye çekleri vb. mukabili nakdi para talepleri,
          hiçbir durumda ve surette kabul edilmez. 5.6. SATICI, ALICI ile
          yukarıda anılan kuruluşlar arasındaki ihtilaflar ile bunların herhangi
          bir maddi, hukuki, mali ve mali olmayan sonucu için hiçbir mesuliyet
          kabul etmemektedir; yukarıdaki hükümler geçerli ve saklıdır. 5.7.
          Yukarıdaki hükümler, varsa, Tüketici'nin doğrudan SATICI'dan edindiği
          ödül puanı kazanım ve kullanımlarında da kıyasen uygulanır. İNTERNET
          SİTESİ/SATICI'dan ödül puanı kazanan veya SATICI'ya ödemelerinde ödül
          puanı vb.lerini kullanan tüm tüketiciler, böylece ALICI, yukarıdaki
          özel şartları (da) kabul etmiş olmaktadır.
          <h5 className="text-white mt-4 mb-3 ">
            MADDE 6 -GÜVENLİK-GİZLİLİK, KİŞİSEL BİLGİLER,  ELEKTRONİK
            İLETİŞİMLER VE FİKRİ-SINAİ HAKLAR İLE İLGİLİ KURALLAR
          </h5>
          INTERNET SİTESİ'nde bilgilerin korunması, gizliliği,
          işlenmesi-kullanımı ve iletişimler ile diğer hususlarda aşağıda cari
          esasları belirtilen gizlilik kuralları-politikası ve şartlar
          geçerlidir. 6.1.ALICI tarafından İNTERNET SİTESİ'nde girilen
          bilgilerin ve işlemlerin güvenliği için gerekli önlemler, SATICI
          tarafındaki sistem altyapısında, bilgi ve işlemin mahiyetine göre
          günümüz teknik imkanları ölçüsünde alınmıştır. Bununla beraber, söz
          konusu bilgiler ALICI cihazından girildiğinden ALICI tarafında
          korunmaları ve ilgisiz kişilerce erişilememesi için, virüs ve benzeri
          zararlı uygulamalara ilişkin olanlar dahil, gerekli tedbirlerin
          alınması sorumluluğu ALICI'ya aittir. 6.2. ALICI'nın İNTERNET
          SİTESİ'ne üyeliği ve alışverişleri sırasında edinilen bilgileri
          SATICI, dahil olduğu grup şirketler bünyesindeki Beymen Perakende ve
          Tekstil Yatırımları A.Ş.,.(Beymen, Beymen Club) ve Beymen İç ve Dış
          Tic. A.Ş. ile her türlü bilgilendirme, reklam-tanıtım, promosyon,
          satış, pazarlama, mağaza kartı, kredi kartı ve üyelik uygulamaları
          amaçlı yapılacak elektronik ve diğer ticari-sosyal iletişimler için,
          belirtilenler ve halefleri nezdinde süresiz olarak veya öngörecekleri
          süre ile kayda alınabilir, basılı/manyetik arşivlerde saklanabilir,
          gerekli görülen hallerde güncellenebilir, paylaşılabilir,
          aktarılabilir, transfer edilebilir, kullanılabilir ve sair suretlerle
          işlenebilir. Bu veriler ayrıca kanunen gereken durumlarda ilgili Merci
          ve Mahkemelere iletilebilir. ALICI kişisel olan-olmayan mevcut ve yeni
          bilgilerinin, kişisel verilerin korunması hakkında mevzuat ile
          elektronik ticaret mevzuatına uygun biçimde yukarıdaki kapsamda
          kullanımına, paylaşımına, işlenmesine ve kendisine ticari olan-olmayan
          elektronik iletişimler ve diğer iletişimler yapılmasına muvafakat ve
          izin vermiştir. 6.3. ALICI SATICI'ya belirtilen iletişim kanallarından
          ulaşarak veri kullanımı-işlenmelerini ve/veya iletişimleri her zaman
          için durdurabilir. ALICI'nın bu husustaki açık bildirimine göre,
          kişisel veri işlemleri ve/veya tarafına iletişimler yasal azami süre
          içinde durdurulur; ayrıca dilerse, hukuken muhafazası gerekenler
          ve/veya mümkün olanlar haricindeki bilgileri, veri kayıt sisteminden
          silinir ya da kimliği belli olmayacak biçimde anonim hale getirilir.
          ALICI isterse kişisel verilerinin işlenmesi ile ilgili işlemler,
          aktarıldığı kişiler, eksik veya yanlış olması halinde düzeltilmesi,
          düzeltilen bilgilerin ilgili üçüncü kişilere bildirilmesi, verilerin
          silinmesi veya yok edilmesi, otomatik sistemler ile analiz edilmesi
          sureti ile kendisi aleyhine bir sonucun ortaya çıkmasına itiraz,
          verilerin kanuna aykırı olarak işlenmesi sebebi ile zarara uğrama
          halinde giderilmesi gibi konularda SATICI'ya her zaman yukarıdaki
          iletişim kanallarından başvurabilir ve bilgi alabilir. Bu hususlardaki
          başvuru ve talepleri yasal azami süreler içinde yerine getirilecek
          yahut hukuki gerekçesi tarafına açıklanarak kabul edilmeyebilecektir.
          6.4. INTERNET SİTESİ'ne ait her türlü bilgi ve içerik ile bunların
          düzenlenmesi, revizyonu ve kısmen/tamamen kullanımı konusunda;
          SATICI'nın anlaşmasına göre diğer üçüncü sahıslara ait olanlar hariç;
          tüm fikri-sınai haklar ve mülkiyet hakları SATICI'ya aittir. 6.5.
          SATICI yukarıdaki konularda gerekli görebileceği her türlü değişikliği
          yapma hakkını saklı tutar; bu değişiklikler SATICI tarafından INTERNET
          SİTESİ'nden veya diğer uygun yöntemler ile duyurulduğu andan itibaren
          geçerli olur. 6.6. INTERNET SİTESİ'nden ulaşılan diğer sitelerde
          kendilerine ait gizlilik-güvenlik politikaları ve kullanım şartları
          geçerlidir, oluşabilecek ihtilaflar ile menfi neticelerinden SATICI
          sorumlu değildir.
          <h5 className="text-white mt-4 mb-3 "> Madde 7- GENEL HÜKÜMLER</h5>
          7.1. Sözleşme konusu Ürün, yasal 30 günlük süre aşılmamak koşulu ile
          ALICI'ya veya İNTERNET SİTESİ'nde gösterdiği adresteki üçüncü
          kişi/kuruluşa aşağıda belirtilen esaslarda teslim edilir. SATICI,
          Ürünler'i, gönderileri için anlaşmalı kargo firması aracılığı ile
          göndermekte ve teslim ettirmektedir. Bu kargo firmasının ALICI'nın
          bulunduğu yerde şubesi olmaması halinde, ALICI'nın Ürünü, kargo
          firmasının, SATICI tarafından bildirilen bir diğer yakın şubesinden
          teslim alması gerekmektedir. Stoklarda olan Ürünler, sipariş
          tarihinden itibaren, en geç üç (3) iş günü içerisinde kargoya teslim
          edilir. Ancak, aynı sipariş içinde kampanyalı Ürün'ler var ise
          kampanyanın sona ermesi beklenir ve sonrasında en geç 3 (üç) iş günü
          içinde, sipariş konusu bütün Ürün'ler TÜKETİCİ tarafından sipariş
          esnasında bildirilen kişi ve adrese teslim edilmek üzere kargo
          firmasına verilir. Kargo Firmaları, SATICI'dan teslim aldığı
          gönderileri, uzaklıklarına göre değişmekle birlikte normal şartlar
          altında ortalama 3 (üç) iş günü içerisinde ALICI'lara
          ulaştırmaktadır. 7.2 Genel olarak ve aksi açıkca belirtilmediği sürece
          teslimat masrafları (kargo ücreti vb.) ALICI'ya aittir. SATICI, satış
          anında yürüttüğü ve İNTERNET SİTESİ'nde şartlarını ilan ettiği
          kampanyalara bağlı olarak söz konusu teslimat masraflarının tamamını
          ya da bir kısmını ALICI'ya yansıtmayabilir. 7.3. Ürünlerin teslimatı
          anında ALICI'nın adresinde bizatihi bulunmaması ve adresteki kişilerin
          teslimatı kabul etmemesi durumunda SATICI, bu husustaki edimini yerine
          getirmiş kabul edilecektir. Adreste teslim alacak bir kimsenin
          olmaması durumunda kargo firması ile temas kurarak ürünlerin
          sevkiyatını takip etmek ALICI'nın sorumluluğundadır. Ürün, ALICI'dan
          başka bir kişi/kuruluşa teslim edilecek ise, teslim edilecek
          kişi/kuruluşun adresinde bulunmaması veya teslimatı kabul etmemesinden
          SATICI sorumlu tutulamaz. Bu hallerde ALICI'nın Ürün'ü geç teslim
          almasından kaynaklanan her türlü zarar ile Ürün'ün kargo şirketinde
          beklemiş olması ve/veya kargonun SATICI'ya iade edilmesinden dolayı
          oluşan giderler de ALICI'ya aittir. 7.4. ALICI, Ürün'ü teslim aldığı
          anda kontrol etmekle ve Ürün'de kargodan kaynaklanan bir sorun
          gördüğünde, Ürün'ü kabul etmemek ve Kargo firması yetkilisine tutanak
          tutturmakla sorumludur. Aksi halde SATICI sorumluluk kabul
          etmeyecektir. 7.5. ALICI'nın, SATICI tarafından aksi yazılı
          öngörülmemiş ise, Ürün'ü teslim almadan önce bedelini tamamen ödemiş
          olması gerekir. Peşin satışlarda teslimattan önce Ürün bedeli
          SATICI'ya tamamen ödenmediği, taksitli satışlarda vadesi gelen taksit
          tutarı tediye edilmediği takdirde SATICI, tek taraflı olarak
          sözleşmeyi iptal edebilir ve Ürün'ü teslim etmeyebilir. Ürün teslimatı
          sonrasında herhangi bir sebepten dolayı, işlem yapılan kredi kartının
          ait olduğu Banka/finansman kurumunun Ürün bedelini SATICI'ya ödememesi
          ya da ödediği bedeli geri talep etmesi halinde, Ürün en geç 3 gün
          içinde ALICI tarafından SATICI'ya iade edilir. Ürün bedelinin
          ödenmemesi ALICI'nın bir kusurundan veya ihmalin kaynaklanıyor ise
          kargo masrafları ALICI tarafından karşılanacaktır. SATICI'nın iadeyi
          kabul etmeksizin Ürün bedeli alacağını takip dahil diğer tüm
          akdi-kanuni hakları ayrıca ve her halükarda saklıdır. Tereddüte mahal
          vermemek bakımından; ALICI'nın satış bedelini, bankalardan (finansman
          kuruluşları dahil) sahip olduğu kredi kartı, taksit kart v.b. ile
          ödediği hallerde, bu kartların sağladığı tüm imkanlar doğrudan kartı
          veren kuruluşça sağlanmış kredi ve/veya taksitli ödeme imkanlarıdır;
          bu çerçevede gerçekleşen ve SATICI'nın bedelini defaten veya peyder
          pey tahsil ettiği Ürün satışları işbu Sözleşme'nin tarafları yönünden
          kredili veya taksitli satış değildir, peşin satıştır. SATICI'nın
          kanunen taksitle satış sayılan hallerdeki yasal hakları
          (taksitlerinödenmemesi halinde sözleşmeyi fesih ve/veya kalan borcun
          tümünün temerrüt faizi ile birlikte ödenmesini talep hakları dahil)
          ilgili mevuzat çerçevesinde mevcut ve saklıdır. ALICI'nın temerrüdü
          durumunda yürürlükteki kanunların öngördüğü şekilde aylık oranda
          temerrüt faizi tatbik edilir. 7.6. Ürün'ün normal satış/teslimat
          koşulları dışında olağanüstü durumlar (hava muhalefeti, yoğun trafik,
          deprem, sel, yangın gibi) nedeni ile yasal azami 30 günlük süre
          zarfında teslim edilememesi söz konusu ise, SATICI teslimat ile ilgili
          olarak ALICI'yı bilgilendirir. Bu durumda ALICI siparişi iptal
          edebilir, benzer bir ürün sipariş edebilir veya olağanüstü durum
          sonuna kadar bekleyebilir. 7.7. SATICI Sözleşme konusu Ürün'ü tedarik
          edemeyeceğinin anlaşılması halinde, bu durumu öğrendiği tarihten
          itibaren üç (3) gün içinde açık bir şekilde ALICI'yı kanuna uygun
          yöntemle bilgilendirmek ve sözlü/yazılı onayını almak kaydıyla, eşit
          kalite-fiyatta başka bir mal/hizmeti tedarik edebilir ve Sözleşme
          konusu taahhüdünü bu suretle yerine getirmiş sayılır. ALICI söz konusu
          onayı verip vermemek te herbakımdan serbesttir ve onay vermediği
          hallerde sipariş iptaline (Sözleşme feshine) ilişkin akdi-kanuni
          hükümler uygulanır. 7.8. Sözleşme-kanuna uygun caymalar dahil sipariş
          iptallerinde ve Sözleşme fesihlerinde, Ürün bedeli tahsil edilmiş ise,
          azami 14 gün içinde ALICI'ya iade edilir. Aşağıdaki kuralın gerekleri
          saklıdır. İade ALICI'nın SATICI'ya Ürün bedeli tediyesinde kullandığı
          ödeme aracına uygun bir şekilde yapılır. Örneğin Kredi kartlı
          ödemelerde iade işlemi de ALICI kredi kartına iade sureti ile yapılır
          ve Ürün tutarı, siparişin ALICI tarafından iptal edilmesinden sonra
          aynı sürede ilgili bankaya iade edilir; bu tutarın bankaya iadesi
          işleminin SATICI tarafından yapılmasında sonra ALICI hesaplarına
          yansıması tamamen banka işlem süreci ile ilgili olduğundan, ALICI
          olası gecikmeler için SATICI'nın herhangi bir şekilde müdahalesi ve
          sorumluluk üstlenmesinin mümkün olamayacağını şimdiden kabul eder
          (bankaların iadeyi ALICI hesabına yansıtma işlemleri genellikle üç
          haftayı bulabilmektedir). SATICI'nın iade edilecek bedel için, bu
          Sözleşme ve kanundan doğan mahsup, indirim ve tenzilat hakları vardır
          ve saklıdır. Sözleşme'nin SATICI'nın edimini ifa etmemesinden ötürü
          ALICI tarafından feshedildiği hallere ilişkin ALICI kanuni hakları da
          saklı ve mevcuttur. 7.9. ALICI Ürün ve satışla ilgili talep ve
          şikayetlerini, Sözleşme'nin giriş kısmındaki SATICI iletişim
          kanallarından ulaşarak, sözlü veya yazılı şekilde SATICI'ya
          bildirebilir. 7.10. Yukarıda 3. maddede yazılı hususların bir kısmı
          mahiyeti itibari ile bu Sözleşme'de yer almayabilir; bununla beraber,
          ALICI tarafından İNTERNET SİTESİ'nde görülen/onaylanan Ön
          Bilgilendirmelerde, keza İNTERNET SİTESİ'nin --ilgisine göre satış
          aşamaları veya genel-- bilgilendirme sayfaları/bölümlerinde yer
          almaktadırlar. 7.11. ALICI, kabulü sonrasında bildirdiği e-posta
          (mail) adresine gönderildiklerinden, söz konusu Bilgilendirmelere ve
          bu Sözleşme'ye, anılan maili cihazına kaydedip saklayarak her zaman
          ulaşabilir ve inceleyebilir. Öte yandan, SATICI nezdindeki sistemlerde
          üç yıl süre ile muhafaza edilir. 7.12. Bu Sözleşme'den ve/veya
          uygulanmasından doğabilecek her türlü uyuşmazlığın çözümünde SATICI
          kayıtları (bilgisayar-ses kayıtları gibi manyetik ortamdaki kayıtlar
          dahil) delil oluşturur; tarafların ilgili emredici yasal
          düzenlemelerden bu hususta doğan hakları geçerli ve saklıdır.
          <h5 className="text-white mt-4 mb-3 ">
            Madde 8-ALICI'NIN KANUNİ BAŞVURU YOLLARI - YETKİLİ YARGI MERCİLERİ
          </h5>
          BuSözleşme'den doğabilecek uyuşmazlıklarda, Gümrük ve Ticaret
          Bakanlığı'nca yasa gereği her yıl belirlenen-ilan edilen parasal
          sınırlar dâhilinde İl ve İlçe Tüketici Hakem Heyetleri, bu sınırları
          aşan durumlarda Tüketici Mahkemeleri görevli-yetkilidir. ALICI, bu
          çerçevede, kendisinin veya dilerse SATICI'nın yerleşim yerindeki
          (ikametgahındaki) Hakem Heyetleri ve Tüketici Mahkemeleri'ne
          başvurabilir. ALICI, işbu Sözleşme'de ve ayrılmaz parçasını oluşturan
          sipariş-sözleşme ön bilgilendirmelerinde (İNTERNET SİTESİ'nde) yazılı
          tüm koşulları ve açıklamaları okuduğunu, satışa konu Ürün/Ürün'lerin
          temel özellik-nitelikleri, satış fiyatı, ödeme şekli, teslimat
          koşulları, SATICI ve satışa konu Ürün ile ilgili diğer tüm ön
          bilgiler-bilgilendirmeler ve cayma hakkı ile kişisel
          bilgiler-elektronik iletişim ve ödül puanları koşulları dahil bu
          Sözleşme'nin 3. maddesinde yazılı bütün hususlarda önceden bilgi
          sahibi olduğunu, tamamını İNTERNET SİTESİ'nde elektronik ortamda
          gördüğünü ve yine tüm bunlara elektronik ortamda
          teyit-onay-kabul-iznini vererek Ürün'ü sipariş ile işbu Sözleşme
          hükümlerini kabul ettiğini kabul ve beyan eder. Gerek söz konusu ön
          bilgilendirmeler, gerek bu Sözleşme, ALICI'nın SATICI'ya bildirdiği
          yukarıdaki elektronik posta (mail) adresine de gönderilmekte, anılan
          elektronik postada siparişin alındığı teyidi sipariş özeti ile
          birlikte ayrıca yer almaktadır.
        </p>
      </div>

    

      
      <div className="downloadContainer">
        <h1 className="download-text">Download Now</h1>
        <div className="emty" />
        <div className="app-btn-bottom">
          <a href="https://www.apple.com/in/app-store/" target="_blank">
            <img src={app_stote} className="img-fluid" />
          </a>

          <a href="https://play.google.com/store/apps" target="_blank">
            <img src={play_store} className="img-fluid" />
          </a>
        </div>

        <h1 className="mail-text">hello@hifit.live</h1>

        <section className="social-icons-container">
          <div className="row ">
            <div className="col-2">
              <a
                href="https://www.instagram.com/pixelvaluestechnolabs/?hl=en"
                target="_blank"
              >
                <img src={instagram} className="socila-icons-img" />
              </a>
            </div>

            <div className="col-2">
              <a href="https://twitter.com/valueslabs?lang=en" target="_blank">
                <img src={twitter} className="socila-icons-img" />
              </a>
            </div>

            <div className="col-2">
              <a
                href="https://www.instagram.com/pixelvaluestechnolabs/?hl=en"
                target="_blank"
              >
                <img src={linkdin} className="socila-icons-img" />
              </a>
            </div>

            <div className="col-2">
              <a
                href="https://www.instagram.com/pixelvaluestechnolabs/?hl=en"
                target="_blank"
              >
                <img src={ticktok} className="socila-icons-img" />
              </a>
            </div>
          </div>
          {/* <div className="curve">
            <img src={curveimage} alt="curve-img" className="curve_img"/>
        </div> */}

          <div className="footer-card">
            <img src={footercard} />
          </div>
        </section>
      </div>

      {/* footer section */}
      <div className="footer-section">
        <div className="row">
          <a
            href="#"
            className="col-2"
            onClick={() => navigate("/DistanceSalesAgreement")}
          >
            <h5 className="footer-text">Distance Sales Agreement</h5>
          </a>

          <a
            href="#"
            className="col-2"
            onClick={() => navigate("/PrivacyPolicy")}
          >
            <h5 className="footer-text">Privacy Policy</h5>
          </a>
          <a
            href="#"
            className="col-2"
            onClick={() => navigate("/Kvkk")}
          >
            <h5 className="footer-text">kvkk</h5>
          </a>

          <a
            href="#"
            className="col-2"
            onClick={() => navigate("/Delivery&Returns")}
          >
            <h5 className="footer-text">Delivery and Returns</h5>
          </a>

          <a href="#" className="col-2" onClick={() => navigate("/Contact")}>
            <h5 className="footer-text">Contact</h5>
          </a>
        </div>
      </div>

      <div className="right-reserved-container">
        <a href="#">
          <h5 className="footer-Bottom-text">
            © 2022 Hifit All rights reserved
          </h5>
        </a>
      </div>

      
    </div>
  );
};

export default DistanceSaleAgreement;
