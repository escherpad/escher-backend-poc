cc_library(
    name = "main",
    srcs = glob([
        "websocketpp/*.cpp",
        "websocketpp/**/*.cpp",
        "websocketpp/**/**/*.cpp"
    ]),
    hdrs = glob([
        "websocketpp/*.hpp",
        "websocketpp/**/*.hpp",
        "websocketpp/**/**/*.hpp"
    ]),
    includes = glob([
        "websocketpp/**/*.hpp"
    ]),
    copts = ["-Iexternal/websocketpp/websocketpp"],
    linkopts = ["-pthread"],
    visibility = ["//visibility:public"],
)