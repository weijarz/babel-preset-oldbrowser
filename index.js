module.exports = {
    plugins: [
        require("babel-plugin-external-helpers"),

        require("babel-plugin-transform-decorators-legacy").default,
        require("babel-plugin-transform-class-properties"),
        require("babel-plugin-transform-object-rest-spread"),
        require("babel-plugin-transform-es3-member-expression-literals"),
        require("babel-plugin-transform-es3-property-literals"),
        require("babel-plugin-transform-async-to-generator"),
        require("babel-plugin-transform-export-extensions"),
        [require("babel-plugin-transform-react-jsx"), {pragma: "Pencil.create"}],
        require("babel-plugin-transform-do-expressions"),
        require("babel-plugin-syntax-trailing-function-commas"),

        require("babel-plugin-transform-es2015-template-literals"),
        require("babel-plugin-transform-es2015-literals"),
        require("babel-plugin-transform-es2015-function-name"),
        require("babel-plugin-transform-es2015-arrow-functions"),
        require("babel-plugin-transform-es2015-block-scoped-functions"),
        require("babel-plugin-transform-es2015-classes"),
        require("babel-plugin-transform-es2015-object-super"),
        require("babel-plugin-transform-es2015-shorthand-properties"),
        require("babel-plugin-transform-es2015-duplicate-keys"),
        require("babel-plugin-transform-es2015-computed-properties"),
        require("babel-plugin-transform-es2015-for-of"),
        require("babel-plugin-transform-es2015-sticky-regex"),
        require("babel-plugin-transform-es2015-unicode-regex"),
        require("babel-plugin-check-es2015-constants"),
        require("babel-plugin-transform-es2015-spread"),
        require("babel-plugin-transform-es2015-parameters"),
        require("babel-plugin-transform-es2015-destructuring"),
        require("babel-plugin-transform-es2015-block-scoping"),
        require("babel-plugin-transform-es2015-typeof-symbol"),
        require("babel-plugin-transform-es2015-modules-commonjs"),
        [require("babel-plugin-transform-regenerator"), { async: false, asyncGenerators: false }],
    ]
}
