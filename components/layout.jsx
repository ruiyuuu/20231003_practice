import React, { useState } from "react";
import { SkinFilled, StarFilled } from "@ant-design/icons";
import { Menu } from "antd";
import styles from './layout.module.scss'
import Link from 'next/link'

const items = [
  {
    label: <Link href="/">Age Caculator(only year)</Link>,
    key: "01",
    icon: <StarFilled />,
    disabled: false,
  },
  {
    label: <Link href="/index_datepicker">Age Caculator</Link>,
    key: "02",
    icon: <SkinFilled />,
    disabled: false,
  },
];

export default function layout({children}) {

  // const [current, setCurrent] = useState("");
  // const onClick = (e) => {
  // //   console.log("click ", e);
  //   setCurrent(e.key);
  // };

  return (
    <>
      <Menu
        // onClick={onClick}
        // selectedKeys={[current]}
        mode="horizontal"
        items={items}
        className={styles.layout}
      />

      <main>{children}</main>
    </>
  );
}
