import images from "./imagenes/image";

const wines = [
  {
    title: 'espadin',
    price: 'mX $250',
    tags: 'botella | 800 ml',
  },
  {
    title: 'gusano',
    price: 'mX $250',
    tags: 'botella | 800 ml',
  },
  {
    title: 'pechuga',
    price: 'mX $280',
    tags: 'botella | 800 ml',
  },

  {
    title: 'cedron',
    price: 'mX $280',
    tags: 'botella | 800 ml',
  },


  {
    title: 'madrecuixe',
    price: 'mX $500',
    tags: 'botella | 800 ml',
  },
  {
    title: 'punta',
    price: 'mX $500',
    tags: 'botella | 800 ml',
  },
  {
    title: 'tobala',
    price: 'mX $500',
    tags: 'botella | 800 ml',
  },
];

const cocktails = [
  {
    title: 'aguachile',
    price: '$',
    tags: ' cedron | pepino | habaner | sal | azucar  ',
  },
  {
    title: "daikiri de mango",
    price: '$',
    tags: 'madrecuixe | mango | limon | azucar',
  },
  {
    title: 'mojito de kiwi',
    price: '$',
    tags: 'punta | kiwi | hierba buena | agua mineral',
  },
  {
    title: 'tobala con flor de piña',
    price: '$',
    tags: 'tobala | piña | limon | jugo de toronja | azucar',
  },
  {
    title: 'espadin de sandia',
    price: '$',
    tags: 'leche evaporada | crema de coco | sandia ',
  },  
  {
    title: 'gusano en las rocas',
    price: '$',
    tags: 'gusano | jugo de toronja | limon | sal de chapulin | azucar',
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: 'caja personalizada',
    subtitle: 'pintada, grabadas y rusticas',


  },
  {
    imgUrl: images.award02,
    title: 'licorera',
    subtitle: 'para ediciones de temporada',
  },

  {
    imgUrl: images.award03,
    title: 'sales',
    subtitle: 'gusano, chapulin y mix chiles',
  },
  {
    imgUrl: images.award05,
    title: 'chapulin',
    subtitle: 'chile con limon, de arbol, abanero, o natural',
  },
];

export default { wines, cocktails, awards };