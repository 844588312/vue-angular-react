var webpack=require('webpack');
module.exports={
	plugins:[],
	entry:{
		index:'./index.js'
	},
	output:{
		path:'./dist/bin',
		filename:'build.js',
		publicPath: '/dist/bin'
	},
	module:{
		loaders:[
			{ test:/\.css$/,loader:'style-loader!css-loader'},
			{ test:/\.vue$/,loader: 'vue'},
			{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff2" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
		]
	},
	babel: {
        presets: ['es2015', 'stage-2'],
        plugins: ['transform-runtime']
    },
};