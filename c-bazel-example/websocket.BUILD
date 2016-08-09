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
    copts = ["-Iexternal/websocketpp/websocketpp"],
    visibility = ["//visibility:public"],
)