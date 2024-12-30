import path from "path";
import { Env } from "./config/webpack/types";
import buildWebPack from "./config/webpack";

export default function (env: Env) {
    return buildWebPack({
        mode: env.mode ?? "development",
        port: 8000,
        paths: {
            entry: path.resolve(__dirname, "src", "index.tsx"),
            output: path.resolve(__dirname, "build"),
            html: path.resolve(__dirname, "public", "index.html"),
            src: path.resolve(__dirname, "src"),
        },
    });
}
