import { ComponentPropsWithoutRef } from "react";

export const FourtytwoIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size: number }
) => {
  return (
    <svg
      version="1.1"
      viewBox="0 -200 960 960"
      width={props.size}
      height={props.size}
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <polygon
        id="polygon5"
        points="32,412.6 362.1,412.6 362.1,578 526.8,578 526.8,279.1 197.3,279.1 526.8,-51.1 362.1,-51.1 
	32,279.1 "
        fill="currentColor"
      />
      <polygon
        id="polygon7"
        points="597.9,114.2 762.7,-51.1 597.9,-51.1 "
        fill="currentColor"
      />
      <polygon
        id="polygon9"
        points="762.7,114.2 597.9,279.1 597.9,443.9 762.7,443.9 762.7,279.1 928,114.2 928,-51.1 762.7,-51.1 "
        fill="currentColor"
      />
      <polygon
        id="polygon11"
        points="928,279.1 762.7,443.9 928,443.9 "
        fill="currentColor"
      />
    </svg>
  );
};
