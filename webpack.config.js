//entry -> output

const path = require('path');
const file_path = path.join(__dirname, 'public');

module.exports= {
entry: './src/app.js',
output: {
path: file_path,
filename: 'bundle.js'
},

module: {
rules:[{
loader: 'babel-loader',
test: /\.js$/,
exclude: /node_modules/
}]
}
};
