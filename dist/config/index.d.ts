declare const config: {
    server: {
        port: string | number;
        env: string;
    };
    auth: {
        jwtSecret: string;
        jwtExpiresIn: string;
    };
    database: {
        url: string | undefined;
    };
    uploads: {
        dir: string;
        maxSize: number;
        allowedTypes: string[];
    };
    api: {
        version: string;
        prefix: string;
    };
};
export default config;
