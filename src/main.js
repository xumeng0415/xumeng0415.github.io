import { createApp } from 'vue'
import App from './App.vue'
import { registerDirectives } from './directives'
import './styles/main.css'

const app = createApp(App)
registerDirectives(app)
app.mount('#app')