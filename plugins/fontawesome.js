import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faSignInAlt, faAlignRight, faShoppingBasket, faRubleSign,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart,
} from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook, faInstagram, faVk, faYoutube,
} from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = true;
library.add(
  faSignInAlt, faAlignRight, faShoppingBasket, faHeart, faRubleSign,
  faFacebook, faInstagram, faVk, faYoutube,
);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
