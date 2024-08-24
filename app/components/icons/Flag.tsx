import { ComponentPropsWithoutRef } from "react";

export const Flag = (
  props: ComponentPropsWithoutRef<"svg"> & { size: number }
) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 90000 60000"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <path fill="#c1272d" d="m0 0h90000v60000H0z" />
      <path
        fill="none"
        stroke="#006233"
        strokeWidth="1426"
        d="m45000 17308 7460 22960-19531-14190h24142L37540 40268z"
      />
    </svg>
  );
};
