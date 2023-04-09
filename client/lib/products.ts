type Item = {
  name: string;
  details: {
    name: string;
    proUrl?: string;
    pic?: string;
  };
};

export const products: Item[] = [
  {
    name: 'Valine',
    details: {
      name: 'Valine',
      proUrl: 'https://valine.js.org/',
      pic: '/images/valine.png',
    },
  },
  {
    name: 'PortableHexo',
    details: {
      name: 'PortableHexo',
      proUrl: 'http://bitmoe.github.io/PortableHexo/',
      pic: '/images/portablehexo.png',
    },
  },
  {
    name: 'ASPICE',
    details: {
      name: 'ASPICE',
      pic: '/images/test1.png',
    },
  },
  {
    name: 'ONEDATA',
    details: {
      name: 'ONEDATA',
      pic: '/images/test2.png',
    },
  },
];
