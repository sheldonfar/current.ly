import Wykop from '../containers/Wykop';
import WykopLogo from '../containers/Wykop/logo.png';

import Telegram from '../containers/Telegram';
import TelegramLogo from '../containers/Telegram/logo.png';

export default {
  wykop: {
    label: 'Wykop',
    logo: WykopLogo,
    component: Wykop,
    route: '/wykop',
  },
  telegram: {
    label: 'Telegram',
    logo: TelegramLogo,
    component: Telegram,
    route: '/telegram',
  }
};
