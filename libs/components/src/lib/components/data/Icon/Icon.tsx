import { ReactElement } from "react";
import { WithDataTestId } from "../../../types";

export const ICON_NAMES = ['search', 'home', 'menu', 'close', 'delete'] as const;
export type IconNameTuple = typeof ICON_NAMES;
export type IconName = IconNameTuple[number];

export type IconProps = WithDataTestId & {
  children: IconName
}

export function Icon({
  children,
  'data-testid': dataTestId,
}: IconProps): ReactElement | null {
  return (
    <span data-testid={dataTestId} className="material-icons">
      {children}
    </span>
  )
}
