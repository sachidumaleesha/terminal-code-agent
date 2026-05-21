import { TextAttributes } from "@opentui/core";

export const Header = () => {
  return (
    <box justifyContent="center" alignItems="center">
      <box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={0.5}
      >
        <ascii-font font="tiny" text="NIGHT" color="gray" />
        <ascii-font font="tiny" text="CODE" />
      </box>
    </box>
  );
};
