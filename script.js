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
      text: 'Akdeniz kıyılarını gökyüzünden keşfetmek için şimdi rezervasyon yapın. Profesyonel tandem pilotlarımızla güvenli bir uçuş deneyimi yaşayın ve anınızı fotoğraf-video ile ölümsüzleştirin.'
    },
    experience: {
      title: 'Uçuş Deneyimi',
      card_1_title: 'Zirveye Teleferik',
      card_1_text: 'Kalkış noktasına teleferikle ulaşın ve yaklaşık 15 dakikalık yolculuk boyunca Ölüdeniz manzarasının keyfini çıkarın.',
      card_2_title: 'Uçuş Öncesi Brifing',
      card_2_text: 'T2 sertifikalı pilotlarımız size kısa bir brifing verir ve aklınızdaki tüm soruları cevaplar.',
      card_3_title: 'Kalkış',
      card_3_text: 'Sadece birkaç adım koşun ve dünyanın en güzel sahillerinden birinin üzerinde süzülmeye başlayın.',
      card_4_title: 'Uçuş',
      card_4_text: "20–30 dakika boyunca süzülün ve unutulmaz anlar yaşayın. İsterseniz biraz adrenalin için akrobatik hareketler de eklenebilir.",
      card_5_title: 'İniş',
      card_5_text: 'Ölüdeniz sahiline yumuşak bir iniş yapın. Ofisimiz sadece birkaç adım ötede; fotoğraf ve videolarınızla bu anı ölümsüzleştirin.'
    },
    reasons: {
      title: 'Neden Biz'
    },
    pricing: {
      title: 'Paketler',
      kicker: 'Tek fiyat',
      paragliding_title: 'Yamaç Paraşütü',
      description: 'Profesyonel tandem pilot eşliğinde Manavgat ve Alanya kıyılarını gökyüzünden izleyin.',
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
      a4: 'Gözlerinizi rüzgardan korumak için güneş gözlüğü, koşu için spor ayakkabı ve mevsime uygun bir rüzgarlık önerilir. Babadağ zirvesi sahile göre 10–15 derece daha soğuk olabilir.',
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
      address_value: 'Alanya Yamaç Paraşütü Ulusky, Alanya / Antalya',
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
      text: 'Book now to explore the Mediterranean coastline from the sky. Fly safely with our professional tandem pilots and preserve every moment with photo and video options.'
    },
    experience: {
      title: 'Flight Experience',
      card_1_title: 'Cable Car to the Summit',
      card_1_text: 'Reach the launch site by cable car and enjoy the panoramic views of Ölüdeniz throughout the 15-minute ride.',
      card_2_title: 'Pre-Flight Briefing',
      card_2_text: 'Our T2-certified pilots give you a quick briefing, and you can ask any questions on your mind.',
      card_3_title: 'Takeoff',
      card_3_text: 'Just run a few steps and start soaring above one of the most beautiful beaches in the world.',
      card_4_title: 'The Flight',
      card_4_text: "Glide for 20–30 minutes and experience unforgettable moments — add some excitement with acrobatic moves if you'd like.",
      card_5_title: 'Landing',
      card_5_text: 'Touch down gently on Ölüdeniz beach. Our office is just steps away — immortalize the moment with your photos and video.'
    },
    reasons: {
      title: 'Why Us'
    },
    pricing: {
      title: 'Packages',
      kicker: 'Single price',
      paragliding_title: 'Paragliding',
      description: 'See the Manavgat and Alanya coastline from the sky with a professional tandem pilot.',
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
      a4: 'Sunglasses, sneakers and a windbreaker appropriate for the season are recommended. The summit of Babadağ can be 10–15 degrees colder than the beach.',
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
      address_value: 'Alanya Yamaç Paraşütü Ulusky, Alanya / Antalya',
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
      text: 'Забронируйте полет сейчас, чтобы увидеть средиземноморское побережье с высоты. Летайте безопасно с нашими профессиональными тандем-пилотами и сохраните впечатления с фото и видео.'
    },
    experience: {
      title: 'Полет',
      card_1_title: 'Канатная дорога к старту',
      card_1_text: 'Поднимитесь к месту старта на канатной дороге и наслаждайтесь панорамными видами Олюдениза во время поездки около 15 минут.',
      card_2_title: 'Инструктаж перед полетом',
      card_2_text: 'Наши пилоты с сертификатом T2 проводят короткий инструктаж и отвечают на все ваши вопросы.',
      card_3_title: 'Старт',
      card_3_text: 'Сделайте всего несколько шагов и начните парить над одним из самых красивых пляжей мира.',
      card_4_title: 'Полет',
      card_4_text: 'Парите 20–30 минут и получите незабываемые впечатления. По желанию можно добавить немного адреналина с акробатическими маневрами.',
      card_5_title: 'Посадка',
      card_5_text: 'Мягко приземлитесь на пляже Олюдениз. Наш офис находится всего в нескольких шагах, где вы сможете забрать фото и видео.'
    },
    reasons: {
      title: 'Почему мы'
    },
    pricing: {
      title: 'Пакеты',
      kicker: 'Одна цена',
      paragliding_title: 'Параплан',
      description: 'Посмотрите на побережье Манавгата и Аланьи с высоты вместе с профессиональным тандем-пилотом.',
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
      a4: 'Рекомендуем солнцезащитные очки, кроссовки для разбега и ветровку по сезону. На вершине Бабадаг может быть на 10–15 градусов холоднее, чем на пляже.',
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
      address_value: 'Alanya Yamaç Paraşütü Ulusky, Alanya / Antalya',
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

  const resize = () => {
    const width = canvas.clientWidth || 1
    const height = canvas.clientHeight || 1
    const pixelRatio = getCloudPixelRatio()

    renderer.setPixelRatio(pixelRatio)
    renderer.setSize(width, height, false)
    uniforms.iResolution.value.set(width * pixelRatio, height * pixelRatio)
  }
  resize()

  let isVisible = true
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
    if (frameId || reducedMotionQuery.matches || !isVisible) return
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
    const observer = new ResizeObserver(() => {
      resize()
      if (reducedMotionQuery.matches) renderFrame(performance.now(), false)
    })
    observer.observe(canvas)
  } else {
    window.addEventListener('resize', resize)
  }

  if (typeof IntersectionObserver !== 'undefined') {
    const visibilityObserver = new IntersectionObserver(entries => {
      isVisible = entries[0]?.isIntersecting ?? true
      if (isVisible) startLoop()
      else stopLoop()
    })
    visibilityObserver.observe(canvas)
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

window.addEventListener('resize', measureFaqHeights)

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
  const TAU = Math.PI * 2

  let ticking = false
  let refreshQueued = false
  let facingDirection = 'left'
  let flightStartX = window.innerWidth * 0.5
  let flightStartY = Math.max(52, window.innerHeight * 0.12)
  let flightStartScale = 0.9
  let maxScroll = 0
  let centerX = flightStartX
  let travelY = window.innerHeight - flightStartY
  let amplitude = 120
  let waveCount = 2.35
  let waveStart = 0
  const flightScaleBoost = 1.11

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
  const getWave = progress => (
    Math.sin((progress * TAU * waveCount) + Math.PI) +
    (Math.sin((progress * TAU * waveCount * 1.73) + (Math.PI * 0.6)) * 0.34) +
    (Math.sin((progress * TAU * waveCount * 0.67) + (Math.PI * 1.4)) * 0.2)
  )
  const getSlope = progress => (
    Math.cos((progress * TAU * waveCount) + Math.PI) +
    (Math.cos((progress * TAU * waveCount * 1.73) + (Math.PI * 0.6)) * 0.34 * 1.73) +
    (Math.cos((progress * TAU * waveCount * 0.67) + (Math.PI * 1.4)) * 0.2 * 0.67)
  )
  const refreshFlightStart = () => {
    if (!navLogoImage) {
      flightStartX = window.innerWidth * 0.5
      flightStartY = Math.max(52, window.innerHeight * 0.12)
      flightStartScale = 0.9
      return
    }

    const logoRect = navLogoImage.getBoundingClientRect()

    if (!logoRect.width || !logoRect.height) {
      flightStartX = window.innerWidth * 0.5
      flightStartY = Math.max(52, window.innerHeight * 0.12)
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
    maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
  }
  const getFlightScale = progress => clamp(flightStartScale + (progress * 0.42), flightStartScale, 1.35)

  const measureFlightPath = () => {
    const width = window.innerWidth
    const height = window.innerHeight
    const marginX = Math.max(8, width * 0.08)
    const endY = height - Math.max(64, height * 0.14)
    centerX = flightStartX
    const horizontalRoom = Math.min(centerX - marginX, width - centerX - marginX)

    travelY = endY - flightStartY
    amplitude = Math.max(120, Math.min(360, horizontalRoom * 0.95))
    waveCount = width < 768 ? 1.8 : 2.35
    waveStart = getWave(0)
  }

  const updateFlightPosition = () => {
    ticking = false

    const progress = maxScroll > 0 ? clamp(window.scrollY / maxScroll, 0, 1) : 0
    const slope = getSlope(progress)
    const x = reducedMotionQuery.matches ? flightStartX : centerX + ((getWave(progress) - waveStart) * amplitude)
    const y = reducedMotionQuery.matches ? flightStartY : flightStartY + (travelY * progress)

    if (slope > 0.02) {
      facingDirection = 'right'
    } else if (slope < -0.02) {
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
    measureFlightPath()
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
  window.addEventListener('resize', requestFlightRefresh)
  window.addEventListener('load', requestFlightRefresh)

  if (typeof ResizeObserver !== 'undefined') {
    new ResizeObserver(requestFlightRefresh).observe(document.documentElement)
  }

  if (typeof reducedMotionQuery.addEventListener === 'function') {
    reducedMotionQuery.addEventListener('change', requestFlightUpdate)
  } else {
    reducedMotionQuery.addListener(requestFlightUpdate)
  }

  refreshFlightPath()
}
