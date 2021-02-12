import productionKey from './production.js'
import developmentKey from './development.js'

/*Hell wrong*/
let exportedKey = null;

if(process.env.NODE_ENV === 'production'){
    exportedKey = productionKey
}
else{
   exportedKey = developmentKey
}

export default exportedKey