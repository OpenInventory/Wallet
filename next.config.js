module.exports = {
  webpack: (config, { dev }) => {
    const rules = config.module.rules;
    rules[rules.length -1].exclude = (str) => {
      if (str.includes('ethereumjs-tx')) {
        return false;
      }
      return /node_modules/.test(str)
    }
    return config;
  }
}
