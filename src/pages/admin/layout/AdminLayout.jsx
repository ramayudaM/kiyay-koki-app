import SideBar from "../../../components/admin/SideBar";

const AdminLayout = ({ content }) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        width: "100vw",
      }}
    >
      <SideBar />
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default AdminLayout;
