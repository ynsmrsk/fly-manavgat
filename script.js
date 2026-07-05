import * as THREE from 'https://esm.sh/three@0.160.0'

const messages = {
  tr: {
    meta: {
      title: 'Fly Manavgat',
      description: 'Manavgat ve Alanya bölgesinde hizmet veren Fly Manavgat yamaç paraşütü website'
    },
    nav: {
      aria: 'Ana navigasyon',
      home: 'Fly Manavgat ana sayfa',
      toggle: 'Menü',
      experience: 'Uçuş Deneyimi',
      team: 'Ekibimiz',
      reasons: 'Neden Biz',
      pricing: 'Paketler',
      gallery: 'Galeri',
      testimonials: 'Yorumlar',
      faq: 'Sık Sorulanlar'
    },
    hero: {
      eyebrow: 'Manavgat\'ta Tandem Paragliding',
      text: 'Akdeniz kıyısında hafif, güvenli ve etkileyici tandem uçuş deneyimi'
    },
    scroll_reveal: {
      text: 'Manavgat\'ta göl, deniz ve kanyonun buluştuğu eşsiz manzarayı gökyüzünden keşfedin. FAI, THSF ve THK lisanslı tandem pilotlarımızla güvenle uçun ve anınızı fotoğraf-video ile ölümsüzleştirin.'
    },
    experience: {
      title: 'Uçuş Deneyimi',
      card_1_title: 'Ücretsiz Transfer',
      card_1_text: 'Konakladığınız yerden ücretsiz transfer hizmetimizle alınır, Manavgat yamaç paraşütü parkur alanına ulaşırsınız.',
      card_2_title: 'Türbe Tepe\'ye Çıkış',
      card_2_text: 'Arazi aracımızla 20–25 dakikalık keyifli bir yolculukla göl, deniz ve kanyon manzaralı Türbe Tepe\'ye çıkılır.',
      card_3_title: 'Uçuş Öncesi Brifing',
      card_3_text: 'FAI, THSF ve THK lisanslı deneyimli pilotlarımız gerekli uçuş ve güvenlik bilgilendirmesini yapar.',
      card_4_title: 'Kalkış',
      card_4_text: 'Yaklaşık 1000 metre (3300 feet) yükseklikteki Türbe Tepe\'den birkaç adımda tandem uçuşunuz başlar.',
      card_5_title: 'Uçuş',
      card_5_text: 'Mavi ile yeşilin buluştuğu eşsiz manzarada 20–25 dakika süzülür, fotoğraf ve video çekimleriyle anı ölümsüzleştirirsiniz.',
      card_6_title: 'İniş ve İkram',
      card_6_text: 'Oymapınar baraj kıyısındaki Cennet Vadisi iniş alanına inilir; açık büfe ikram ve 1 saatlik katamaran turuyla tur tamamlanır.'
    },
    reasons: {
      title: 'Neden Biz'
    },
    pricing: {
      title: 'Paketler',
      intro: 'Manavgat\'ta kısa ve net bir uçuş deneyimi ya da Toroslar, kanyon ve yamaç paraşütünü birleştiren tam günlük rota.',
      p1_badge: 'En çok tercih edilen',
      p1_kicker: 'İmza uçuş',
      p1_title: 'Yamaç Paraşütü',
      p1_description: 'Profesyonel tandem pilot eşliğinde Türbe Tepe\'den kalkış, göl ve kanyon manzarasıyla Manavgat semalarında uçuş.',
      p1_stat_1_value: '20-25 dk',
      p1_stat_1_label: 'uçuş',
      p1_stat_2_value: '1000 m',
      p1_stat_2_label: 'kalkış',
      p1_stat_3_value: 'Transfer',
      p1_stat_3_label: 'dahil',
      p1_feature_1: 'Otelden ücretsiz alınış ve dönüş organizasyonu',
      p1_feature_2: 'FAI, THSF ve THK lisanslı pilotla tandem uçuş',
      p1_feature_3: 'Açık büfe yemek + 1 saatlik katamaran turu',
      p2_badge: 'Tam gün rota',
      p2_kicker: 'Macera günü',
      p2_title: 'Mix Tur + Yamaç Paraşütü',
      p2_description: 'Toros Dağları safarisi, Yeşil Kanyon molaları ve tandem uçuşu birleştiren daha geniş tempolu rota.',
      p2_stat_1_value: 'Tam gün',
      p2_stat_1_label: 'program',
      p2_stat_2_value: 'Safari',
      p2_stat_2_label: '+ uçuş',
      p2_stat_3_value: 'Yemek',
      p2_stat_3_label: 'dahil',
      p2_feature_1: 'Otellerden ücretsiz alınış',
      p2_feature_2: 'Toros Dağları\'nda jeep safari ve köy molası',
      p2_feature_3: 'Yeşil Kanyon ve Yeşil Göl rotası',
      p2_feature_4: 'Öğle yemeği, tandem uçuş ve Manavgat Şelalesi ziyareti',
      p2_feature_5: 'Yeşil Göl\'de öğle yemeği',
      p2_feature_6: 'Tandem yamaç paraşütü',
      p2_feature_7: 'Manavgat Şelalesi ziyareti',
      price: 'Fiyat bilgisi için iletişime geçin',
      note: 'Uygun saatler hava durumuna göre planlanır.',
      cta: 'Rezervasyon yap'
    },
    gallery: {
      title: 'Galeri'
    },
    testimonials: {
      title: 'Yorumlar',
      flip_aria: 'Yorumu çevir',
      quote_1: 'İlk uçuşumdu ve tahmin ettiğimden çok daha rahattı. Pilotum her adımı önceden anlattı, gökyüzünde sadece manzaraya odaklandım.',
      author_1: 'Elif Arslan',
      date_1: '12 Mayıs 2025',
      quote_2: 'Rezervasyondan buluşma saatine kadar her şey netti. Kalkışta kısa bir koşu yaptık, sonra Alanya kıyısını kuşbakışı izlemek inanılmaz bir his verdi.',
      author_2: 'Daniel Kaya',
      date_2: '3 Haziran 2025',
      quote_3: 'İniş çok yumuşaktı ve ekip son ana kadar yanımızdaydı. Fotoğraf-videolar da aynı gün hazırlandı.',
      author_3: 'Merve Tanrıkulu',
      date_3: '28 Haziran 2025',
      quote_4: 'Rüzgar durumu için doğru saati önerdiler ve gerçekten fark etti. Uçuş hem sakin hem de heyecanlıydı.',
      author_4: 'Burak Narin',
      date_4: '9 Temmuz 2025',
      quote_5: 'Arkadaş grubuyla geldik, herkes farklı pilotla uçtu ama deneyim kalitesi çok tutarlıydı. Güvenlik ve iletişim kısmı gerçekten profesyoneldi.',
      author_5: 'Sofia Levent',
      date_5: '22 Temmuz 2025',
      quote_6: 'Manavgat tatilimin en iyi anıydı. Tekrar gelsem yine ilk yapacağım aktivite bu olur.',
      author_6: 'Emre Yılmaz',
      date_6: '11 Ağustos 2025'
    },
    team: {
      title: 'Ekibimiz',
      member_1_name: 'Arda K.',
      member_1_role: 'Baş Pilot',
      member_1_text: 'Kalkış öncesi brifingi yöneten ve uçuş boyunca konforu takip eden ana tandem pilotumuz.',
      member_2_name: 'Selin A.',
      member_2_role: 'Misafir Koordinasyonu',
      member_2_text: 'Rezervasyondan buluşma saatine kadar tüm akışı netleştirir, hazırlık sürecini sizin için sadeleştirir.',
      member_3_name: 'Mert Y.',
      member_3_role: 'İniş ve Medya Desteği',
      member_3_text: 'İniş alanındaki koordinasyonu yürütür, fotoğraf ve video teslim sürecini hızlıca tamamlar.'
    },
    faq: {
      title: 'Sık Sorulanlar',
      q1: 'Uçuş için belirli bir yaş veya kilo sınırı var mı?',
      a1: 'Genel olarak 5–6 yaşından büyük herkes uçabilir. Genellikle kadınlar için kilo sınırı 90–100 kg, erkekler için ise 110–120 kg civarındadır.',
      q2: 'Uçuş ne kadar sürüyor?',
      a2: 'Hava koşullarına ve seçtiğiniz uçuş stiline göre ortalama havada kalış süresi yaklaşık 25 dakikadır. Daha uzun uçmak isterseniz öğle saatlerini tercih edin ve bunu uçuş öncesinde pilotunuza belirtin.',
      q3: 'Hamileler veya kronik rahatsızlığı olanlar uçabilir mi?',
      a3: 'Hamileler, kalp rahatsızlığı olanlar veya ciddi yüksek tansiyon problemi yaşayanlar için uçuş kesinlikle önerilmez.',
      q4: 'Uçuş sırasında ne giymeliyim?',
      a4: 'Gözlerinizi rüzgardan korumak için güneş gözlüğü, koşu için spor ayakkabı ve mevsime uygun bir rüzgarlık önerilir. Yaklaşık 1000 metre yükseklikteki Türbe Tepe, sahile göre birkaç derece daha serin olabilir.',
      q5: 'Videoyu kendi telefonumla çekebilir miyim?',
      a5: 'Güvenlik nedeniyle buna izin verilmez. Telefonun düşmesi hem sizin için kayıp yaratabilir hem de aşağıdaki insanlar için tehlike oluşturabilir. Kayıt için pilotlar profesyonel GoPro ekipmanı kullanır.',
      q6: 'Uçurumdan atlıyor muyuz?',
      a6: 'Hayır, yamaç paraşütünde atlama yoktur. Birkaç adım yokuş aşağı koşarsınız, kanat havayla dolar ve sizi yumuşak şekilde yerden kaldırır.'
    },
    contact: {
      title: 'İletişim',
      phone_label: 'Telefon',
      phone_value: '+90 538 584 17 64',
      email_label: 'E-posta',
      email_value: 'info@flymanavgat.com',
      address_label: 'Adres',
      address_value: 'Manavgat / Antalya',
      whatsapp_label: 'WhatsApp',
      whatsapp_value: '+90 538 584 17 64',
      telegram_label: 'Telegram',
      telegram_value: '+90 538 584 17 64',
      instagram_label: 'Instagram',
      instagram_value: '@flymanavgat',
      map_aria: 'Fly Manavgat konum haritası',
      map_activate: 'Haritayı etkinleştir'
    }
  },
  en: {
    meta: {
      title: 'Fly Manavgat',
      description: 'Fly Manavgat paragliding website serving the Manavgat and Alanya region'
    },
    nav: {
      aria: 'Main navigation',
      home: 'Fly Manavgat home page',
      toggle: 'Menu',
      experience: 'Flight Experience',
      team: 'Our Team',
      reasons: 'Why Us',
      pricing: 'Packages',
      gallery: 'Gallery',
      testimonials: 'Testimonials',
      faq: 'FAQ'
    },
    hero: {
      eyebrow: 'Tandem Paragliding in Manavgat',
      text: 'A light, safe and memorable tandem paragliding experience on the Mediterranean coast'
    },
    scroll_reveal: {
      text: 'Discover the unique landscape of Manavgat — where lake, sea and canyon meet — from the sky. Fly safely with our FAI, THSF and THK licensed tandem pilots and preserve the moment with photos and video.'
    },
    experience: {
      title: 'Flight Experience',
      card_1_title: 'Free Transfer',
      card_1_text: 'We pick you up from your accommodation with our free transfer service and take you to the Manavgat paragliding base.',
      card_2_title: 'Ride to Türbe Tepe',
      card_2_text: 'A pleasant 20–25 minute off-road ride takes you up to Türbe Tepe, with sweeping views of the lake, sea and canyon.',
      card_3_title: 'Pre-Flight Briefing',
      card_3_text: 'Our experienced pilots, licensed by FAI, THSF and THK, give you the necessary flight and safety briefing.',
      card_4_title: 'Takeoff',
      card_4_text: 'Your tandem flight begins in just a few steps from Türbe Tepe, at roughly 1000 m (3300 ft).',
      card_5_title: 'The Flight',
      card_5_text: 'Glide for 20–25 minutes over a unique landscape where blue meets green, while we capture the moment with photos and video.',
      card_6_title: 'Landing & Treats',
      card_6_text: 'You land at the Cennet Vadisi site by the Oymapınar reservoir; the tour ends with an open buffet and a 1-hour catamaran trip.'
    },
    reasons: {
      title: 'Why Us'
    },
    pricing: {
      title: 'Packages',
      intro: 'Choose a focused flight over Manavgat or a full-day route combining the Taurus Mountains, canyon stops and paragliding.',
      p1_badge: 'Most chosen',
      p1_kicker: 'Signature flight',
      p1_title: 'Paragliding',
      p1_description: 'Take off from Türbe Tepe with a professional tandem pilot and glide over Manavgat with lake and canyon views.',
      p1_stat_1_value: '20-25 min',
      p1_stat_1_label: 'flight',
      p1_stat_2_value: '1000 m',
      p1_stat_2_label: 'takeoff',
      p1_stat_3_value: 'Transfer',
      p1_stat_3_label: 'included',
      p1_feature_1: 'Free hotel pickup and return coordination',
      p1_feature_2: 'Tandem flight with FAI, THSF and THK licensed pilot',
      p1_feature_3: 'Open buffet meal + 1-hour catamaran trip',
      p2_badge: 'Full-day route',
      p2_kicker: 'Adventure day',
      p2_title: 'Mix Tour + Paragliding',
      p2_description: 'A broader-paced route combining a Taurus Mountains safari, Green Canyon stops and a tandem flight.',
      p2_stat_1_value: 'Full day',
      p2_stat_1_label: 'program',
      p2_stat_2_value: 'Safari',
      p2_stat_2_label: '+ flight',
      p2_stat_3_value: 'Meal',
      p2_stat_3_label: 'included',
      p2_feature_1: 'Free pickup from hotels',
      p2_feature_2: 'Jeep safari in the Taurus Mountains and village stop',
      p2_feature_3: 'Green Canyon and Green Lake route',
      p2_feature_4: 'Lunch, tandem flight and Manavgat Waterfall visit',
      p2_feature_5: 'Lunch at the Green Lake',
      p2_feature_6: 'Tandem paragliding',
      p2_feature_7: 'Visit to the Manavgat Waterfall',
      price: 'Contact us for price information',
      note: 'Available times are planned according to weather conditions.',
      cta: 'Book now'
    },
    gallery: {
      title: 'Gallery'
    },
    testimonials: {
      title: 'Testimonials',
      flip_aria: 'Flip testimonial',
      quote_1: 'It was my first flight and it felt much easier than I expected. My pilot explained every step before takeoff, so I could fully enjoy the view.',
      author_1: 'Elif Arslan',
      date_1: 'May 12, 2025',
      quote_2: 'Everything was clear from booking to meeting time. We ran just a few steps, and seeing the Alanya coastline from above felt absolutely unreal.',
      author_2: 'Daniel Kaya',
      date_2: 'June 3, 2025',
      quote_3: 'The landing was very smooth and the team stayed with us until the very end. We even received our photos and videos the same day.',
      author_3: 'Merve Tanrıkulu',
      date_3: 'June 28, 2025',
      quote_4: 'They suggested the right wind window and it made a big difference. The flight was calm, scenic and still exciting.',
      author_4: 'Burak Narin',
      date_4: 'July 9, 2025',
      quote_5: 'We came as a group and each of us flew with a different pilot, yet the quality was consistently high. Safety and communication were clearly professional.',
      author_5: 'Sofia Levent',
      date_5: 'July 22, 2025',
      quote_6: 'Best moment of my Manavgat holiday. I would do this again first thing on my next trip.',
      author_6: 'Emre Yılmaz',
      date_6: 'August 11, 2025'
    },
    team: {
      title: 'Our Team',
      member_1_name: 'Arda K.',
      member_1_role: 'Lead Pilot',
      member_1_text: 'Our main tandem pilot leads the pre-flight briefing and keeps the entire experience comfortable in the air.',
      member_2_name: 'Selin A.',
      member_2_role: 'Guest Coordination',
      member_2_text: 'She clarifies everything from booking to meeting time and keeps the preparation process simple for you.',
      member_3_name: 'Mert Y.',
      member_3_role: 'Landing and Media Support',
      member_3_text: 'He manages the landing area flow and completes the photo and video handoff quickly after the flight.'
    },
    faq: {
      title: 'FAQ',
      q1: 'Is there a specific age or weight limit for flying?',
      a1: 'Generally, anyone older than 5–6 years can fly. Typically, the weight limit is around 90–100 kg for women and 110–120 kg for men.',
      q2: 'How long does the flight last?',
      a2: 'Depending on the weather conditions and the flight style you choose, the average time in the air is about 25 minutes. If you would like to fly longer, please prefer midday hours and inform your pilot before the flight.',
      q3: 'Can pregnant individuals or those with chronic conditions fly?',
      a3: 'It is strictly not recommended for pregnant individuals, those with heart conditions, or those with severe high blood pressure to fly.',
      q4: 'What should I wear during the flight?',
      a4: 'Sunglasses, sneakers and a windbreaker appropriate for the season are recommended. Türbe Tepe, at around 1000 m, can be a few degrees cooler than the coast.',
      q5: 'Can I record videos with my own phone?',
      a5: 'This is not allowed for safety reasons. There is a risk of dropping the phone, which could result in loss for you and danger for people below. Pilots use professional GoPro equipment for recording.',
      q6: 'Do we jump off a cliff?',
      a6: 'No, there is no jumping in paragliding. You take a few steps downhill, the wing fills with air, and it gently lifts you off the ground.'
    },
    contact: {
      title: 'Contact',
      phone_label: 'Phone',
      phone_value: '+90 538 584 17 64',
      email_label: 'Email',
      email_value: 'info@flymanavgat.com',
      address_label: 'Address',
      address_value: 'Manavgat / Antalya',
      whatsapp_label: 'WhatsApp',
      whatsapp_value: '+90 538 584 17 64',
      telegram_label: 'Telegram',
      telegram_value: '+90 538 584 17 64',
      instagram_label: 'Instagram',
      instagram_value: '@flymanavgat',
      map_aria: 'Fly Manavgat location map',
      map_activate: 'Activate map'
    }
  },
  ru: {
    meta: {
      title: 'Fly Manavgat',
      description: 'Сайт Fly Manavgat о полетах на параплане в регионе Манавгат и Аланья'
    },
    nav: {
      aria: 'Основная навигация',
      home: 'Главная страница Fly Manavgat',
      toggle: 'Меню',
      experience: 'Полет',
      team: 'Наша команда',
      reasons: 'Почему мы',
      pricing: 'Пакеты',
      gallery: 'Галерея',
      testimonials: 'Отзывы',
      faq: 'FAQ'
    },
    hero: {
      eyebrow: 'Тандемный параплан в Манавгате',
      text: 'Легкий, безопасный и яркий тандемный полет над побережьем Средиземного моря'
    },
    scroll_reveal: {
      text: 'Откройте для себя уникальные пейзажи Манавгата с высоты, где встречаются озеро, море и каньон. Летайте безопасно с нашими тандем-пилотами, имеющими лицензии FAI, THSF и THK, и сохраните момент на фото и видео.'
    },
    experience: {
      title: 'Полет',
      card_1_title: 'Бесплатный трансфер',
      card_1_text: 'Мы бесплатно забираем вас от места проживания и привозим на стартовую площадку парапланеризма в Манавгате.',
      card_2_title: 'Подъем на Тюрбе-Тепе',
      card_2_text: 'За 20–25 минут на внедорожнике вы совершаете приятную поездку на Тюрбе-Тепе с видами на озеро, море и каньон.',
      card_3_title: 'Инструктаж перед полетом',
      card_3_text: 'Наши опытные пилоты с лицензиями FAI, THSF и THK проводят необходимый инструктаж по полету и безопасности.',
      card_4_title: 'Старт',
      card_4_text: 'Ваш тандемный полет начинается всего за несколько шагов с Тюрбе-Тепе на высоте около 1000 м (3300 футов).',
      card_5_title: 'Полет',
      card_5_text: 'Парите 20–25 минут над уникальным пейзажем, где синее встречается с зеленым, а мы запечатлеваем момент на фото и видео.',
      card_6_title: 'Посадка и угощение',
      card_6_text: 'Посадка в зоне Cennet Vadisi у водохранилища Оймапынар; тур завершается шведским столом и часовой прогулкой на катамаране.'
    },
    reasons: {
      title: 'Почему мы'
    },
    pricing: {
      title: 'Пакеты',
      intro: 'Выберите короткий и ясный полет над Манавгатом или маршрут на целый день с Таврскими горами, каньоном и парапланом.',
      p1_badge: 'Самый популярный',
      p1_kicker: 'Фирменный полет',
      p1_title: 'Параплан',
      p1_description: 'Старт с Тюрбе-Тепе с профессиональным тандем-пилотом и полет над Манавгатом с видами на озеро и каньон.',
      p1_stat_1_value: '20-25 мин',
      p1_stat_1_label: 'полет',
      p1_stat_2_value: '1000 м',
      p1_stat_2_label: 'старт',
      p1_stat_3_value: 'Трансфер',
      p1_stat_3_label: 'включен',
      p1_feature_1: 'Бесплатный трансфер от отеля и обратная организация',
      p1_feature_2: 'Тандемный полет с пилотом с лицензиями FAI, THSF и THK',
      p1_feature_3: 'Обед шведский стол + часовая прогулка на катамаране',
      p2_badge: 'Маршрут на день',
      p2_kicker: 'День приключений',
      p2_title: 'Mix-тур + параплан',
      p2_description: 'Более насыщенный маршрут: сафари по Таврским горам, остановки у Зеленого каньона и тандемный полет.',
      p2_stat_1_value: 'Весь день',
      p2_stat_1_label: 'программа',
      p2_stat_2_value: 'Сафари',
      p2_stat_2_label: '+ полет',
      p2_stat_3_value: 'Обед',
      p2_stat_3_label: 'включен',
      p2_feature_1: 'Бесплатный трансфер от отелей',
      p2_feature_2: 'Джип-сафари по Таврским горам и остановка в деревне',
      p2_feature_3: 'Маршрут Зеленый каньон и Зеленое озеро',
      p2_feature_4: 'Обед, тандемный полет и посещение водопада Манавгат',
      p2_feature_5: 'Обед у Зеленого озера',
      p2_feature_6: 'Тандемный параплан',
      p2_feature_7: 'Посещение водопада Манавгат',
      price: 'Свяжитесь с нами для уточнения цены',
      note: 'Доступное время планируется с учетом погодных условий.',
      cta: 'Забронировать'
    },
    gallery: {
      title: 'Галерея'
    },
    testimonials: {
      title: 'Отзывы',
      flip_aria: 'Перевернуть отзыв',
      quote_1: 'Это был мой первый полет, и он оказался намного спокойнее, чем я ожидала. Пилот заранее объяснил каждый шаг, поэтому в небе я просто наслаждалась видом.',
      author_1: 'Элиф Арслан',
      date_1: '12 мая 2025',
      quote_2: 'Все было понятно от бронирования до времени встречи. На старте мы сделали всего несколько шагов, а вид на побережье Аланьи с высоты был невероятным.',
      author_2: 'Даниэль Кая',
      date_2: '3 июня 2025',
      quote_3: 'Посадка была очень мягкой, и команда была рядом с нами до самого конца. Фото и видео подготовили в тот же день.',
      author_3: 'Мерве Танрыкулу',
      date_3: '28 июня 2025',
      quote_4: 'Нам подсказали правильное время по ветру, и это действительно имело значение. Полет был спокойным, красивым и при этом захватывающим.',
      author_4: 'Бурак Нарин',
      date_4: '9 июля 2025',
      quote_5: 'Мы приехали компанией, каждый летел с разным пилотом, но качество у всех было одинаково высоким. Безопасность и коммуникация были на профессиональном уровне.',
      author_5: 'София Левент',
      date_5: '22 июля 2025',
      quote_6: 'Лучший момент моего отдыха в Манавгате. Если приеду снова, первым делом повторю этот полет.',
      author_6: 'Эмре Йылмаз',
      date_6: '11 августа 2025'
    },
    team: {
      title: 'Наша команда',
      member_1_name: 'Арда К.',
      member_1_role: 'Ведущий пилот',
      member_1_text: 'Наш основной тандем-пилот проводит инструктаж перед стартом и следит за комфортом во время всего полета.',
      member_2_name: 'Селин А.',
      member_2_role: 'Координация гостей',
      member_2_text: 'Она уточняет все детали от бронирования до времени встречи и делает подготовку простой для вас.',
      member_3_name: 'Мерт Й.',
      member_3_role: 'Посадка и медиа',
      member_3_text: 'Он координирует процесс в зоне посадки и быстро завершает передачу фото и видео после полета.'
    },
    faq: {
      title: 'FAQ',
      q1: 'Есть ли ограничения по возрасту или весу?',
      a1: 'Обычно летать могут все старше 5–6 лет. Как правило, лимит веса составляет около 90–100 кг для женщин и 110–120 кг для мужчин.',
      q2: 'Сколько длится полет?',
      a2: 'В зависимости от погодных условий и выбранного стиля полета среднее время в воздухе составляет около 25 минут. Если хотите лететь дольше, выбирайте дневные часы и сообщите об этом пилоту перед полетом.',
      q3: 'Можно ли летать беременным или людям с хроническими заболеваниями?',
      a3: 'Беременным, людям с заболеваниями сердца или серьезными проблемами с высоким давлением полет строго не рекомендуется.',
      q4: 'Что надеть на полет?',
      a4: 'Рекомендуем солнцезащитные очки, кроссовки для разбега и ветровку по сезону. Тюрбе-Тепе на высоте около 1000 м может быть на несколько градусов прохладнее побережья.',
      q5: 'Можно ли снимать видео на свой телефон?',
      a5: 'По соображениям безопасности это запрещено. Телефон может упасть, что опасно для людей внизу и приведет к потере устройства. Для съемки пилоты используют профессиональное оборудование GoPro.',
      q6: 'Мы прыгаем со скалы?',
      a6: 'Нет, в парапланеризме нет прыжка. Вы делаете несколько шагов вниз по склону, крыло наполняется воздухом и мягко поднимает вас над землей.'
    },
    contact: {
      title: 'Контакты',
      phone_label: 'Телефон',
      phone_value: '+90 538 584 17 64',
      email_label: 'Email',
      email_value: 'info@flymanavgat.com',
      address_label: 'Адрес',
      address_value: 'Manavgat / Antalya',
      whatsapp_label: 'WhatsApp',
      whatsapp_value: '+90 538 584 17 64',
      telegram_label: 'Telegram',
      telegram_value: '+90 538 584 17 64',
      instagram_label: 'Instagram',
      instagram_value: '@flymanavgat',
      map_aria: 'Карта расположения Fly Manavgat',
      map_activate: 'Активировать карту'
    }
  }
}

