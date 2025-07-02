const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.ts", // 최초 실행 파일
  devServer: {
    static: [
      {
        directory: path.join(__dirname),
      },
    ],
  },
  output: {
    filename: "bundle.js", // 출력파일
    path: path.resolve(__dirname, "dist"), // 상대경로 지정
    publicPath: "/dist/",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts$/, // 검사할 파일 확인[정규식 사용]
        use: "ts-loader", // 어떻게 처리할 것인가
        exclude: /node_modules/, // 탐색하지 않을 폴더 및 파일[정규식 사용]
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // 탐색한 임포트 끝에 붙일 확장자 선택 [from, to]
  },
};
