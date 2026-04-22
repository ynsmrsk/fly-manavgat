import { Blossom } from 'https://esm.sh/@blossom-carousel/core@1.1.0'
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
      title: 'Paketler'
    },
    gallery: {
      title: 'Galeri'
    },
    testimonials: {
      title: 'Yorumlar',
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
      map_aria: 'Fly Manavgat konum haritası'
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
      title: 'Packages'
    },
    gallery: {
      title: 'Gallery'
    },
    testimonials: {
      title: 'Testimonials',
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
      map_aria: 'Fly Manavgat location map'
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

const initializeCarousels = () => {
  document.querySelectorAll('[data-carousel]').forEach(element => {
    Blossom(element).init()
  })
}

const initializeHeroClouds = () => {
  const canvas = document.querySelector('[data-hero-clouds]')
  if (!canvas) return

  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

  let renderer
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false })
  } catch {
    return
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

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
    const vec3 skycolour1 = vec3(0.2, 0.4, 0.6);
    const vec3 skycolour2 = vec3(0.4, 0.7, 1.0);

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
    renderer.setSize(width, height, false)
    uniforms.iResolution.value.set(width, height)
  }
  resize()

  let isVisible = true
  let frameId = 0
  const start = performance.now()

  const renderFrame = now => {
    uniforms.iTime.value = (now - start) / 1000
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
    renderFrame(performance.now())
  } else {
    startLoop()
  }

  if (typeof ResizeObserver !== 'undefined') {
    const observer = new ResizeObserver(() => {
      resize()
      if (reducedMotionQuery.matches) renderFrame(performance.now())
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
      renderFrame(performance.now())
    } else {
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
initializeCarousels()
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
const scrollFlightPath = document.getElementById('scrollFlightPath')
const scrollFlightIcon = document.getElementById('scrollFlightIcon')
const navLogoImage = document.querySelector('nav.nav > div > a > img')
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

if (scrollFlight && scrollFlightPath && scrollFlightIcon) {
  let pathLength = 0
  let ticking = false
  let facingDirection = 'left'
  let flightStartX = window.innerWidth * 0.5
  let flightStartY = Math.max(52, window.innerHeight * 0.12)
  let flightStartScale = 0.9
  const flightScaleBoost = 1.11

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
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
  const getScrollProgress = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight

    if (maxScroll <= 0) return 0

    return clamp(window.scrollY / maxScroll, 0, 1)
  }
  const getFlightScale = progress => clamp(flightStartScale + (progress * 0.42), flightStartScale, 1.35)

  const setStaticFlightPosition = () => {
    const scale = getFlightScale(getScrollProgress())

    scrollFlightIcon.style.transform =
      `translate(${flightStartX}px, ${flightStartY}px) translate(-50%, -50%) scale(${scale * flightScaleBoost}) scaleX(1) rotate(22deg)`
  }

  const buildZigzagPath = () => {
    const width = window.innerWidth
    const height = window.innerHeight
    const marginX = Math.max(8, width * 0.08)
    const startX = flightStartX
    const startY = flightStartY
    const endY = height - Math.max(64, height * 0.14)
    const centerX = startX
    const horizontalRoom = Math.min(centerX - marginX, width - centerX - marginX)
    const amplitude = Math.max(120, Math.min(360, horizontalRoom * 0.95))
    const waveCount = width < 768 ? 1.8 : 2.35
    const wavePhase = Math.PI
    const samples = width < 768 ? 36 : 52
    const travelY = endY - startY

    let d = `M ${startX} ${startY}`

    for (let index = 1; index <= samples; index += 1) {
      const t = index / samples
      const primary = Math.sin((t * Math.PI * 2 * waveCount) + wavePhase)
      const secondary = Math.sin((t * Math.PI * 2 * (waveCount * 1.73)) + (wavePhase * 0.6))
      const tertiary = Math.sin((t * Math.PI * 2 * (waveCount * 0.67)) + (wavePhase * 1.4))
      const blendedWave = primary + (secondary * 0.34) + (tertiary * 0.2)
      const x = centerX + (blendedWave * amplitude)
      const y = startY + (travelY * t)

      d += ` L ${x} ${y}`
    }

    scrollFlightPath.setAttribute('d', d)
    pathLength = scrollFlightPath.getTotalLength()
  }

  const updateFlightPosition = () => {
    ticking = false

    if (reducedMotionQuery.matches || pathLength <= 0) {
      setStaticFlightPosition()
      return
    }

    const progress = getScrollProgress()
    const pointLength = pathLength * progress
    const point = scrollFlightPath.getPointAtLength(pointLength)
    const sampleOffset = 12
    const nextPoint = scrollFlightPath.getPointAtLength(clamp(pointLength + sampleOffset, 0, pathLength))
    const prevPoint = scrollFlightPath.getPointAtLength(clamp(pointLength - sampleOffset, 0, pathLength))
    const deltaX = nextPoint.x - prevPoint.x

    if (Math.abs(deltaX) > 0.2) {
      facingDirection = deltaX > 0 ? 'right' : 'left'
    }

    const flipX = facingDirection === 'right' ? -1 : 1
    const scale = getFlightScale(progress)

    scrollFlightIcon.style.transform =
      `translate(${point.x}px, ${point.y}px) translate(-50%, -50%) scale(${scale * flightScaleBoost}) scaleX(${flipX}) rotate(22deg)`
  }

  const requestFlightUpdate = () => {
    if (ticking) return

    ticking = true
    requestAnimationFrame(updateFlightPosition)
  }

  const refreshFlightPath = () => {
    refreshFlightStart()
    buildZigzagPath()
    requestFlightUpdate()
  }

  window.addEventListener('scroll', requestFlightUpdate, { passive: true })
  window.addEventListener('resize', refreshFlightPath)
  window.addEventListener('load', refreshFlightPath)

  if (typeof reducedMotionQuery.addEventListener === 'function') {
    reducedMotionQuery.addEventListener('change', requestFlightUpdate)
  } else {
    reducedMotionQuery.addListener(requestFlightUpdate)
  }

  refreshFlightPath()
}
