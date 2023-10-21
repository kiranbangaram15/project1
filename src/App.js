import React from 'react';
import './App.css';

const profiles = [
  {
    name: 'Mahatma Gandhi',
    description: 'Leader of the Indian independence movement against British rule.',
    image: 'gandhi.jpg',
    name2: 'Jinnah',
    description2: 'Muhammad Ali Jinnah was a barrister, politician and the founder of Pakistan. Jinnah served as the leader of the All-India Muslim League from 1913 until the inception of Pakistan on 14 August 1947, and then as the Dominion of Pakistan.',
    image: 'Jinnah.jpg',
    name3: 'Nathuram',
    description3: "Man behind gandhi's  death.",
    image: 'Nathuram.jpg',
  },
  // {
  //   name: 'Mohammed Ali Jinnah',
  //   description: 'Founder of Pakistan and leader of the All-India Muslim League.',
  //   image: 'jinnah.jpg',
  // }
  //   {
  //     name: 'Nathuram Godse',
  //     description: 'Assassin of Mahatma Gandhi and a controversial historical figure.',
  //     image: 'godse.jpg',

];

function App() {
  return (
    <div className="App">
      <h1>Profile Cards</h1>
      <div className="profile-cards">
        {profiles.map((profile, index) => (
          <div className="profile-card md-6" key={index}>
            <img src={process.env.PUBLIC_URL + '/image/Gandhi.jpg'} alt="gandhi.jpg" />
            <h2>{profile.name}</h2>
            <p>{profile.description}</p>
          </div>




        ))}

<div className="profile-cards">
        {profiles.map((profile, index) => (
          <div className="profile-card md-6" key={index}>
            <img src={process.env.PUBLIC_URL + '/image/Jinnah.jpg'} alt="gandhi.jpg" />
            <h2>{profile.name2}</h2>
            <p>{profile.description2}</p>
          </div>
        ))}
      </div>


      <div className="profile-cards">
        {profiles.map((profile, index) => (
          <div className="profile-card md-6" key={index}>
            <img src={process.env.PUBLIC_URL + '/image/Nathuram.jpg'} alt="Nathuram" />
            <h2>{profile.name3}</h2>
            <p>{profile.description3}</p>
          </div>
        ))}
      </div>
        
      </div>


     
    </div>

    
  );
}
export default App;

