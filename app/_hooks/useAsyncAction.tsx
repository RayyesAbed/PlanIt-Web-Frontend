import { useState, useCallback } from "react";

type AsyncAction<T> = () => Promise<T>;
