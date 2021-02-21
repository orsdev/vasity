import React from 'react';
import Hero from '../components/Hero';
import Experience, {
  experiences
} from '../components/Experiences/Experience';
import ToluxJoy from '../components/Experiences/ToluxJoy';

function Testimonial() {
  return (
    <>
      <Hero />
      <Experience>
        <ToluxJoy name={experiences['toluxjoy']} />
      </Experience>
    </>
  );
}

export default Testimonial;
