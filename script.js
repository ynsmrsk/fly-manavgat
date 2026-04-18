import { Blossom } from 'https://esm.sh/@blossom-carousel/core@1.1.0'

const messages = {
  tr: {
    meta: {
      title: 'Fly Manavgat',
      description: 'Manavgat ve Alanya bölgesinde hizmet veren Fly Manavgat yamaç paraşütü website'
    },
    nav: {
      aria: 'Ana navigasyon',
      home: 'Fly Manavgat ana sayfa',
      experience: 'Uçuş Deneyimi',
      reasons: 'Neden Biz',
      pricing: 'Paketler',
      gallery: 'Galeri',
      testimonials: 'Yorumlar',
      faq: 'Sık Sorulanlar',
      contact: 'İletişim',
      info: 'Bilgi Al',
      booking: 'Rezervasyon'
    },
    hero: {
      eyebrow: 'Paraglide Manavgat Alanya',
      text: 'Akdeniz kıyısında hafif, güvenli ve etkileyici tandem uçuş deneyimi'
    },
    experience: {
      title: 'Uçuş Deneyimi',
      text: 'Uçuş gününün zirveye çıkıştan sahile inişe kadar nasıl aktığını adım adım keşfedin.',
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
      title: 'Neden Biz',
      text: 'Deneyimli pilotlar, güvenlik odaklı operasyon ve Manavgat Alanya hattına hakim yerel ekip anlatılacak.'
    },
    pricing: {
      title: 'Paketler',
      text: 'Standart uçuş, medya paketleri ve rezervasyon akışı burada net bir yapıyla sunulacak.'
    },
    gallery: {
      title: 'Galeri',
      text: 'Uçuşlardan kareler, manzara detayları ve görsel hikaye bu alana eklenecek.'
    },
    testimonials: {
      title: 'Yorumlar',
      text: 'Misafirlerimizin uçuş günüyle ilgili anlattıkları kısa ve net deneyim notları burada yer alacak.',
      quote_1: '“Uçuş öncesi her şey çok sakin ve güven vericiydi. Havalanınca tüm gerginlik yerini keyfe bıraktı.”',
      author_1: 'Elif A.',
      quote_2: '“Manzara inanılmazdı. Ekip çok ilgiliydi ve rezervasyon süreci beklediğimizden çok daha rahattı.”',
      author_2: 'Daniel K.',
      quote_3: '“İlk defa denedim ve düşündüğümden çok daha konforlu geçti. Fotoğraf ve video kısmı da harikaydı.”',
      author_3: 'Merve T.'
    },
    faq: {
      title: 'Sık Sorulanlar',
      text: 'İlk kez uçacak misafirlerin en çok sorduğu temel soruları burada kısa cevaplarla toplayacağız.',
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
      text: 'Manavgat ve Alanya uçuşları için bize yazın. Size en uygun saat, paket ve hazırlık detaylarını iletelim.',
      name_label: 'Ad Soyad',
      name_placeholder: 'Adınız ve soyadınız',
      email_label: 'E-posta',
      email_placeholder: 'ornek@mail.com',
      phone_label: 'Telefon',
      phone_placeholder: '+90 5xx xxx xx xx',
      message_label: 'Mesaj',
      message_placeholder: 'Uçuş tarihi, kişi sayısı veya merak ettiğiniz detayları yazın',
      submit: 'Mesaj Gönder',
      whatsapp: "WhatsApp'tan Ulaşın",
      telegram: "Telegram'dan Ulaşın"
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
      experience: 'Flight Experience',
      reasons: 'Why Us',
      pricing: 'Packages',
      gallery: 'Gallery',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      contact: 'Contact',
      info: 'Get Info',
      booking: 'Book Now'
    },
    hero: {
      eyebrow: 'Paragliding Manavgat Alanya',
      text: 'A light, safe and memorable tandem paragliding experience on the Mediterranean coast'
    },
    experience: {
      title: 'Flight Experience',
      text: 'Discover step by step how the day flows from the summit ride to the beach landing.',
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
      title: 'Why Us',
      text: 'Experienced pilots, a safety-first operation and a local team that knows the Manavgat Alanya line will be presented here.'
    },
    pricing: {
      title: 'Packages',
      text: 'Standard flight, media packages and the booking flow will be presented here with a clear structure.'
    },
    gallery: {
      title: 'Gallery',
      text: 'Moments from the flights, landscape details and the visual story will be added here.'
    },
    testimonials: {
      title: 'Testimonials',
      text: 'Short and clear notes from our guests about their flight day will appear here.',
      quote_1: '“Everything before the flight felt calm and reassuring. Once we took off, all the tension turned into pure joy.”',
      author_1: 'Elif A.',
      quote_2: '“The view was incredible. The team was attentive and the booking process was much easier than we expected.”',
      author_2: 'Daniel K.',
      quote_3: '“It was my first time and it felt far more comfortable than I imagined. The photo and video part was also excellent.”',
      author_3: 'Merve T.'
    },
    faq: {
      title: 'FAQ',
      text: 'We will gather the most common questions from first-time flyers here with short answers.',
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
      text: 'Write to us for flights in Manavgat and Alanya. We will share the best time, package and preparation details for you.',
      name_label: 'Full Name',
      name_placeholder: 'Your full name',
      email_label: 'Email',
      email_placeholder: 'example@mail.com',
      phone_label: 'Phone',
      phone_placeholder: '+90 5xx xxx xx xx',
      message_label: 'Message',
      message_placeholder: 'Write your preferred flight date, number of people or any details you want to ask about',
      submit: 'Send Message',
      whatsapp: 'Reach via WhatsApp',
      telegram: 'Reach via Telegram'
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

applyLocale(getInitialLocale())
initializeFaq()
initializeCarousels()

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
