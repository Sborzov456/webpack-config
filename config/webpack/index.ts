import buildDevServer from "./buildDevServer";
import buildLoaders from "./buildLoaders";
import buildPlugins from "./buildPlugins";
import { BuildOptions } from "./types";
import webpack from "webpack";

export default function buildWebPack(
    buildOptions: BuildOptions
): webpack.Configuration {
    const { paths, mode } = buildOptions;
    const isDev = mode === "development";
    return {
        mode,
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: "[name].bundle.[contenthash].js",
            clean: true,
        },
        plugins: buildPlugins(buildOptions),
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
            alias: {
                '@': paths.src,
            }
        },
        module: {
            rules: buildLoaders(buildOptions),
        },
        devtool: isDev ? "inline-source-map" : false,
        devServer: buildDevServer(buildOptions),
    };
}
