import { Menu, MenuProps } from 'antd';
import { CSSProperties } from 'react';
type MenuItem = Required<MenuProps>['items'][number];
const Menut = (props: { itemsList: MenuItem[], mode: "vertical" | "horizontal" | "inline", style?: CSSProperties, defaultSelectedKeys?: string[] }) => {
    const { mode, style, defaultSelectedKeys, itemsList } = props
    console.log(itemsList);

    return (
        <>
            <Menu mode={mode} items={itemsList} defaultSelectedKeys={defaultSelectedKeys} style={style} />
        </>
    )
}
export default Menut