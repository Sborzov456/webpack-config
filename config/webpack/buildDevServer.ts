import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import path from "path";
import { BuildOptions } from "./types";

export default function buildDevServer({
    port,
}: BuildOptions): DevServerConfiguration {
    return {
        static: path.resolve(__dirname, "public"),
        port: port,
        historyApiFallback: true,
        hot: true,
    };
}
