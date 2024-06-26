import './App.css'
import focal from './assets/focal.svg'
import focal2 from './assets/Group.svg'
import focal3 from './assets/facebook.svg'
import focal4 from './assets/Subtract.svg'
import focal5 from './assets/Subtract(1).svg'
import focal6 from './assets/Subtract(2).svg'
import focal7 from './assets/Subtract(3).svg'
import focal8 from './assets/Rectangl2.svg'
import focal9 from './assets/foca12312.svg'
import focal10 from './assets/Group123ss1.svg'

function App() {

  return (
    <section className='Mainx'>
      <div className='img3' src={focal8}></div>
      <img className='img1' src={focal} alt="focal" />
      <img className='img2' src={focal2} alt="focal" />
      <img className='img4' src={focal9} alt="focal" />
      <img className='img5' src={focal10} alt="focal" />
      <div className='mobile'>
        <div><span>UNDER</span><p className='p1'>2024 UPDATES</p></div>
        <span>CONSTRUCTION</span>
        <p className='p2'>Come Back Soon</p>
      </div>
      <div className='footer'>
        <div>
          <span>Customer Services </span>
          <p>+963 953 666 056</p>
        </div>
        <div>
          <span>X academy team</span>
          <p>+963 953 666 052</p>
        </div>
        <div>
          <span>Keep In Touch</span>
          <p className='midea'>
            <a href="https://www.facebook.com/focal.x.agency/"><img src={focal3} alt="" /></a>
            <a href="https://www.behance.net/focal-x-agency"><img src={focal4} alt="" /></a>
            <a href="https://www.linkedin.com/company/focal-x-agency/"><img src={focal5} alt="" /></a>
            <a href="https://www.instagram.com/focal.x.agency"><img src={focal6} alt="" /></a>
            <a href="https://twitter.com/focal_x_agency"><img src={focal7} alt="" /></a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default App
