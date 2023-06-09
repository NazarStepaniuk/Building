import './slider';
import modals from './modules/modals.js';
import tabs from './modules/tabs.js';

window.addEventListener("DOMContentLoaded", ()=>{
    modals();
    tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
    tabs(".decoration_slider", ".no-click", ".decoration_content", "after-click");
});