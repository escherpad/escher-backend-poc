cc_test(
    name = "hello-test",
    srcs = ["hello-test.cc"],
    copts = [
        "-Iexternal/gtest/include",
        "-Iexternal/websocketpp/websocketpp"
    ],
    deps = [
        "@gtest//:main",
        "@websocketpp//:main",
        "//lib:hello-greet"
    ],
)