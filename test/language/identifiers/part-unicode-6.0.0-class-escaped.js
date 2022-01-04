// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
esid: prod-PrivateIdentifier
description: |
  Test that Unicode v6.0.0 ID_Continue characters are accepted as
  identifier part characters in escaped form, i.e.
  - \uXXXX or \u{XXXX} for BMP symbols
  - \u{XXXXXX} for astral symbols
  in private class fields.
info: |
  Generated by https://github.com/mathiasbynens/caniunicode
features: [class, class-fields-private]
---*/

class _ {
  #_\u065F\u0859\u085A\u085B\u093A\u093B\u094F\u0956\u0957\u0F8D\u0F8E\u0F8F\u135D\u135E\u1BE6\u1BE7\u1BE8\u1BE9\u1BEA\u1BEB\u1BEC\u1BED\u1BEE\u1BEF\u1BF0\u1BF1\u1BF2\u1BF3\u1DFC\u2D7F\u{11000}\u{11001}\u{11002}\u{11038}\u{11039}\u{1103A}\u{1103B}\u{1103C}\u{1103D}\u{1103E}\u{1103F}\u{11040}\u{11041}\u{11042}\u{11043}\u{11044}\u{11045}\u{11046}\u{11066}\u{11067}\u{11068}\u{11069}\u{1106A}\u{1106B}\u{1106C}\u{1106D}\u{1106E}\u{1106F};
};
