if(process.env.NODE_ENV === 'production'){
    import keys from './production.js'
    export default keys;
}
else{
    import keys from './development.js';
    export default keys;
}