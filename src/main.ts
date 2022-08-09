import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

import { invoke } from '@tauri-apps/api'

invoke('greet', { name: 'Tauri' })
  // `invoke` returns a Promise
  .then((response) => console.log(response))