const storageKey = 'locale'

const get = (obj, path) => path.split('.').reduce((acc, key) => acc?.[key], obj)
const coarsePointerQuery = window.matchMedia('(pointer: coarse)')

const faqLists = [...document.querySelectorAll('[data-faq]')]

const measureFaqHeights = () => {
  faqLists.forEach(list => {
    list.querySelectorAll('details').forEach(item => {
      const answer = item.querySelector('.content')

      if (!answer) return

      const wasOpen = item.open

      if (!wasOpen) item.open = true

      const height = Math.ceil(answer.scrollHeight)
      item.style.setProperty('--faq-content-height', `${height}px`)

      if (!wasOpen) item.open = false
    })
  })
}

const initializeFaq = () => {
  measureFaqHeights()
}

const initializeHeroNavOffset = () => {
  const nav = document.querySelector('nav.nav')
  const hero = document.querySelector('header.hero')
  if (!nav || !hero) return

  const update = () => {
    hero.style.setProperty('--nav-height', `${nav.offsetHeight}px`)
  }

  update()

  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(update)
    observer.observe(nav)
  } else {
    window.addEventListener('resize', update)
  }
}

const initializeHeroClouds = () => {
  const canvas = document.querySelector('[data-hero-clouds]')
  if (!canvas) return

  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

  const getCloudPixelRatio = () => {
    const devicePixelRatio = window.devicePixelRatio || 1
    const viewportPixels = window.innerWidth * window.innerHeight

    if (coarsePointerQuery.matches) return Math.min(devicePixelRatio, 1)
    if (viewportPixels > 1400000) return Math.min(devicePixelRatio, 1)
    if (viewportPixels > 900000) return Math.min(devicePixelRatio, 1.15)

    return Math.min(devicePixelRatio, 1.25)
  }

  let renderer
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: false
    })
  } catch {
    return
  }

  renderer.setPixelRatio(getCloudPixelRatio())

  const scene = new THREE.Scene()
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

  const uniforms = {
    iTime: { value: 0 },
    iResolution: { value: new THREE.Vector2(1, 1) }
  }

  const fragmentShader = `
    precision highp float;

    uniform float iTime;
    uniform vec2 iResolution;

    const float cloudscale = 1.1;
    const float speed = 0.03;
    const float clouddark = 0.5;
    const float cloudlight = 0.3;
    const float cloudcover = 0.2;
    const float cloudalpha = 8.0;
    const float skytint = 0.5;
    const vec3 skycolour1 = vec3(0.1, 0.45, 0.8);
    const vec3 skycolour2 = vec3(0.45, 0.74, 1.0);

    const mat2 m = mat2(1.6, 1.2, -1.2, 1.6);

    vec2 hash(vec2 p) {
      p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
      return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
    }

    float noise(in vec2 p) {
      const float K1 = 0.366025404;
      const float K2 = 0.211324865;
      vec2 i = floor(p + (p.x + p.y) * K1);
      vec2 a = p - i + (i.x + i.y) * K2;
      vec2 o = (a.x > a.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec2 b = a - o + K2;
      vec2 c = a - 1.0 + 2.0 * K2;
      vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
      vec3 n = h * h * h * h * vec3(dot(a, hash(i + 0.0)), dot(b, hash(i + o)), dot(c, hash(i + 1.0)));
      return dot(n, vec3(70.0));
    }

    float fbm(vec2 n) {
      float total = 0.0, amplitude = 0.1;
      for (int i = 0; i < 7; i++) {
        total += noise(n) * amplitude;
        n = m * n;
        amplitude *= 0.4;
      }
      return total;
    }

    void main() {
      vec2 p = gl_FragCoord.xy / iResolution.xy;
      vec2 uv = p * vec2(iResolution.x / iResolution.y, 1.0);
      float time = iTime * speed;
      float q = fbm(uv * cloudscale * 0.5);

      float r = 0.0;
      uv *= cloudscale;
      uv -= q - time;
      float weight = 0.8;
      for (int i = 0; i < 8; i++) {
        r += abs(weight * noise(uv));
        uv = m * uv + time;
        weight *= 0.7;
      }

      float f = 0.0;
      uv = p * vec2(iResolution.x / iResolution.y, 1.0);
      uv *= cloudscale;
      uv -= q - time;
      weight = 0.7;
      for (int i = 0; i < 8; i++) {
        f += weight * noise(uv);
        uv = m * uv + time;
        weight *= 0.6;
      }

      f *= r + f;

      float c = 0.0;
      time = iTime * speed * 2.0;
      uv = p * vec2(iResolution.x / iResolution.y, 1.0);
      uv *= cloudscale * 2.0;
      uv -= q - time;
      weight = 0.4;
      for (int i = 0; i < 7; i++) {
        c += weight * noise(uv);
        uv = m * uv + time;
        weight *= 0.6;
      }

      float c1 = 0.0;
      time = iTime * speed * 3.0;
      uv = p * vec2(iResolution.x / iResolution.y, 1.0);
      uv *= cloudscale * 3.0;
      uv -= q - time;
      weight = 0.4;
      for (int i = 0; i < 7; i++) {
        c1 += abs(weight * noise(uv));
        uv = m * uv + time;
        weight *= 0.6;
      }

      c += c1;

      vec3 skycolour = mix(skycolour2, skycolour1, p.y);
      vec3 cloudcolour = vec3(1.1, 1.1, 0.9) * clamp(clouddark + cloudlight * c, 0.0, 1.0);

      f = cloudcover + cloudalpha * f * r;

      vec3 result = mix(skycolour, clamp(skytint * skycolour + cloudcolour, 0.0, 1.0), clamp(f + c, 0.0, 1.0));

      gl_FragColor = vec4(result, 1.0);
    }
  `

  const vertexShader = `
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `

  const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader })
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material)
  scene.add(mesh)

  let canvasWidth = 0
  let canvasHeight = 0
  const resize = () => {
    const width = Math.ceil(canvas.clientWidth || 1)
    const height = Math.ceil(canvas.clientHeight || 1)

    if (width === canvasWidth && height === canvasHeight) return

    canvasWidth = width
    canvasHeight = height

    const pixelRatio = getCloudPixelRatio()

    renderer.setPixelRatio(pixelRatio)
    renderer.setSize(width, height, false)
    uniforms.iResolution.value.set(width * pixelRatio, height * pixelRatio)
  }
  resize()

  let frameId = 0
  let lastFrameNow = performance.now()
  let lastScrollY = window.scrollY
  let cloudTime = 0
  let cloudSpeed = 1
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

  const renderFrame = (now, animate = true) => {
    if (animate) {
      const deltaTime = clamp((now - lastFrameNow) / 1000, 0, 0.08)
      const scrollDelta = window.scrollY - lastScrollY
      const scrollVelocity = deltaTime > 0 ? Math.abs(scrollDelta) / deltaTime : 0
      const scrollBoost = clamp(Math.abs(scrollDelta) / 140, 0, 1.6)
      const targetSpeed = 1 + clamp(scrollVelocity / 360, 0, 10)

      cloudSpeed += (targetSpeed - cloudSpeed) * clamp(deltaTime * 8, 0, 1)
      cloudTime += (deltaTime * cloudSpeed) + scrollBoost
      lastScrollY = window.scrollY
    }

    lastFrameNow = now
    uniforms.iTime.value = cloudTime
    renderer.render(scene, camera)
  }

  const loop = now => {
    renderFrame(now)
    frameId = requestAnimationFrame(loop)
  }

  const startLoop = () => {
    if (frameId || reducedMotionQuery.matches) return
    frameId = requestAnimationFrame(loop)
  }

  const stopLoop = () => {
    if (!frameId) return
    cancelAnimationFrame(frameId)
    frameId = 0
  }

  if (reducedMotionQuery.matches) {
    renderFrame(performance.now(), false)
  } else {
    startLoop()
  }

  if (typeof ResizeObserver !== 'undefined') {
    let resizeQueued = false
    let lastResizeWidth = window.innerWidth
    const requestResize = () => {
      const nextWidth = window.innerWidth

      if (coarsePointerQuery.matches && Math.abs(nextWidth - lastResizeWidth) < 1) return

      lastResizeWidth = nextWidth
      if (resizeQueued) return

      resizeQueued = true
      requestAnimationFrame(() => {
        resizeQueued = false
        resize()
        if (reducedMotionQuery.matches) renderFrame(performance.now(), false)
      })
    }
    const observer = new ResizeObserver(requestResize)
    observer.observe(canvas)
    window.addEventListener('resize', requestResize)
  } else {
    window.addEventListener('resize', () => {
      resize()
      if (reducedMotionQuery.matches) renderFrame(performance.now(), false)
    })
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopLoop()
    else startLoop()
  })

  const handleReducedMotionChange = () => {
    if (reducedMotionQuery.matches) {
      stopLoop()
      renderFrame(performance.now(), false)
    } else {
      lastFrameNow = performance.now()
      lastScrollY = window.scrollY
      startLoop()
    }
  }

  if (typeof reducedMotionQuery.addEventListener === 'function') {
    reducedMotionQuery.addEventListener('change', handleReducedMotionChange)
  } else {
    reducedMotionQuery.addListener(handleReducedMotionChange)
  }
}

