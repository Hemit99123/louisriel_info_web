import './App.css';
import React, {useState, useEffect} from 'react';
import Typewriter from 'typewriter-effect';
import Aos from 'aos'
import 'aos/dist/aos.css'

function Home() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    Aos.init({duration:4000});
  }, [])

  if(loading === true) {
    return(
      <div className='centerdiv'>
        <div className='spinner'></div>
      </div>
    )
  }


  return (
    <div>
      <section>
        <div className='centerdiv'>
        <h1 className='titlename_style'>
          Louis Riel
        </h1>
        <h1>Je suis...</h1>
        <div className="tags">
          <h1>
          <Typewriter
  options={{
    strings: ['un chef', 'un héro', 'un traitre', 'un villion'],
    autoStart: true,
    loop: true,
    delay: 20,
    cursor: '_'
    
  }}
    />
          </h1>
        </div>
        </div>
      </section>

<section>
  <div>
  <button className='hero_button' data-aos='fade-right' onClick={() => {window.location.href = "/metis";}}>Qui est la Metis?</button>
  <br />
  <br />
  <button className='hero_button' data-aos="fade-right" onClick={() => {window.location.href = '/probleme';}}>Quelle étaient quelques problèmes?</button>
  <br />
  <br />
  <button className='hero_button' data-aos="fade-right" onClick={() => {window.location.href = '/rôle';}}>Quel rôle a jouer Louis Riel?</button>
  <br />
  <br />
  <button className='hero_button' data-aos="fade-right" onClick={() => {window.location.href = '/herooutraitre'}}>Pourquoi faire que le peuple considère Riel comme un héro et d'autres pensent qu'il était une traître?
</button>
  <br />
  <br />
  </div>
</section>
    </div>
  );
}

export default Home;
