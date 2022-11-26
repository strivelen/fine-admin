/* eslint-disable no-undef */
/// <reference types="vite/client" />

// structural => nominal
class TaggedProtector<Tag extends string> {
  protected __tag: Tag;
}

type Nominal<T, Tag extends string> = T & TaggedProtector<Tag>;

// 类型提示显示展开后的信息
type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

type ExpandRecursively<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: ExpandRecursively<O[K]> }
    : never
  : T;

// 将对象的key作为联合类型
// keyof typeof object;

// 将对象的value作为联合类型
// typeof obj[keyof typeof obj]

/**
 * 取出组件的props
 */
type ComponentProps<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? JSX.LibraryManagedAttributes<T, P>
  : never;

interface ActionComProps {
  onAction: () => void;
}

// CRUDTemplate组件在封装可复用Action时必需接受的props
interface ActionProps<ModalProps> {
  option: Omit<ModalProps, 'visible' | 'onOk' | 'onCancel'>;
  actionCom: (p: ActionComProps) => ReactNode;
  [propName: string]: any;
}

type Api = string | { url: string; params?: object };