const getInitialLocale = () => {
  const savedLocale = localStorage.getItem(storageKey)

  if (savedLocale && messages[savedLocale]) return savedLocale

  const browserLocale = navigator.language.toLowerCase()

  if (browserLocale.startsWith('tr')) return 'tr'
  if (browserLocale.startsWith('ru')) return 'ru'

  return 'en'
}

const applyLocale = locale => {
  const activeLocale = messages[locale] ? locale : 'tr'

  document.documentElement.lang = activeLocale
  document.title = get(messages[activeLocale], 'meta.title') ?? 'Fly Manavgat'

  document.querySelectorAll('[data-i18n]').forEach(node => {
    const value = get(messages[activeLocale], node.dataset.i18n)

    if (typeof value === 'string') node.textContent = value
  })

  document.querySelectorAll('[data-i18n-placeholder]').forEach(node => {
    const value = get(messages[activeLocale], node.dataset.i18nPlaceholder)

    if (typeof value === 'string') node.setAttribute('placeholder', value)
  })

  document.querySelectorAll('[data-i18n-aria-label]').forEach(node => {
    const value = get(messages[activeLocale], node.dataset.i18nAriaLabel)

    if (typeof value === 'string') node.setAttribute('aria-label', value)
  })

  document.querySelectorAll('[data-i18n-content]').forEach(node => {
    const value = get(messages[activeLocale], node.dataset.i18nContent)

    if (typeof value === 'string') node.setAttribute('content', value)
  })

  document.querySelectorAll('[data-lang-switch]').forEach(node => {
    node.setAttribute('aria-pressed', String(node.dataset.langSwitch === activeLocale))
  })

  localStorage.setItem(storageKey, activeLocale)
  requestAnimationFrame(() => {
    measureFaqHeights()
  })
}

