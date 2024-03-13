/* eslint-disable react/prop-types */
import './MultiActionButton.css'
import moreContent from '../../assets/moreContent.svg'
import { useState } from 'react'

export const MultiActionButton = ({ mainButton, otherButtons }) => {
  const [visibility, setVisibility] = useState(false)

  const classNotVisible = 'mab__more-content'
  const classVisible = 'mab__more-content mab__more-content--visible'

  const handleClick = () => {
    setVisibility(!visibility)
  }

  return (
    <section className='mab'>
      <button
        onClick={mainButton.function}
        className='mab__button mab__button--primary'
      >
        {mainButton.name}
      </button>
      <button
        onClick={handleClick}
        className='mab__button mab__button--secondary'
      >
        <img
          src={moreContent}
          alt='more content button'
          className='mab__button__icon'
        />
      </button>
      <div className={visibility ? classVisible : classNotVisible}>
        {otherButtons.map(button => (
          <button
            key={button.uid}
            onClick={button.function}
            className='mab__button mab__button__more'
          >
            {button.name}
          </button>
        ))}
      </div>
    </section>
  )
}
