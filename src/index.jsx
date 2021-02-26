import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './article.scss';
import './entete.scss';
import Appli from './composants/Appli';

ReactDOM.render(
  <React.StrictMode>
    <Appli />
  </React.StrictMode>,
  document.getElementById('racine')
);
