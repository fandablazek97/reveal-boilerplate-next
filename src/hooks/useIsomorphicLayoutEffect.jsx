// How to use: https://github.com/Andarist/use-isomorphic-layout-effect

import { useEffect, useLayoutEffect } from "react";

export default typeof document !== "undefined" ? useLayoutEffect : useEffect;
