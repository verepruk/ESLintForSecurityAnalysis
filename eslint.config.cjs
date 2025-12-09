// I used the the file we once made in the lecture as a base and added the ReDoS plugins and rules to it.

const js = require("@eslint/js");
const globals = require("globals");

const security = require("eslint-plugin-security");
const securityNode = require("eslint-plugin-security-node");

// Added plugins for ReDoS detection
const regexpPlugin = require("eslint-plugin-regexp");
const redosPlugin = require("eslint-plugin-redos");

module.exports = [
    js.configs.recommended,
    {
        files: ["src/**/*.{js,ts}"],
        ignores: [],
        plugins: {
            security,
            "security-node": securityNode,
            regexp: regexpPlugin,
            redos: redosPlugin
        },
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.es2021
            }
        },
        rules: {
            "security/detect-eval-with-expression": "error",
            "security/detect-non-literal-regexp": "warn",
            "security/detect-non-literal-fs-filename": "warn",
            "security/detect-object-injection": "warn",
            "security/detect-unsafe-regex": "error",

            "security-node/detect-child-process": "error",
            "security-node/detect-crlf": "warn",
            "security-node/detect-improper-exception-handling": "warn",
            "security-node/detect-unhandled-async-errors": "warn",

            // Detect catastrophic backtracking patterns
            "regexp/no-super-linear-backtracking": "error",
            "regexp/no-super-linear-move": "error",

            // Dedicated ReDoS plugin rule
            "redos/no-vulnerable": "error",

            // Optional quality rules (safe regex style)
            "regexp/no-dupe-characters-character-class": "warn",
            "regexp/no-empty-alternative": "warn"
        }
    }
];
