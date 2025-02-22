import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/SidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider>
      <div
        style={{
          color: "white",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH-UniV.</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItemsGenerator(adminPaths, "admin")}
      />
    </Sider>
  );
};

export default Sidebar;
