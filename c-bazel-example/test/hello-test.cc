#include "gtest/gtest.h"
#include "lib/hello-greet.h"

#include "libwebsockets.h"

TEST(FactorialTest, Negative) {
  EXPECT_EQ(get_greet("Bazel"), "Hello Bazel");
}