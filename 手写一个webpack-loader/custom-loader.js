function convert(source) {
  return source && source.replace(/hello/gi, "HELLO");
}

module.exports = function(content) {
  return convert(content);
};

module: {
  rules: [
    {
      test: /\.js/,
      use: ["custom-loader"],
      include: path.resolve(__dirname, "show")
    }
  ];
}
