import { QrWifi } from './components/QrWifi/QrWifi'

import './App.css'

export const App = () => {
  return (
    <>
      <header className='header'>
        <h1 className='mainTitle'>Qr Code Generator</h1>
        <p className='subtitle'>Create your own QR code</p>
      </header>

      <main className='mainContainer'>
        <QrWifi />
      </main>
    </>
  )
}
