﻿import React from "react";
import PropTypes from "prop-types";

const Moon = props => {
  const { name } = props;

  return (
    <svg className={name} viewBox="0 0 15.32 15.30">
      <path fill="#FFDF68" d="M 7.6524,0C 11.8787,0 15.3047,3.42609 15.3047,7.6524C 15.3047,11.8787 11.8787,15.3047 7.6524,15.3047C 3.42609,15.3047 0,11.8787 0,7.6524C 0,3.42609 3.42609,0 7.6524,0 Z "/>
      <path fill="#CBAF4A" d="M 2.74652,5.60303C 3.37042,5.78186 3.61316,6.8443 3.28876,7.97607C 2.96429,9.10779 2.19556,9.88025 1.57166,9.70148C 0.947754,9.52258 0.704956,8.46021 1.02936,7.32843C 1.35382,6.19666 2.12262,5.42419 2.74652,5.60303 Z "/>
      <path fill="#CBAF4A" d="M 3.98163,2.31836C 4.26373,2.51404 4.16486,3.14484 3.76086,3.72736C 3.35687,4.30988 2.80066,4.62341 2.51862,4.42773C 2.23651,4.23206 2.33539,3.6012 2.73938,3.01868C 3.14337,2.43616 3.69958,2.12262 3.98163,2.31836 Z "/>
      <path fill="#CBAF4A" d="M 9.67383,2.33228C 12.7932,2.33228 15.322,4.86108 15.322,7.98047C 15.322,11.0999 12.7932,13.6287 9.67383,13.6287C 6.55438,13.6287 4.02563,11.0999 4.02563,7.98047C 4.02563,4.86108 6.55444,2.33228 9.67383,2.33228 Z "/>
    </svg>
  );
};

Moon.propTypes = {
  name: PropTypes.string
};

export default Moon;