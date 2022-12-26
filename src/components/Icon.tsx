"use client";

import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar, IconProps as PhosphorIconProps } from "phosphor-react";

export const icons = {
  ArrowCircleUp,
  ArrowCircleDown,
  CurrencyDollar
};

interface IconProps extends PhosphorIconProps {
  name: keyof typeof icons;
}

export function Icon({ name, ...rest }: IconProps) {
  const CurrentIcon = icons[name];

  return <CurrentIcon {...rest}/>;
}