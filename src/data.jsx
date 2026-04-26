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
    iconPng: maxLogo,
    href: '',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    iconSvg: <svg viewBox="0 0 24 24" width="26" height="26" fill="#fff" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>,
    href: 'https://t.me/+79602574449',
  },
  {
    id: 'vk',
    label: 'VK',
    iconSvg: <svg viewBox="0 0 24 24" width="26" height="26" fill="#fff" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.408 4 7.932c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.745-.576.745z"/>
    </svg>,
    href: 'https://vk.me/wbgarderobnuenazakaz', 
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    iconSvg: 
    <svg viewBox="0 0 24 24" width="26" height="26" fill="#fff" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>,
    href: 'https://wa.me/79602574449',
  },
]