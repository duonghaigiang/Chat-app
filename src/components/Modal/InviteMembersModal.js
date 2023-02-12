import debounce from "lodash";
import { Avatar, Form, Input, Modal, Select, Spin } from "antd";
import { collection, query, serverTimestamp, where } from "firebase/firestore";
import React, { useContext, useMemo, useState } from "react";
import { AppContext } from "../../AuthContext/AppProvider";
import { AuthContext } from "../../AuthContext/AuthProvider";
import { addDocoment } from "../../FireBase/service";
import { async } from "@firebase/util";
import { db } from "../../FireBase/config";

InviteMemberModal.propTypes = {};
function DebounceSelect({ fetchOption, debounceTimeout = 300, ...props }) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);
  const debounceFetcher = useMemo(() => {
    const loadingOption = (value) => {
      setOptions([]);
      setFetching(true);
      fetchOption(value).then((newOption) => {
        setOptions(newOption);
        setFetching(false);
      });
    };
    return debounce(loadingOption, debounceTimeout);
  }, [debounceTimeout, fetchOption]);
  return (
    <Select
      labelInvalue
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
    >
      {options.map((opt) => (
        <Select.Option>
          <Avatar size="small" src={opt.photoURL}>
            {opt.photoURL ? "" : opt.label.charAt(0).toUpperCase()}
          </Avatar>
          {`${opt.label}`}
        </Select.Option>
      ))}
    </Select>
  );
}
const fetchUserList = async (search) => {
  return query(
    collection(db, "users"),
    where("keyWord", "array-contains", search)
      .orderBy("displayName")
      .litmit(5)
      .get()
      .then((snapshot) => {
        return snapshot.docs.map((doc) => ({
          label: doc.data().displayName,
          value: doc.data().uid,
          photoURL: doc.data().photoURL,
        }));
      })
  );
};
function InviteMemberModal(props) {
  const [inviteModal, setInviteModal] = useState(false);
  const [value, setValue] = useState([]);

  //   const [addRoomvisible, setAddRoomvisible] = useState(false);
  const [form] = Form.useForm();
  const {
    user: { uid },
  } = useContext(AuthContext);
  const handelSubmit = () => {
    setInviteModal(false);

    form.resetFields();
  };

  const handelCancel = () => {
    setInviteModal(false);
    form.resetFields();
  };

  return (
    <div>
      <Modal title="mời thành viên" onOk={handelSubmit} onCancel={handelCancel}>
        <Form form={form}>
          <DebounceSelect
            mode="multiple"
            label="ten các thành viên"
            value={value}
            placeholder="nhap tên thành viên"
            fetchOption={fetchUserList}
            onChange={(newValue) => setValue(newValue)}
            style={{ width: "100%" }}
          ></DebounceSelect>
        </Form>
      </Modal>
    </div>
  );
}

export default InviteMemberModal;
