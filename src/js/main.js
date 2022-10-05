
import {module} from './modules/module.js';
import {image} from './modules/image.js';
import {content} from './modules/content.js';
import {popup} from './modules/popup.js';
import { handler } from './modules/handler.js';
import {overlay} from './modules/overlay.js'




module.innerHTML=image+content+popup+overlay;

document.querySelector('.button').addEventListener('click', ()=>handler());