type Item = {
  title: string;
};

type Item2 = {
  type: string
};

export const info: Item[] = [
  {
    title: "1",
  },
  {
    title: "2",
  },
  {
    title: "3",
  },
  {
    title: "4",
  },
  {
    title: "5",
  },
];

export const contact: Item2[] = [
  {
    type: "Phone",
  },
  {
    type: "Email",
  },
  {
    type: "Address",
  },
  {
    type: "Other",
  },
];
