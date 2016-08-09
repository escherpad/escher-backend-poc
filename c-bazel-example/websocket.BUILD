cc_library(
    name = "main",
    visibility = ["//visibility:public"],
    srcs = glob(
        ["**/*.c"],
        exclude = ["lib/libwebsockets.c"]
    ),
    hdrs = glob(
        ["**/*.h"],
        exclude = ["lib/libwebsockets.h"]
    ),
    copts = [
        "-Iexternal/libwebsockets/lib"
    ]
)