const demo = (control) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (control) {
        resolve("promise resolved");
      } else {
        reject("promise rejeted");
      }
    }, 3000);
  });
};

//handle promices with then and catch
demo()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//handle promices with two functions for resolve and reject
demo(true).then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log(error);
  }
);

 const f = async (control) => {
  try {
    const result = await demo(control);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

f(false);
