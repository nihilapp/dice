const path = require('path');

module.exports = {
  mode: 'development',
  // 모드
  entry: './src/js/index.js',
  // 기준이 될 파일
  devtool: 'inline-source-map',
  // 변환에 쓰일 도구
  target: 'electron-renderer',
  // 로더들
  module: {
    rules: [
      { // js파일에 관련된 로더들 바벨로더가 가장 중요하다.
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
              '@babel/preset-react']
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
  // 엔트리에 확장자 안적어줘도 알아서 찾는다.
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // 합쳐진 파일이 나가는 곳과 이름을 설정
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build', 'js'),
  },
};