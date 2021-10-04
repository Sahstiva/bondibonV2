import Vue from 'vue';
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faSignInAlt, faAlignRight, faShoppingBasket, faRubleSign,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart,
} from '@fortawesome/free-regular-svg-icons';

config.autoAddCss = true;
library.add(
  faSignInAlt, faAlignRight, faShoppingBasket, faHeart, faRubleSign,
);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
