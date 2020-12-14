import * as React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p>{t('welcome')}</p>
    </div>
  );
};

export default Home;
