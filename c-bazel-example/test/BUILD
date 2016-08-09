cc_test(
    name = "hello-test",
    srcs = ["hello-test.cc"],
    copts = [
        "-Iexternal/gtest/include",
        "-Iexternal/libwebsockets/lib"
    ],
    deps = [
        "@gtest//:main",
        "@libwebsockets//:main",
        "//lib:hello-greet"
    ],
)