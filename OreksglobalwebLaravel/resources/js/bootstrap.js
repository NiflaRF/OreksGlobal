import axios from 'axios';
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Prefix root-relative paths with the sub-folder the app is served from (e.g. /oreks).
window.appUrl = (path) => (window.APP_BASE || '') + path;
