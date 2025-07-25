const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  presets: [
    "@babel/preset-react",
    // Turn off '@vue/cli-plugin-babel/preset'
    // '@vue/cli-plugin-babel/preset',
    [
      "veaury/babel/ReactPreset",
      {
        // for dev only
        test: function (filename) {
          // The files in the following paths are compiled with React's jsx
          if (
            filename?.startsWith(resolve("src")) ||
            filename?.startsWith(resolve("../src"))
          )
            return filename;
        },
      },
    ],
  ],
  overrides: [
    {
      include: [resolve(""), resolve("node_modules")],
      exclude: file =>
        /react_app[\/\\]+/.test(file) ||
        (/node_modules[\/\\]+/.test(file) &&
          !/node_modules[\/\\]+((webpack-dev-server[\/\\]+client)([\/\\]|$))/.test(
            file
          )),
      presets: [
        [
          "@babel/preset-env",
          {
            loose: true,
            // "modules": "false",
            targets: {
              browsers: ["> 1%", "last 2 versions", "not ie <= 8"],
            },
          },
        ],
      ],
      plugins: [
        // "transform-vue-jsx",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-transform-runtime",
      ],
      // "sourceType":"unambiguous"
    },
  ],
};
