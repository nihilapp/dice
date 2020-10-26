const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: './src/js/index.js',
  devtool: 'inline-source-map',
  target: 'electron-renderer',
  module: {
    rules: [
      { // 바벨 로더
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [[
              '@babel/preset-env', {
                targets: {
                  esmodules: true
                }
              }],
              '@babel/preset-react'],
            plugins: ['react-hot-loader/babel'],
          }
        }
      },
      { // css와 스타일에 관련된 로더들
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build', 'js'),
  },
  // 데브서버 관련 설정
  devServer: {
    contentBase: path.join(__dirname, '/'),
    publicPath: "/build/js/",
    overlay: true,
    port: 3000,
    hot: true,
  },
};