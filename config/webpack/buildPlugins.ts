import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types";
import ForkTsCheckWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export default function buildPlugins({ mode, paths }: BuildOptions) {
    const isProd = mode === "production";
    const isDev = mode === "development";

    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        isProd &&
            new MiniCssExtractPlugin({
                filename: "css/[name].[contenthash].css",
            }),
        isDev &&
            new ForkTsCheckWebpackPlugin(),
        isDev && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean);
}
