type AA = {
  a: string;
};
type BB = {
  b: string;
};

type CC = AA & BB;

const cc: CC = {
  a: "asss",
  b: "sasa",
};
