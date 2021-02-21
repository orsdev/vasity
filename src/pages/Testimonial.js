import React from 'react';
import Hero from '../components/Hero';
import Experience, {
  experiences
} from '../components/Experiences/Experience';
import ToluxJoy from '../components/Experiences/ToluxJoy';
import Stories from '../components/Story/Story';
import StoryOne from '../components/Story/StoryOne';

function Testimonial() {
  return (
    <>
      <Hero />
      <Experience>
        <ToluxJoy name={experiences['toluxjoy']} />
      </Experience>
      <Stories>
        <StoryOne />
      </Stories>
    </>
  );
}

export default Testimonial;
