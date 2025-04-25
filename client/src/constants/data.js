import images from './images';

const pizza = [
  {
    title: 'Pizza Margherita',
    price: '11€',
    tags: 'mit Tomatensauce & Basilikum '
  },
  {
    title: 'Pizza Salami',
    price: '12,50€',
    tags: 'mit Tomatensauce, Mozzarella & Salami'
  },
  {
    title: 'Pizza Funghi',
    price: '12,50€',
    tags: 'mit Tomatensauce, Mozzarella & frischen Champignons'
  },
  {
    title: 'Pizza Prosciutto',
    price: '12,50€',
    tags: 'mit Tomatensoße, Procuitto Crudo, Feta & Mozzarella'
  },
  {
    title: 'Pizza Mozarella',
    price: '12,50€',
    tags: 'mit Tomatensauce, Mozzarella & Oregano'
  }
];

const pasta = [
  {
    title: 'Pasta Napoli',
    price: '8,50€',
    tags: 'mit frischen Tomaten, Knoblauch, Basilikum & Olivenöl'
  },
  {
    title: 'Pasta Bolognese',
    price: '9,50€',
    tags: 'mit hausgemachter Hackfleischsoße, Tomaten & Parmesan'
  },
  {
    title: 'Pasta Pollo',
    price: '10,50€',
    tags: 'mit Hähnchen, Sahnesoße, Pilzen & Parmesan'
  },
  {
    title: 'Pasta Scampi',
    price: '11,50€',
    tags: 'mit Garnelen, Knoblauch, Weißwein & Petersilie'
  },
  {
    title: 'Pasta Arrabiata',
    price: '9,50€',
    tags: 'mit scharfer Tomatensoße, Chili, Knoblauch & Pecorino'
  }
];

const awards = [
  {
    imgUrl: images.award01,
    title: 'Frischen Teig',
    subtitle: 'Wir wachen jeden morgen früh auf, um nur den frischesten Teig anzubieten.'
  },
  {
    imgUrl: images.award02,
    title: 'Regionales Gemüse',
    subtitle: 'Das Gemüse, für unsere vegetarischen Optionen, sind von regionalem Anbau.'
  },
  {
    imgUrl: images.award03,
    title: 'Mediteranes Öl',
    subtitle: 'Wir importieren unser Öl aus dem Mediteranen von Spanien bis Palästina.'
  },
  {
    imgUrl: images.award04,
    title: 'Fantastischer Chef',
    subtitle: 'Unser Chef, Mohammad El-Azzi ist der beste Chef in diesem Business.'
  }
];

export default { pizza, pasta, awards };
