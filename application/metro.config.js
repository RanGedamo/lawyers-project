/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f9a7299b (src)
=======
>>>>>>> f9a7299b (src)
// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }),
//   },
// };

const { getDefaultConfig } = require("metro-config");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();
  return {
    transformer: {
          getTransformOptions: async () => ({
<<<<<<< HEAD
<<<<<<< HEAD
=======
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
>>>>>>> 06b8cbbe (app)
=======
>>>>>>> f9a7299b (src)
=======
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
>>>>>>> 06b8cbbe (app)
=======
>>>>>>> f9a7299b (src)
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    babelTransformerPath: require.resolve("react-native-svg-transformer")
  },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  };
})();
=======
  },
};
>>>>>>> 06b8cbbe (app)
=======
    babelTransformerPath: require.resolve("react-native-svg-transformer")
  },
=======
    babelTransformerPath: require.resolve("react-native-svg-transformer")
  },
>>>>>>> f9a7299b (src)
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  };
})();
<<<<<<< HEAD
>>>>>>> f9a7299b (src)
=======
  },
};
>>>>>>> 06b8cbbe (app)
=======
>>>>>>> f9a7299b (src)