document.documentElement.classList.add('js-ready')

document.querySelectorAll('[data-lang-switch]').forEach(button => {
  button.addEventListener('click', () => {
    applyLocale(button.dataset.langSwitch)
  })
})

document.querySelectorAll('.contact-map').forEach(map => {
  const activateButton = map.querySelector('.contact-map-activate')

  activateButton?.addEventListener('click', () => {
    map.dataset.active = ''
  })

  map.addEventListener('mouseleave', () => {
    delete map.dataset.active
  })
})

const navToggle = document.querySelector('.nav-toggle')
const navMenu = document.getElementById('nav-menu')
const navEl = document.querySelector('nav.nav')

if (navToggle && navMenu && navEl) {
  navToggle.addEventListener('click', () => {
    const isOpen = navToggle.getAttribute('aria-expanded') === 'true'
    navToggle.setAttribute('aria-expanded', String(!isOpen))
    navEl.toggleAttribute('data-open', !isOpen)
  })

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false')
      navEl.removeAttribute('data-open')
    })
  })
}

applyLocale(getInitialLocale())
initializeFaq()
initializeHeroNavOffset()
initializeHeroClouds()

let faqResizeWidth = window.innerWidth
window.addEventListener('resize', () => {
  const nextWidth = window.innerWidth

  if (coarsePointerQuery.matches && Math.abs(nextWidth - faqResizeWidth) < 1) return

  faqResizeWidth = nextWidth
  measureFaqHeights()
})

