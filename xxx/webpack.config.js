module.exports = {
  module: {
    rules: [
      // ... 其他规则
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // 配置选项
            },
          },
        ],
      },
    ],
  },
}