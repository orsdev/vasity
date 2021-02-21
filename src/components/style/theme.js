export default {
  fonts: {
    body: 'Inter, sans-serif',
    roboto: 'Roboto, sans-serif'
  },
  space: {
    0: '0',
    0.5: '0.5rem',
    0.6: '0.6rem',
    0.8: '0.8rem',
    1: '1rem',
    1.5: '1.5rem',
    2: '2rem',
    2.5: '2.5rem',
    3: '3rem',
    3.5: '3.5rem',
    4: '4rem',
    5: '5rem',
    7: '7rem'
  },
  fontSizes: {
    1: '1rem', // 10px
    1.3: '1.3rem', // 13px
    1.4: '1.4rem', // 14px
    1.5: '1.5rem', // 15px
    1.6: '1.6rem', // 15px
    1.8: '1.8rem', // 18px
    2.4: '2.4rem', // 25px
    3: '3rem', // 30px
    3.2: '3.2rem', // 35px
    4: '4rem', // 40px
    4.8: '4.8rem' // 45px
  },
  colors: {
    primary: '#222222',
    background: '#FFFFFF',
    text: '#000',
    secondary: '#FF5C00',
    accent: {
      'light-100': '#FFF8F5',
      'light-200': '#EEF8FF',
      'black-100': '#2E2E2E',
      'black-200': '#494949',
      grey: '#F0FFEE',
      'blue-200': '#0D019A',
      green: '#049A01'
    }
  },
  styles: {
    global: {
      html: {
        fontSize: { base: '45%', md: '50%', lg: '62.5%' }
      },
      body: {
        position: 'relative',
        backgroundColor: 'background',
        fontFamily: 'body',
        color: 'text',
        maxWidth: '100%',
        overflowX: 'hidden'
      },
      h1: {
        fontSize: { base: 3.2, sm: 4, md: 4.8 },
        lineHeight: { base: '3.8rem', sm: '4.4rem', md: '5.3rem' },
        fontWeight: 700
      },
      h2: {
        fontSize: 4
      },
      h3: {
        fontSize: 3.2,
        fontWeight: 700,
        lineHeight: '3.4rem'
      },
      h4: {
        fontSize: 3
      },
      h5: {
        fontSize: 2.4
      },
      p: {
        fontSize: 1.8,
        fontWeight: 400
      },
      span: {
        fontSize: 1.3,
        fontWeight: 500
      },
      a: {
        fontFamily: 'roboto'
      }
    }
  }
};
