#include "gtest/gtest.h"
#include "lib/hello-greet.h"

#include "websocketpp/config/asio_no_tls.hpp"
#include "websocketpp/server.hpp"

TEST(FactorialTest, Negative) {
  EXPECT_EQ(get_greet("Bazel"), "Hello Bazel");
}