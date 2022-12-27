"use client";

import { X, ArrowCircleUp, ArrowCircleDown, CurrencyDollar, MagnifyingGlass, IconProps as PhosphorIconProps } from "phosphor-react";

export const icons = {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollar,
  MagnifyingGlass,
  X
};

interface IconProps extends PhosphorIconProps {
  name: keyof typeof icons;
}

export function Icon({ name, ...rest }: IconProps) {
  const CurrentIcon = icons[name];

  return <CurrentIcon {...rest}/>;
}