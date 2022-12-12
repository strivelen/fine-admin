import { theme, Space } from 'antd';
import styled from 'styled-components';
import type { GlobalToken } from 'antd/es/theme/interface';

const { useToken } = theme;

export interface TagSelectProps {
  disabled?: boolean;
  items?: Array<TagSelectItemProps>;
  value?: TagSelectItemProps['value'];
  onChange?: TagSelectItemClick;
}

export default function TagSelect({
  items = [],
  value,
  onChange,
  disabled
}: TagSelectProps) {
  return (
    <Space size="middle" wrap>
      {items.map((item, index) => {
        return (
          <TagSelectItem
            disabled={disabled}
            key={index}
            isSelected={value === item.value}
            label={item.label}
            value={item.value}
            onClick={!disabled ? onChange : undefined}
          />
        );
      })}
    </Space>
  );
}

TagSelect.TagMultiSelect = TagMultiSelect;

TagSelect.TagSelectItem = TagSelectItem;

export interface TagMultiSelectProps
  extends Omit<TagSelectProps, 'value' | 'onChange'> {
  value?: Array<TagSelectItemProps['value']>;
  onChange?: (
    v: TagMultiSelectProps['value'],
    options: Pick<TagSelectItemProps, 'label' | 'value'>[]
  ) => void;
}

export function TagMultiSelect({
  disabled,
  items = [],
  value = [],
  onChange
}: TagMultiSelectProps) {
  const onClick: TagSelectItemClick = (v) => {
    if (disabled) return;
    let values = value;
    if (value.includes(v)) {
      values = value.filter((item) => item !== v);
    } else {
      values = [...value, v];
    }
    const options = items.filter((item) => values.includes(item.value));
    onChange?.(values, options);
  };
  return (
    <Space size="middle" wrap>
      {items.map((item, index) => {
        return (
          <TagSelectItem
            key={index}
            disabled={disabled}
            isSelected={value.includes(item.value)}
            label={item.label}
            value={item.value}
            onClick={onClick}
          />
        );
      })}
    </Space>
  );
}

export interface TagSelectItemProps {
  disabled?: boolean;
  label: string;
  value: string;
  isSelected?: ItemBoxDefaultProps['isSelected'];
  onClick?: TagSelectItemClick;
}

type TagSelectItemClick = (
  v: TagSelectItemProps['value'],
  option: Omit<TagSelectItemProps, 'onClick' & 'isSelected'>
) => void;

function TagSelectItem({
  disabled,
  label,
  value,
  isSelected = false,
  onClick
}: TagSelectItemProps) {
  const { token } = useToken();
  return (
    <ItemBox
      disabled={disabled}
      isSelected={isSelected}
      themeToken={token}
      onClick={() => {
        if (disabled) return;
        onClick?.(value, { label, value });
      }}
    >
      {label}
    </ItemBox>
  );
}

interface ItemBoxDefaultProps {
  disabled?: boolean;
  isSelected: boolean;
  themeToken: GlobalToken;
}

function computeTextColor({
  isSelected,
  disabled,
  themeToken
}: ItemBoxDefaultProps) {
  if (isSelected) {
    return themeToken.colorPrimary;
  }
  if (disabled) {
    return themeToken.colorTextDisabled;
  }
  return themeToken.colorTextBase;
}

const ItemBox = styled.span`
  user-select: none;
  padding: 2px 6px;
  line-height: ${(props) => props.themeToken.lineHeight};
  transition: color ${(props) => props.themeToken.motionDurationSlow};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${(props: ItemBoxDefaultProps) =>
    computeTextColor({
      isSelected: props.isSelected,
      disabled: props.disabled,
      themeToken: props.themeToken
    })};
  &:hover {
    color: ${(props: ItemBoxDefaultProps) => {
      if (props.disabled) return;
      return props.themeToken.colorPrimaryHover;
    }};
  }
`;
