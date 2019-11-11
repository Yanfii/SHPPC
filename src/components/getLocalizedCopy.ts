import copy from "copy";
import copy_zh from "copy_zh"

export function getLocalizedCopy(lan: any) {
  if (lan === "EN") {
    return copy;
  } else {
    return copy_zh;
  }
}
