define(() => {
  return {
    add: (...args) => args.reduce((total, additional) => total + additional, 0)
  }
})