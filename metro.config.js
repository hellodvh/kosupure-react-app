const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;


//React Native Sass Transformer
// module.exports = (async () => {
//   const {
//     resolver: { sourceExts }
//   } = await getDefaultConfig();
//   return {
//     transformer: {
//       babelTransformerPath: require.resolve("react-native-sass-transformer")
//     },
//     resolver: {
//       sourceExts: [...sourceExts, "scss", "sass"]
//     }
//   };
// })();