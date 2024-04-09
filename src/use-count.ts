import { useState } from "react";

export default function useCount() {
  return useState(0);
}
