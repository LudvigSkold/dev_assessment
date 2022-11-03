import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Form } from "../components/submitForm";
import { TaskList } from "../components/taskList";

export default function Home() {
  return (
    <div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <Form></Form>
        </div>
        <div className="col-3"></div>
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 text-center">
          <TaskList></TaskList>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}
