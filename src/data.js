import ozonLogo from './assets/ozon-logo.png';
import wbLogo from './assets/wb-logo.png';
import yandexLogo from './assets/ym-logo.png';
import maxLogo from './assets/max-logo.png';
import telegramLogo from './assets/telegram-logo.png';
import vkLogo from './assets/vk-logo.png';
import whatsappLogo from './assets/wa-logo.jpg';
import hallwayCover from '../public/images/hallway-cover.png'
import wardrobeCover from '../public/images/wardrobe-cover.png'
import bedroomCover from '../public/images/bedroom-cover.png'
import kidsRoomCover from '../public/images/kids-room-cover.png'
import bathroomCover from '../public/images/bathroom-cover.png'
import officeCover from '../public/images/office-cover.png'
import garageCover from '../public/images/garage-balcony-cover.png'
import pr1 from '../public/images/pr1.jpg'
import pr2 from '../public/images/pr2.jpg'
import pr3 from '../public/images/pr3.jpg'
import pr4 from '../public/images/pr4.jpg'
import sp1 from '../public/images/sp1.jpg'
import sp2 from '../public/images/sp2.jpg'
import sp3 from '../public/images/sp3.jpg'
import sp4 from '../public/images/sp4.jpg'
import sp5 from '../public/images/sp5.jpg'
import sp6 from '../public/images/sp6.jpg'
import sp7 from '../public/images/sp7.jpg'

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
    preview: hallwayCover,
    gallery: [
      'https://titangs.ru/wp-content/uploads/2022/07/10-1-1.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/garderob_02_0000-scaled.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/gs_0001-scaled-scaled.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/korpus_3_kv_407poz3_0001-scaled-scaled.jpg',
      'https://titangs.ru/wp-content/uploads/2025/10/g-07_0001-scaled.jpg',
      pr1,
      pr2,
      pr3,
      pr4  
    ],
  },
  {
    slug: 'wardrobe',
    title: 'Гардеробная',
    preview: wardrobeCover,
    gallery: [
      'https://titangs.ru/wp-content/uploads/2022/07/korpus_1_kv_121_poz_2_0001-scaled-scaled.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/korpus_2_kv_9_poz_7_0004-scaled-scaled.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/korpus_1_poz11_0002-min-scaled-scaled.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/korpus_1_poz_5_0001-scaled-scaled.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/gs_0004-scaled-scaled.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/garderobnaya-s-tumboj_0001-scaled-scaled.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/korpus_3_kv_429poz7_0001-scaled-scaled.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/garderob_01_01-scaled.jpg'
    ],
  },
  {
    slug: 'bedroom',
    title: 'Спальня',
    preview: bedroomCover,
    gallery: [
      sp1, sp2, sp3, sp4, sp5, sp6, sp7
    ],
  },
  {
    slug: 'kids-room',
    title: 'Детская',
    preview: kidsRoomCover,
    gallery: [
      'https://titangs.ru/wp-content/uploads/2022/07/slader_1_img_6-1.png',
      'https://titangs.ru/wp-content/uploads/2022/07/kids_room-1_0003-min-scaled-scaled.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/kids_room2_white_0001-min-scaled-scaled.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/kids_room2_zoom-scaled-scaled.jpg'
    ],
  },
  {
    slug: 'bathroom',
    title: 'Ванная',
    preview: bathroomCover,
    gallery: [
      'https://titangs.ru/wp-content/uploads/2022/07/p-2_white_0001-1.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/p1-2_0001-1.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/1_white_0001-1.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/b-1_0001-1.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/p2-3_white_0001-1.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/p4-3_0001-1.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/gs_0007-1.jpg'
    ],
  },
  {
    slug: 'office',
    title: 'Офис',
    preview: officeCover,
    gallery: [
      'https://titangs.ru/wp-content/uploads/2022/07/r-1_white_0001-1.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/rz-1_0001-1.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/rz-2_0001-1.jpg'
    ],
  },
  {
    slug: 'garage-balcony',
    title: 'Гараж, балкон',
    preview: garageCover,
    gallery: [
      'https://titangs.ru/wp-content/uploads/2022/07/garage_03_0001-1-scaled.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/garage_04_0001-1-scaled.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/garage_05_0001-1-scaled.jpg',
      'https://titangs.ru/wp-content/uploads/2020/11/slader_1_img_9-1.png',
      'https://titangs.ru/wp-content/uploads/2022/07/garage_06_0001-1-scaled.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/garage_01_0001-1-scaled.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/d-1_zoom_0001-1.jpg',
      'https://titangs.ru/wp-content/uploads/2022/07/d-2_zoom_0001-1.jpg'
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