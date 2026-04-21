import ozonLogo from './assets/ozon-logo.png';
import wbLogo from './assets/wb-logo.png';
import yandexLogo from './assets/ym-logo.png';
import maxLogo from './assets/max-logo.png';
import telegramLogo from './assets/telegram-logo.png';
import vkLogo from './assets/vk-logo.png';
import whatsappLogo from './assets/wa-logo.jpg';

export const navItems = [
  { label: 'Каталог', href: '#catalog' },
  { label: 'О нас', href: '#about' },
  { label: 'Преимущества', href: '#advantages' },
  { label: 'Маркетплейсы', href: '#marketplaces' },
  { label: 'Контакты', href: '#contacts' },
]

export const roomCards = [
  {
    slug: 'hallway',
    title: 'Прихожая',
    preview: '/images/hallway-cover.png',
    gallery: [
      'https://titangs.ru/wp-content/uploads/2022/07/10-1-1.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/garderob_02_0000-scaled.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/gs_0001-scaled-scaled.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/korpus_3_kv_407poz3_0001-scaled-scaled.jpg',
      'https://titangs.ru/wp-content/uploads/2025/10/g-07_0001-scaled.jpg'
    ],
  },
  {
    slug: 'wardrobe',
    title: 'Гардеробная',
    preview: '/images/wardrobe-cover.png',
    gallery: [
      'https://images.unsplash.com/photo-1556909206-1602a8a25f68?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    slug: 'bedroom',
    title: 'Спальня',
    preview: '/images/bedroom-cover.png',
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1616594039964-3bcbf2f7d1f0?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1617098474202-0d0d7f60f6d8?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    slug: 'kids-room',
    title: 'Детская',
    preview: '/images/kids-room-cover.png',
    gallery: [
      'https://images.unsplash.com/photo-1526057565006-20beab8dd2ed?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1615529162924-f860538846b4?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    slug: 'bathroom',
    title: 'Ванная',
    preview: '/images/bathroom-cover.png',
    gallery: [
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1629079447777-1e605162dc8d?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    slug: 'office',
    title: 'Офис',
    preview: '/images/office-cover.png',
    gallery: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
    ],
  },
  {
    slug: 'garage-balcony',
    title: 'Гараж, балкон',
    preview: '/images/garage-balcony-cover.png',
    gallery: [
      'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1400&q=80',
    ],
  },
]

export const advantages = [
  { icon: '📅', text: 'На рынке с 2016 года' },
  { icon: '🛡️', text: '10 лет гарантии' },
  { icon: '🧑‍💻', text: '3D-проект за пару часов' },
  { icon: '💻', text: 'Рассчитаем стоимость онлайн' },
  { icon: '🚚', text: 'Доставка по всей России' },
  { icon: '🛠️', text: 'Помощь в установке' },
]

export const reasons = [
  { icon: '🏋️', text: 'Способны выдерживать до 70 кг на одну полку' },
  { icon: '📐', text: 'Подходят для помещений любой площади' },
  { icon: '🧩', text: 'Мобильны благодаря быстрой сборке и легкому демонтажу' },
  { icon: '🧼', text: 'Не требуют особенного ухода' },
  { icon: '⏳', text: 'Сохраняют эксплуатационные свойства в течение долгих лет' },
  {
    icon: '🔄',
    text: 'При необходимости можно изменять конфигурацию, переставляя элементы местами и докупая новые',
  },
  { icon: '🛡️', text: 'Толщина металла больше, чем у конкурентов' },
]

export const showcaseVideos = [
  'https://youtube.com/shorts/NrpOB4Kox8E?si=WHRUet_bi2QAc5ZX',
  'https://youtube.com/shorts/brDIwXTFWl4?si=r_PZOmOpp2RI0hqa',
  'https://youtube.com/shorts/JmHQ7_v_l_I?si=S93DlaGJVg3mo7bw',
]

export const overviewVideo = 'https://youtu.be/SOg80UhBj7Q?si=LinzhozopHGLOGfv'

export const contacts = {
  phone: '+7 (960) 257-44-49',
  phoneTel: '+79602574449',
  email: 'grd-manager@yandex.ru',
  address: 'г. Рязань, ул. Строителей 17А',
  mapLink:
    'https://yandex.ru/maps/?text=г.%20Рязань,%20ул.%20Строителей%2017А&z=16',
  mapEmbedUrl:
    'https://yandex.ru/map-widget/v1/?text=г.%20Рязань,%20ул.%20Строителей%2017А&z=16',
}

export const marketplaces = [
  {
    name: 'Ozon',
    href: 'https://www.ozon.ru/seller/garderobnye-na-zakaz-titan-gs/',
    logo: ozonLogo
  },
  {
    name: 'Wildberries',
    href: 'https://www.wildberries.ru/seller/1068748',
    logo: wbLogo
  },
  {
    name: 'Яндекс Маркет',
    href: 'https://market.yandex.ru/business--moia-garderobnaia/1988786?generalContext=t%3DshopInShop%3Bi%3D1%3Bbi%3D1988786%3B&rs=eJwzEvjEyMvBKLDwEKsEg8atZSdkAStqBWk%2C&searchContext=sins_ctx',
    logo: yandexLogo
  },
]

export const messengerLinks = [
  {
    id: 'max',
    label: 'MAX',
    icon: maxLogo,
    href: 'https://max.ru/chat/79602574449',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    icon: telegramLogo,
    href: 'https://t.me/+79602574449',
  },
  {
    id: 'vk',
    label: 'VK',
    icon: vkLogo,
    href: 'https://vk.me/wbgarderobnuenazakaz', 
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: whatsappLogo,
    href: 'https://wa.me/79602574449',
  },
]