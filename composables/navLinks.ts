import { NAVBAR_LINKS } from "@/utils/index"

export const navLinks = () => {
  return useState("navLinks", () => NAVBAR_LINKS)
}
