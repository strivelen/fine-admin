import React, { useState, useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import * as AllIcons from '@ant-design/icons';

type PickProps<T> = T extends (props: infer P1) => any
  ? P1
  : T extends React.ComponentClass<infer P2>
  ? P2
  : unknown;

type AllKeys = keyof typeof AllIcons;
//  获取大写开头的导出们, 认为是组件
type PickCapitalizeAsComp<K extends AllKeys> = K extends Capitalize<K>
  ? K
  : never;
// ------------------------------------------------^ typescript 4.1+ --------
type IconNames = PickCapitalizeAsComp<AllKeys>;
// 没有 4.1 的可以手动排除 小写开头的方法们
// type IconNames = Exclude<
//   AllKeys,
//   "createFromIconfontCN" | "default" | "getTwoToneColor" | "setTwoToneColor"
// >;

export type PickIconPropsOf<K extends IconNames> = PickProps<
  typeof AllIcons[K]
>;

const Icon = <T extends IconNames, P extends Object = PickIconPropsOf<T>>({
  name,
  ...props
}: { name: T } & P) => {
  const Comp = AllIcons[name] as React.ClassType<any, any, any>;
  return <Comp {...props} />;
};

export default Icon;
