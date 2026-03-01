import { createApp } from "vue";
import "./assets/main.css";
import App from "./App.vue";

import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Architecture  from "./components/Architecture.vue";
import Footer from "./components/Footer.vue";
import Skills from "./components/Skills.vue";
import Projects from "./components/Projects.vue";
import Experience from "./components/Experience.vue";
// import Education from "./components/Education.vue";



const app = createApp(App);

app.component("about", About);
app.component("contact", Contact);
app.component("hero", Hero);
app.component("architecture", Architecture);
app.component("my-footer", Footer);
app.component("skills", Skills);
app.component("projects", Projects);
app.component("my-header", Header);
app.component("experience", Experience);
// app.component("education", Education);


app.mount("#app");