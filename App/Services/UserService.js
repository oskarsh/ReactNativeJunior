
const loginUser = async() => {
  return new Promise((resolve) =>
    setTimeout(
      () => { resolve('result') },
      3000
    )
)};

export default { loginUser }