const gallery = document.getElementById('galleryGrid')
const modal = document.getElementById('galleryModal')
const modalImageContainer = document.getElementById('modalImageContainer')
const modalContent = modal?.querySelector('.modal-content')
const modalGallery = document.getElementById('modalGallery')

if (gallery && modal && modalImageContainer && modalContent && modalGallery) {
  let windowHeight = window.innerHeight

  window.addEventListener('resize', () => {
    windowHeight = window.innerHeight
  })

  const clearViewTransition = () => {
    document.querySelectorAll('.view-transition-thumbnail').forEach(img => {
      img.classList.remove('view-transition-thumbnail')
    })
  }

  const scrollModalToImage = id => {
    modalImageContainer.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' })

    const modalImage = modalImageContainer.querySelector(`img[data-id="${id}"]`)

    if (!modalImage) return

    modalImage.classList.add('view-transition-thumbnail')
    modalImage.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' })
  }

  const openModal = id => {
    if (!document.startViewTransition) {
      clearViewTransition()
      modal.showModal()
      scrollModalToImage(id)
      return
    }

    document.startViewTransition(() => {
      clearViewTransition()
      modal.showModal()
      scrollModalToImage(id)
    })
  }

  const closeModal = () => {
    if (!modal.open) return

    if (!document.startViewTransition) {
      gallery.inert = false
      modal.close()
      return
    }

    document.startViewTransition(() => {
      gallery.inert = false

      const modalImage = modalGallery.querySelector('.view-transition-thumbnail')

      if (modalImage) {
        modalImage.classList.remove('view-transition-thumbnail')
        const id = modalImage.dataset.id
        const thumbnail = gallery.querySelector(`img[data-id="${id}"]`)

        if (thumbnail) {
          thumbnail.classList.add('view-transition-thumbnail')

          if (!thumbnail.classList.contains('in-window')) {
            thumbnail.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' })
          }
        }
      }

      modal.close()
    })
  }

  gallery.querySelectorAll('li').forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      clearViewTransition()

      const img = thumbnail.querySelector('img')

      if (!img) return

      img.classList.add('view-transition-thumbnail')
      gallery.inert = true
      openModal(img.dataset.id)
    })
  })

  const modalObserver = new IntersectionObserver(
    entries => {
      clearViewTransition()

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('view-transition-thumbnail')
        }
      })
    },
    {
      root: modalGallery,
      rootMargin: '0px',
      threshold: 0.5
    }
  )

  modalGallery.querySelectorAll('.modal-gallery-image').forEach(item => {
    modalObserver.observe(item)
  })

  const galleryObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-window')
        } else {
          entry.target.classList.remove('in-window')
        }
      })
    },
    {
      threshold: 1
    }
  )

  gallery.querySelectorAll('img').forEach(item => {
    galleryObserver.observe(item)
  })

  modal.addEventListener('click', () => {
    closeModal()
  })

  modalContent.addEventListener('scroll', event => {
    if (!modal.open) return

    if (event.target.scrollTop < windowHeight * 0.4) {
      closeModal()
    } else if (event.target.scrollTop > windowHeight * 1.6) {
      closeModal()
    }
  })
}

