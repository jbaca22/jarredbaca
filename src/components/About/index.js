import React from 'react';
import coverPhoto from '../../assets/photos/qawerf.jpg'

function About() {

    return (
      <section>
        <h1 id="about">Who am I?</h1>
        <img src={coverPhoto} className="my-2" style={{ width: "50" }}  alt="cover" />
        <div className="flex-row">
          <p className="about-description">
            I am a recent marketing grad/ full-stack web developer. 
            I have excellent sales skills, marketing knowledge, and know multiple front end/ back end coding languages. 
            I am interested in a full time position where I can cultivate success and make a difference with my unique talents.
            Check out some of my work above!
          </p>
        </div>
      </section>
    );
}

export default About;

