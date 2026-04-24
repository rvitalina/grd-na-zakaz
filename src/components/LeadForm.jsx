import { useState } from 'react'

const initialForm = { name: '', phone: '+7' }
const LEAD_EMAIL = 'grd-manager@yandex.ru'

function LeadForm({ source = 'form', onSuccess }) {
  const [formData, setFormData] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    if (name === 'name') {
      const normalized = value.replace(/\s+/g, ' ').trimStart()
      const capitalized = normalized.length > 0
          ? normalized.charAt(0).toUpperCase() + normalized.slice(1)
          : ''
      setFormData((prev) => ({ ...prev, name: capitalized }))
      return
    }

    if (name === 'phone') {
      const digits = value.replace(/\D/g, '')
      let localDigits = digits
      if (localDigits.startsWith('7')) localDigits = localDigits.slice(1)
      if (localDigits.startsWith('8')) localDigits = localDigits.slice(1)
      if (!localDigits.startsWith('9') && localDigits.length > 0) {
        localDigits = `9${localDigits.slice(0, 9)}`
      }
      localDigits = localDigits.slice(0, 10)

      let formatted = '+7'
      if (localDigits.length > 0) formatted += ` (${localDigits.slice(0, 3)}`
      if (localDigits.length >= 3) formatted += ')'
      if (localDigits.length > 3) formatted += ` ${localDigits.slice(3, 6)}`
      if (localDigits.length > 6) formatted += `-${localDigits.slice(6, 8)}`
      if (localDigits.length > 8) formatted += `-${localDigits.slice(8, 10)}`

      setFormData((prev) => ({ ...prev, phone: formatted }))
      return
    }
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const payload = JSON.stringify({ ...formData, source })
      let isSent = false

      try {
        const apiResponse = await fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: payload,
        })
        isSent = apiResponse.ok
      } catch { isSent = false }

      if (!isSent) {
        const fallbackResponse = await fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            source,
            _subject: `Новая заявка с сайта(${source})`,
          }),
        })
        if (!fallbackResponse.ok) throw new Error('Ошибка отправки.')
      }

      setStatus('success')
      setFormData(initialForm)
      
      // Вызываем функцию успеха, чтобы закрыть форму и открыть попап
      if (onSuccess) onSuccess(); 

    } catch (submitError) {
      setStatus('error')
      setError(submitError.message || 'Что-то пошло не так.')
    }
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit}>
      <label>Имя
        <input type="text" name="name" required placeholder="Ваше имя" value={formData.name} onChange={handleChange} />
      </label>
      <label>Телефон
        <input type="tel" name="phone" required placeholder="+7 (9__) ___-__-__" value={formData.phone} onChange={handleChange} />
      </label>
      <button type="submit" className="submit-btn" disabled={status === 'loading'}>
        {status === 'loading' ? 'Отправка...' : 'Отправить'}
      </button>
      {status === 'error' && <p className="error-text">{error}</p>}
    </form>
  )
}

export default LeadForm