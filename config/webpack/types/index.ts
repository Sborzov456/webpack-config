export type BuildMode = "production" | "development";

export type BuildOptions = {
    mode: BuildMode;
    port: number;
    paths: {
        entry: string,
        output: string,
        html: string,
        src: string,
    }
}

export type Env = {
    mode: BuildMode;
}