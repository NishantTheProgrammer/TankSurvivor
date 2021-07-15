import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBomb, faDotCircle, faGasPump, faHeart, faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHeart);
library.add(faBomb);
library.add(faDotCircle);
library.add(faGasPump);
library.add(faHeartbeat);

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router).mount('#app')
