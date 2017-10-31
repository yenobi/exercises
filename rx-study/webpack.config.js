module.exports = {
    entry: "./main.ts",
    output: { filename: "app.js" },
    module: {
        rules: [
            {
                test: /.ts$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    }
}