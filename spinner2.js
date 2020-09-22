const loaderElements = ['|','/','-','\\'];

let counter = 0;
let timer = 200;
while(counter < 2) {
  for(const element of loaderElements) {
    setTimeout(() => {
      process.stdout.write(`\r${element}`);
    }, timer);
    timer += 200;
  }
  counter++;
};