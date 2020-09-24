import React from 'react';
import coverPhoto from '../../assets/photos/qawerf.jpg'

function About() {

    return (
      <section>
        <h1 id="about">Who am I?</h1>
        <img src={coverPhoto} className="my-2" style={{ width: "100%" }}  alt="cover" />
      </section>
    );
}

export default About;

