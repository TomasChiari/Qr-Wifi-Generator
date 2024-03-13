import { saveAs } from 'file-saver'
import { useRef } from 'react'
import { MultiActionButton } from '../MultiActionButton/MultiActionButton.jsx'
import './QrCode.css'

// eslint-disable-next-line react/prop-types
export const QrCode = ({ qrCode }) => {
  const svgRef = useRef(null)

  const print = () => {
    window.print()
  }

  const downloadPng = () => {
    if (qrCode) {
      fetch(qrCode)
        .then(res => res.blob())
        .then(blob => {
          saveAs(blob, 'Qr-Code-WiFi.png')
        })
    }
  }

  const downloadSvg = () => {
    if (qrCode && svgRef.current) {
      const svgString = new XMLSerializer().serializeToString(svgRef.current)
      const blob = new Blob([svgString], { type: 'image/svg+xml' })
      saveAs(blob, 'Qr-Code-WiFi.svg')
      console.log(svgString)
      console.log([svgString])
    }
  }

  const mainButton = { name: 'Print', function: print }
  const otherButtons = [
    {
      uid: 1,
      name: 'Download as PNG',
      function: downloadPng
    },
    {
      uid: 2,
      name: 'Download as SVG',
      function: downloadSvg
    }
  ]

  return (
    <div className='qrContainer'>
      {qrCode && (
        <>
          <img className='qr-code' src={qrCode} alt='qr code' />
          <svg
            ref={svgRef}
            xmlns='http://www.w3.org/2000/svg'
            width='200'
            height='200'
            style={{
              display: 'none'
            }}
          >
            <foreignObject width='100%' height='100%'>
              <img src={qrCode} alt='QR Code' />
            </foreignObject>
          </svg>
          <MultiActionButton
            mainButton={mainButton}
            otherButtons={otherButtons}
          />
        </>
      )}
    </div>
  )
}
