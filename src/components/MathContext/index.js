import React from 'react';
import MathJax from 'react-mathjax2';
import PropTypes from 'prop-types';

function MathContext({ content }) {
  const showError = () => {
    console.log('Foi encontrado um erro.'); // eslint-disable-line no-console
  };

  return (
    <MathJax.Context
      input="tex"
      onError={() => showError()}
      script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML"
      options={{
        tex2jax: {
          inlineMath: [['$', '$']],
          displayMath: [['$$', '$$']],
          preview: 'none',
        },
      }}
    >
      <MathJax.Text text={content} />
    </MathJax.Context>
  );
}

MathContext.propTypes = {
  content: PropTypes.string.isRequired,
};

export default MathContext;
