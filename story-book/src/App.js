import "antd/dist/antd.css";
import "./stories/Button";
import { Form, Input, Button } from "antd";

function App() {
  const onFinish = (e) => {
    console.log(e);
  };
  return (
    <div className="App">
      <header className="App-header"></header>
      <Form onFinish={onFinish}>
        <Form.Item label="User Name" name="username">
          <Input placeholder="User Name" required></Input>
        </Form.Item>
        <Form.Item className="label" label="Password" name="password">
          <Input placeholder="Password" required></Input>
        </Form.Item>

        <Form.Item>
          <Button
            className="bt01"
            block
            type="primary"
            htmlType="submit"
            color="pink"
          >
            Log In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
