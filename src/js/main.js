
import {module} from './modules/module.js';
import {image} from './modules/image.js';
import {content} from './modules/content.js';
import {popup} from './modules/popup.js';
import { handler } from './modules/handler.js';




module.innerHTML=image+content+popup;

document.getElementById('button').addEventListener('click', ()=>handler());