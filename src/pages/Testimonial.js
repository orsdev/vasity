import React from 'react';
import Hero from '../components/Hero';
import Experience, {
  experiences
} from '../components/Experiences/Experience';
import ToluxJoy from '../components/Experiences/ToluxJoy';
import Josiah from '../components/Experiences/Josiah';
import Stories from '../components/Story/Story';
import StoryOne from '../components/Story/StoryOne';
import StoryTwo from '../components/Story/StoryTwo';
import Footer from '../components/Footer/Footer';

function Testimonial() {
  return (
    <>
      <Hero />
      <Experience gridRowStart={{ base: 3, md: 2 }} bg="primary">
        <ToluxJoy name={experiences['toluxjoy']} />
      </Experience>
      <Stories>
        <StoryOne />
      </Stories>
      <Experience
        bg="accent.light-100"
        gridRowStart={{ base: 5, md: 4 }}>
        <Josiah name={experiences['josiah']} />
      </Experience>
      <Stories>
        <StoryTwo />
      </Stories>
      <Footer />
    </>
  );
}

export default Testimonial;
