import QRCode from 'qrcode'
import { useState } from 'react'
import './QrWifi.css'
import { QrCode } from '../QrCode/QrCode'

export const QrWifi = () => {
  const [qrCode, setQrCode] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    const inputs = Object.fromEntries(new window.FormData(event.target))
    const qrInfo = `WIFI:S:${inputs.ssid};T:${inputs.encryption};P:${inputs.password};;`
    QRCode.toDataURL(qrInfo).then(url => setQrCode(url))
  }
  return (
    <>
      <section className='topSection'>
        <h2>WiFi QR</h2>
      </section>
      <section className='bottomSection'>
        <form className='wifiForm' onSubmit={handleSubmit}>
          <fieldset className='wifiInfo'>
            <label htmlFor='encryption'>
              Cifrado
              <select name='encryption' id='encryption'>
                <option value='nopass'>nopass</option>
                <option value='WEP'>WEP</option>
                <option value='WPA'>WPA</option>
                <option value='WPA2'>WPA2</option>
              </select>
            </label>

            <label htmlFor='hidden' className='wifiHidden'>
              Is Hidden?
              <input type='checkbox' name='hidden' id='hidden' />
            </label>

            <label htmlFor='ssid'>
              SSID
              <input
                type='text'
                name='ssid'
                id='ssid'
                placeholder='myWifiName'
                required
              />
            </label>

            <label htmlFor='password'>
              Password
              <input
                type='text'
                name='password'
                id='password'
                placeholder='myPass123'
              />
            </label>
          </fieldset>

          <fieldset className='generateButton'>
            <button type='submit' className='submitButton'>
              Generar
            </button>
          </fieldset>
        </form>
        <QrCode qrCode={qrCode} />
      </section>
    </>
  )
}