const scrollFlight = document.querySelector('[data-scroll-flight]')
const scrollFlightIcon = document.getElementById('scrollFlightIcon')
const navLogoImage = document.querySelector('nav.nav > div > a > img')
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

if (scrollFlight && scrollFlightIcon) {
  let ticking = false
  let refreshQueued = false
  let facingDirection = 'left'
  let flightViewportWidth = window.innerWidth
  let flightViewportHeight = window.innerHeight
  let flightStartX = flightViewportWidth * 0.5
  let flightStartY = Math.max(52, flightViewportHeight * 0.12)
  let flightStartScale = 0.9
  let sampleXs = new Float32Array(0)
  let sampleYs = new Float32Array(0)
  let maxScroll = 0
  const flightScaleBoost = 1.11

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
  const refreshFlightStart = () => {
    if (!navLogoImage) {
      flightStartX = flightViewportWidth * 0.5
      flightStartY = Math.max(52, flightViewportHeight * 0.12)
      flightStartScale = 0.9
      return
    }

    const logoRect = navLogoImage.getBoundingClientRect()

    if (!logoRect.width || !logoRect.height) {
      flightStartX = flightViewportWidth * 0.5
      flightStartY = Math.max(52, flightViewportHeight * 0.12)
      flightStartScale = 0.9
      return
    }

    const iconBaseWidth =
      parseFloat(window.getComputedStyle(scrollFlightIcon).width) ||
      scrollFlightIcon.clientWidth ||
      56
    const logoParachuteTargetWidth = logoRect.width * 0.14

    flightStartX = logoRect.left + (logoRect.width * 0.845)
    flightStartY = logoRect.top + (logoRect.height * 0.38)
    flightStartScale = clamp(logoParachuteTargetWidth / iconBaseWidth, 0.5, 1.1)
  }
  const refreshMaxScroll = () => {
    maxScroll = Math.max(0, document.documentElement.scrollHeight - flightViewportHeight)
  }
  const getFlightScale = progress => clamp(flightStartScale + (progress * 0.42), flightStartScale, 1.35)

  const setStaticFlightPosition = () => {
    const progress = maxScroll > 0 ? clamp(window.scrollY / maxScroll, 0, 1) : 0
    const scale = getFlightScale(progress)

    scrollFlightIcon.style.transform =
      `translate3d(${flightStartX}px, ${flightStartY}px, 0) translate(-50%, -50%) scale(${scale * flightScaleBoost}) scaleX(1) rotate(22deg)`
  }

  const buildFlightPath = () => {
    const width = flightViewportWidth
    const height = flightViewportHeight
    const marginX = Math.max(8, width * 0.08)
    const startX = flightStartX
    const startY = flightStartY
    const endY = height - Math.max(64, height * 0.14)
    const centerX = startX
    const horizontalRoom = Math.min(centerX - marginX, width - centerX - marginX)
    const amplitude = Math.max(120, Math.min(360, horizontalRoom * 0.95))
    const waveCount = width < 768 ? 1.8 : 2.35
    const segments = width < 768 ? 64 : 96
    const travelY = endY - startY
    const twoPi = Math.PI * 2

    sampleXs = new Float32Array(segments + 1)
    sampleYs = new Float32Array(segments + 1)
    sampleXs[0] = startX
    sampleYs[0] = startY

    for (let index = 1; index <= segments; index += 1) {
      const progress = index / segments
      const primary = Math.sin((progress * twoPi * waveCount) + Math.PI)
      const secondary = Math.sin((progress * twoPi * (waveCount * 1.73)) + (Math.PI * 0.6))
      const tertiary = Math.sin((progress * twoPi * (waveCount * 0.67)) + (Math.PI * 1.4))
      const blendedWave = primary + (secondary * 0.34) + (tertiary * 0.2)

      sampleXs[index] = centerX + (blendedWave * amplitude)
      sampleYs[index] = startY + (travelY * progress)
    }
  }

  const updateFlightPosition = () => {
    ticking = false

    if (reducedMotionQuery.matches || sampleXs.length === 0) {
      setStaticFlightPosition()
      return
    }

    const progress = maxScroll > 0 ? clamp(window.scrollY / maxScroll, 0, 1) : 0
    const lastIndex = sampleXs.length - 1
    const floatIndex = progress * lastIndex
    const index0 = floatIndex | 0
    const index1 = index0 < lastIndex ? index0 + 1 : lastIndex
    const mix = floatIndex - index0
    const x0 = sampleXs[index0]
    const y0 = sampleYs[index0]
    const x = x0 + ((sampleXs[index1] - x0) * mix)
    const y = y0 + ((sampleYs[index1] - y0) * mix)
    const previousIndex = index0 > 0 ? index0 - 1 : 0
    const nextIndex = index1 < lastIndex ? index1 + 1 : lastIndex
    const deltaX = sampleXs[nextIndex] - sampleXs[previousIndex]

    if (deltaX > 0.2) {
      facingDirection = 'right'
    } else if (deltaX < -0.2) {
      facingDirection = 'left'
    }

    const flipX = facingDirection === 'right' ? -1 : 1
    const scale = getFlightScale(progress)

    scrollFlightIcon.style.transform =
      `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale * flightScaleBoost}) scaleX(${flipX}) rotate(22deg)`
  }

  const requestFlightUpdate = () => {
    if (ticking) return

    ticking = true
    requestAnimationFrame(updateFlightPosition)
  }

  const refreshFlightPath = () => {
    refreshFlightStart()
    refreshMaxScroll()
    buildFlightPath()
    requestFlightUpdate()
  }

  const requestFlightRefresh = () => {
    if (refreshQueued) return

    refreshQueued = true
    requestAnimationFrame(() => {
      refreshQueued = false
      refreshFlightPath()
    })
  }

  window.addEventListener('scroll', requestFlightUpdate, { passive: true })
  window.addEventListener('resize', () => {
    const nextWidth = window.innerWidth

    if (coarsePointerQuery.matches && Math.abs(nextWidth - flightViewportWidth) < 1) {
      refreshMaxScroll()
      requestFlightUpdate()
      return
    }

    flightViewportWidth = nextWidth
    flightViewportHeight = window.innerHeight
    requestFlightRefresh()
  })
  window.addEventListener('orientationchange', () => {
    flightViewportWidth = window.innerWidth
    flightViewportHeight = window.innerHeight
    requestFlightRefresh()
  })
  window.addEventListener('load', requestFlightRefresh)

  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(refreshMaxScroll).observe(document.documentElement)
  }

  if (typeof reducedMotionQuery.addEventListener === 'function') {
    reducedMotionQuery.addEventListener('change', requestFlightUpdate)
  } else {
    reducedMotionQuery.addListener(requestFlightUpdate)
  }

  refreshFlightPath()
}
