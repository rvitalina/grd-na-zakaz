import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { roomCards } from '../data.jsx'

function RoomPage() {
  const { roomSlug } = useParams()
  const room = roomCards.find((item) => item.slug === roomSlug)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [roomSlug])

  if (!room) {
    return (
      <main className="room-page">
        <h1>Комната не найдена</h1>
        <Link to="/" className="back-link">
          Вернуться на главную
        </Link>
      </main>
    )
  }

  return (
    <main className="room-page">
      <Link to="/" className="room-back-link" aria-label="На главную">
        ⟵
      </Link>
      <div className="room-page-head">
        <h1>{room.title}</h1>
        <p>Примеры гардеробных решений для выбранного помещения.</p>
      </div>
      <div className="room-gallery">
        {room.gallery.map((image) => (
          <img key={image} src={image} alt={`Гардеробная для ${room.title}`} />
        ))}
      </div>
    </main>
  )
}

export default RoomPage
