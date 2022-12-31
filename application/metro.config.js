/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

<<<<<<< HEAD
<<<<<<< HEAD
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
    resolver: {
      assetExts: assetExts.filter(ext => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"]
    }
  };
})();
>>>>>>> f9a7299b (src)
