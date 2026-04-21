import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import titanLogo from '../assets/titan-gs-logo.png'
import LeadForm from '../components/LeadForm'
import {
  advantages,
  contacts,
  marketplaces,
  messengerLinks,
  navItems,
  overviewVideo,
  reasons,
  roomCards,
  showcaseVideos,
} from '../data'

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMessengerOpen, setIsMessengerOpen] = useState(false)
  const [isPhoneCopied, setIsPhoneCopied] = useState(false)
  const [autoplayVideoKeys, setAutoplayVideoKeys] = useState({})
  const heroVideoFrameRef = useRef(null)
  const videoRefs = useRef({})

  const handleFormSuccess = () => {
    setIsModalOpen(false); // Закрываем форму
    setTimeout(() => {
      setIsSuccessOpen(true); // Открываем уведомление с небольшой задержкой для плавности
    }, 300);
  };

  useEffect(() => {
    if (isSuccessOpen) {
      const timer = setTimeout(() => setIsSuccessOpen(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [isSuccessOpen]);

  const getYoutubeVideoId = (url) => {
    const shortsMatch = url.match(/youtube\.com\/shorts\/([^?&/]+)/)
    if (shortsMatch?.[1]) return shortsMatch[1]

    const shortLinkMatch = url.match(/youtu\.be\/([^?&/]+)/)
    if (shortLinkMatch?.[1]) return shortLinkMatch[1]

    const watchMatch = url.match(/[?&]v=([^?&/]+)/)
    if (watchMatch?.[1]) return watchMatch[1]

    return null
  }

  const getYoutubeEmbedUrl = (url, autoplay = false) => {
    const videoId = getYoutubeVideoId(url)
    if (!videoId) return url

    const params = new URLSearchParams({
      rel: '0',
      modestbranding: '1',
      playsinline: '1',
    })

    if (autoplay) {
      params.set('autoplay', '1')
      params.set('mute', '1')
    }

    return `https://www.youtube.com/embed/${videoId}?${params.toString()}`
  }

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(contacts.phone)
      setIsPhoneCopied(true)
      window.setTimeout(() => setIsPhoneCopied(false), 1800)
    } catch {
      setIsPhoneCopied(false)
    }
  }

  useEffect(() => {
    const frame = heroVideoFrameRef.current
    if (!frame) return undefined

    const slowDownVideo = () => {
      if (!frame.contentWindow) return
      frame.contentWindow.postMessage(
        JSON.stringify({
          event: 'command',
          func: 'setPlaybackRate',
          args: [0.75],
        }),
        '*',
      )
    }

    const timer = window.setTimeout(() => {
      slowDownVideo()
      // Repeat once more because YouTube can ignore the first command before full init.
      window.setTimeout(slowDownVideo, 1000)
    }, 1000)

    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const { videoKey } = entry.target.dataset
          if (!videoKey) return
          setAutoplayVideoKeys((prev) => ({ ...prev, [videoKey]: true }))
        })
      },
      { threshold: 0.55 },
    )

    Object.values(videoRefs.current).forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header className="header">
        <img src={titanLogo} alt="Titan-GS" className="logo" />
        <div className="header-contacts">
          <a href="tel:+79602574449">+7 (960) 257-44-49</a>
          <span>Пн-Вс 9:00-21:00</span>
        </div>
        <button
          className="burger-btn"
          aria-label="Открыть меню"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={isMobileMenuOpen ? 'open' : ''}>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero">
          <iframe
            ref={heroVideoFrameRef}
            className="hero-video-frame"
            src="https://www.youtube.com/embed/NJ3Xp579t7s?autoplay=1&mute=1&controls=0&loop=1&playlist=NJ3Xp579t7s&modestbranding=1&rel=0&playsinline=1&enablejsapi=1"
            title="Titan-GS Hero Background"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <div className="hero-overlay">
            <h1>Модульные гардеробные системы хранения</h1>
            <p>С доставкой по всей России</p>
            <button className="hero-cta-btn" onClick={() => setIsModalOpen(true)}>
              Рассчитать стоимость
            </button>
            <p className="promo-note">
              Скидка 20% по промокоду <span>«ТИТАН20»</span>
            </p>
          </div>
        </section>

        <section id="catalog" className="section">
          <h2>Решения для любой комнаты</h2>
          <Swiper
            className="room-swiper"
            modules={[Navigation, Autoplay]}
            spaceBetween={24}
            navigation
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            loop
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2.05 },
              1024: { slidesPerView: 2.6 },
            }}
          >
            {roomCards.map((room) => (
              <SwiperSlide key={room.slug}>
                <Link to={`/rooms/${room.slug}`} className="room-card">
                  <img src={room.preview} alt={room.title} />
                  <div className="room-card-overlay">
                    <span>{room.title}</span>
                    <strong>Посмотреть примеры</strong>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section id="about" className="section about">
          <h2>Премиальные гардеробные по доступным ценам</h2>
          <p>
            Мы являемся официальным дилером гардеробных систем{' '}
            <span className="best-price">Titan-GS</span> и готовы
            предложить Вам <span className="best-price">лучшие</span> цены на рынке.
          </p>
        </section>

        <section id="advantages" className="section">
          <h2>Наши преимущества</h2>
          <div className="grid">
            {advantages.map((item) => (
              <article key={item.text} className="feature-card advantage-card">
                <div className="icon">{item.icon}</div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Причины выбрать Titan-GS</h2>
          <div className="grid">
            {reasons.map((item) => (
              <article key={item.text} className="feature-card reason-card">
                <div className="icon">{item.icon}</div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Titan-GS - надежность и практичность в каждой детали</h2>
          <div className="video-list">
            {showcaseVideos.map((video, index) => {
              const videoKey = `showcase-${index}`
              return (
                <iframe
                  key={videoKey}
                  ref={(node) => {
                    if (node) videoRefs.current[videoKey] = node
                  }}
                  data-video-key={videoKey}
                  className="showcase-video"
                  src={getYoutubeEmbedUrl(video, Boolean(autoplayVideoKeys[videoKey]))}
                  title={`Видео Titan-GS ${video}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )
            })}
          </div>
        </section>

        <section className="section contact-section">
          <h2>Оставьте заявку</h2>
          <p className="contact-promo">
            Заполните форму и получите скидку 20% по промокоду <span className='pulse-effect'>ТИТАН20</span>
          </p>
          <LeadForm source="main-form" />
        </section>

        <section className="section">
          <h2>Наглядно о наших системах</h2>
          <div className="laptop-frame">
            <iframe
              ref={(node) => {
                if (node) videoRefs.current.overview = node
              }}
              data-video-key="overview"
              className="laptop-video"
              src={getYoutubeEmbedUrl(overviewVideo, Boolean(autoplayVideoKeys.overview))}
              title="Наглядно о системах Titan-GS"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        <section id="marketplaces" className="section marketplaces-section">
          <h2>Мы на маркетплейсах</h2>
          <div className="marketplaces-list">
            {marketplaces.map((marketplace) => (
              <a
                key={marketplace.name}
                href={marketplace.href}
                target="_blank"
                rel="noreferrer"
                className="marketplace-link"
              >
                <img
                  src={marketplace.logo}
                  alt={marketplace.name}
                  className="marketplace-img"
                />
              </a>
            ))}
          </div>
        </section>

      </main>

      <footer id="contacts" className="site-footer">
        <div className="site-footer__divider" aria-hidden="true" />
        <div className="site-footer__top">
          <h2 className="site-footer__title">Контакты</h2>
          <div className="site-footer__details">
            <div className="site-footer__phone-row">
              <a className="site-footer__line" href={`tel:${contacts.phoneTel}`}>
                {contacts.phone}
              </a>
              <button
                type="button"
                className="copy-btn site-footer__copy"
                onClick={handleCopyPhone}
              >
                {isPhoneCopied ? 'Скопировано' : 'Копировать'}
              </button>



            </div>
            <a className="site-footer__line" href={`mailto:${contacts.email}`}>
              {contacts.email}
            </a>
            <p className="site-footer__line site-footer__address">
              <span className="site-footer__label">Адрес:</span> {contacts.address}
            </p>
          </div>
        </div>
        <div className="site-footer__map-wrap">
          <iframe
            className="site-footer__map"
            src={contacts.mapEmbedUrl}
            title="Яндекс Карта"
            loading="lazy"
            allowFullScreen
          />
          <a
            className="site-footer__map-open"
            href={contacts.mapLink}
            target="_blank"
            rel="noreferrer"
          >
            Открыть в Яндекс Картах
          </a>
        </div>
      </footer>

      <div className="messenger-widget">
        {messengerLinks.map((messenger, index) => (
          <a
            key={messenger.id}
            className={`messenger-link messenger-${messenger.id} ${isMessengerOpen ? 'is-open' : ''}`}
            href={messenger.href}
            target="_blank"
            rel="noreferrer"
            aria-label={messenger.label}
            style={{ '--item-index': index }}
          >
            {messenger.label}
          </a>
        ))}
        <button
          type="button"
          className="messenger-toggle"
          aria-label="Открыть мессенджеры"
          onClick={() => setIsMessengerOpen((prev) => !prev)}
        >
          {isMessengerOpen ? '×' : '💬'}
        </button>
      </div>

      {/* 1. Основное модальное окно с формой */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>×</button>
            <h3>Рассчитать стоимость</h3>
            {/* Передаем функцию успеха в пропсы формы */}
            <LeadForm source="hero-modal" onSuccess={handleFormSuccess} />
          </div>
        </div>
      )}

      {/* 2. Попап уведомление об успехе */}
      {isSuccessOpen && (
        <div className="modal-backdrop" onClick={() => setIsSuccessOpen(false)}>
          <div className="modal-content success-popup" onClick={(e) => e.stopPropagation()}>
            <div className="success-icon">✓</div>
            <h3>Заявка принята!</h3>
            <p>Свяжемся с Вами в ближайшее время.</p>
            <button className="submit-btn" onClick={() => setIsSuccessOpen(false)}>
              Отлично
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default HomePage
