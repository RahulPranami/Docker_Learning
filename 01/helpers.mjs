const connectToDatabase = () => {
  const dummyPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Connected to database!");
      resolve();
    }, 2000);
  });

  return dummyPromise;
};

export default connectToDatabase;
