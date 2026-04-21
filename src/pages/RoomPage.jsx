import { Link, useParams } from 'react-router-dom'
import { roomCards } from '../data'

function RoomPage() {
  const { roomSlug } = useParams()
  const room = roomCards.find((item) => item.slug === roomSlug)

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
      <div className="room-page-head">
        <h1>{room.title}</h1>
        <p>Примеры гардеробных решений для выбранного помещения.</p>
        <Link to="/" className="back-link">
          На главную
        </Link>
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
