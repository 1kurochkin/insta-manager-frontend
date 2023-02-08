import { ArrowRightOutlined } from "@ant-design/icons";
import {
    Divider,
    Form,
    List,
    Segmented,
    Spin,
    Typography,
    notification
} from "antd";
import { useForm } from "antd/es/form/Form";
import Search from "antd/es/input/Search";
import { Content } from "antd/es/layout/layout";
import {
    useLazyGetUnfollowedQuery
} from "./store/reducers/api/api.reducer";
import "./styles/app.css";

function App() {
  const [getUnfollowed, { data, isFetching }] =
    useLazyGetUnfollowedQuery();

  const [searchForm] = useForm();
  const { unfollowed_list, user_info } = data || {};
  const { unfollowed_count, followings_count, followers_count } =
    user_info || {};

  const onSearchHandler = async () => {
      try {
        const {username} = await searchForm.validateFields();
        getUnfollowed(username);
      } catch {
        notification.error({message: 'Please put the username please!'})
      }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        background: "lightskyblue",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "80%",
        }}
      >
        <div
          style={{
            padding: 20,
            background: "white",
            textAlign: "center",
            height: "unset",
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Typography.Title>Unfollowed</Typography.Title>
          <Typography.Paragraph style={{ fontSize: 18 }}>
            Here is you can get list of people that you are following to, but
            they dont follow back
          </Typography.Paragraph>
          <Form form={searchForm}>
            <Form.Item
              name={"username"}
              rules={[{ required: true, message: "" }]}
            >
              <Search
                addonBefore={
                  <Typography.Title level={4}>
                    https://www.instagram.com/
                  </Typography.Title>
                }
                placeholder="Put here an username"
                allowClear
                loading={isFetching}
                enterButton="Get Unfollowed"
                disabled={false}
                size="large"
                onSearch={onSearchHandler}
                style={{ width: "70%", outline: "none", borderRadius: 10 }}
              />
            </Form.Item>
          </Form>
        </div>
        <Content style={{ height: "100%" }}>
          {isFetching ? (
            <Spin style={{ marginTop: 50 }} tip="Loading" size="large">
              <div />
            </Spin>
          ) : (
            <>
              <Divider />
              <Segmented
                disabled={true}
                style={{ background: "white", cursor: "unset", color: "black" }}
                block
                size="large"
                options={[
                  `Followers: ${followers_count || "0"}`,
                  `Followings: ${followings_count || "0"}`,
                  `Unfollowed: ${unfollowed_count || "0"}`,
                ]}
              />
              <Divider />
              <List
                dataSource={unfollowed_list}
                renderItem={(item) => (
                  <List.Item
                    style={{
                      marginBottom: 10,
                      background: "white",
                      borderRadius: 10,
                      cursor: "pointer",
                      
                    }}
                    key={item.username}
                  >
                    <List.Item.Meta style={{color: 'white'}} description={`Username: ${item.username} | Full name: ${item.full_name}`}/>
                    <ArrowRightOutlined />
                  </List.Item>
                )}
              />
            </>
          )}
        </Content>
      </div>
    </div>
  );
}

export default App;
