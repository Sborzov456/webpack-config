import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

type LoadersConfiguration = ModuleOptions["rules"];
type BuildLoadersParams = BuildOptions;

export default function buildLoaders({
    mode,
}: BuildLoadersParams): LoadersConfiguration {
    const isDev = mode === "development";
    const isProd = mode === "production";

    const babelLoader = {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    ["@babel/preset-react", { runtime: "automatic" }],
                    "@babel/preset-typescript",
                    "@babel/preset-env",
                ],
                plugins: [isDev && "react-refresh/babel"].filter(Boolean),
            },
        },
    };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            {
                loader: "css-loader",
                options: {
                    modules: {
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash]"
                            : "[hash]",
                        namedExport: false,
                    },
                },
            },
            "sass-loader",
        ],
    };

    const assetsLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
    };

    const svgrLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };
    return [svgrLoader, assetsLoader, babelLoader, scssLoader];
}
