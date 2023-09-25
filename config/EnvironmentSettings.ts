export type RecordVideoMode = "retain-on-failure" | "on" | "off";

export default class {
  public static get TakeScreenshotOnError(): boolean {
    return (process.env.TakeScreenshotOnError ?? "true") === "true";
  }
  public static get RecordVideoMode(): RecordVideoMode {
    switch (process.env.RecordVideoMode) {
      case "On":
        return "on";
      case "Off":
        return "off";
      case "RetainOnFailure":
      default:
        return "retain-on-failure";
    }
  }
  public static get MyInputMessage(): string {
    return process.env.MyInputMessage || "";
  }
}
