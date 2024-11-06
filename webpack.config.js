const path = require('path');

module.exports = {
  entry: './src/chat.tsx',  // Apunta al archivo principal
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.jsx?$/,  // Para archivos JSX
        use: 'babel-loader',
        exclude: /node_modules/,
      },

    ],
  },
  mode: 'production',  // Configurado para producción

};

