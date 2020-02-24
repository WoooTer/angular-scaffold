export const IndexableType0paramValidation = true;

interface Animal {
  name: string;
}

class Dog {
  name = 'dog';
}

function paramValidation(param: { [key: string]: string }) {
  console.log(param);
}

paramValidation({
  attr1: '1'
});

paramValidation({ ...new Dog() });
