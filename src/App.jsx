import React, {useState} from 'react';
import './App.css'

function App() {
const[showthankyou, setShowthankyou] = useState(false);
const[email, setEmail] = useState('');

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  if(form.checkValidity()){
  setEmail(form.elements.email.value);
  setShowthankyou(true);
  } else {
    form.reportValidity();
  }
};
const handleDismiss = () => {
  setShowthankyou(false);
}
  return (
      <main>
        { !showthankyou ? (
          <section>
            <article>
                <h1>Stay updated!</h1>
                <p>Join 60,000+ product managers reveiving monthly updates on.</p>
                <p><span><img src='/img/icon-list.svg' alt='list icon'/></span> Product discovery and building what matters</p>
                <p><span><img src='/img/icon-list.svg' alt='list icon'/></span> Measuring to ensure updates are a success</p>
                <p><span><img src='/img/icon-list.svg' alt='list icon'/></span> And much more!</p>
                <form onSubmit={handleSubmit}>
                  <label>Email address</label>
                  <input placeholder='email@company.com' required type='email' name='email'/>
                  <button type='submit'>Subscribe to monthly newsletter</button>
                </form>
            </article>
            <div className='imgcontainer'>
            </div>
          </section>
          ) : (
              <div>
            <article className='thankyoupage'>
              <span><img src='/img/icon-list.svg' alt='success check'/></span>
              <h1>thanks for subscribing!</h1>
              <p>A confirmation email has been sent to {email}
                Please open it and click the button inside to confirm your subscription.</p>
                <button onClick={handleDismiss}> dismiss message</button>
            </article>
          </div>
          )
        }
      </main>
  )
}

export default App
