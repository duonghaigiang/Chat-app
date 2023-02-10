import { Form, Input, Modal } from "antd";
import { serverTimestamp } from "firebase/firestore";
import React, { useContext } from "react";
import { AppContext } from "../../AuthContext/AppProvider";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { addDocoment } from "../../FireBase/service";

AddRoomModal.propTypes = {};

function AddRoomModal(props) {
  const { addRoomvisible, setAddRoomvisible } = useContext(AppContext);
  //   const [addRoomvisible, setAddRoomvisible] = useState(false);
  const [form] = Form.useForm();
  const {
    user: { uid },
  } = useContext(AuthContext);
  const handelSubmit = () => {
    setAddRoomvisible(false);
    console.log("Suscess", { formDate: form.getFieldValue() });
    addDocoment("rooms", {
      ...form.getFieldValue(),
      members: [uid],
    });
    form.resetFields();
  };

  const handelCancel = () => {
    setAddRoomvisible(false);
    form.resetFields();
  };

  return (
    <div>
      <Modal
        title="tạo phòng"
        onOk={handelSubmit}
        onCancel={handelCancel}
        open={addRoomvisible}
      >
        <Form form={form}>
          <Form.Item lable="ten phong " name="name">
            <Input placeholder="Nhập tên phòng"></Input>
          </Form.Item>
          <Form.Item lable="Mô tả " name="description">
            <Input.TextArea placeholder="Nhập mô tả"></Input.TextArea>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default AddRoomModal;
