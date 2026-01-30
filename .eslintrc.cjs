module.exports = {
    root: true,
    env: {
        browser: true,
        es2022: true,
    },
    parser: "@typescript-eslint/parser",
    plugins: [
        "react",
        "@typescript-eslint",
        "react-hooks",
        "react-refresh",
        "prettier",
    ],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:prettier/recommended", // 👈 CLAVE
    ],
    settings: {
        react: {
            version: "detect",
        },
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "react-refresh/only-export-components": "warn",
        "prettier/prettier": "warn",
    },
};
