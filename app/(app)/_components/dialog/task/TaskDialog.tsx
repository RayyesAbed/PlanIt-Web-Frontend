import { Button } from "@/app/_components/shared/ui/button";
import { DateTimePicker } from "@/app/_components/shared/ui/datetime";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/app/_components/shared/ui/field";
import { Input } from "@/app/_components/shared/ui/input";
import { Spinner } from "@/app/_components/shared/ui/spinner";
import { Textarea } from "@/app/_components/shared/ui/textarea";
import { ADD_TASK } from "@/app/_graphql/typeDefs";
import { Task } from "@/app/_types/App";
import { useMutation } from "@apollo/client/react";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "react-i18next";

const TaskDialog = ({
  currentTask,
  setCurrentTask,
}: {
  currentTask: Task;
  setCurrentTask: Dispatch<SetStateAction<Task>>;
}) => {
  const taskLocale = useTranslation("Tasks");

  const [addTask, { loading }] = useMutation<Task>(ADD_TASK);

  const handleAddTask = (event: React.MouseEvent) => {
    event.preventDefault();

    addTask({
      variables: {
        data: currentTask,
      },
    });

    setCurrentTask({
      name: "",
      description: "",
      dueDate: new Date(),
      priority: "someday",
    });
  };

  return (
    <>
      <h1 className="text-[#393838] text-2xl font-bold">
        {taskLocale.t("addTask")}
      </h1>
      <FieldGroup className="mt-5">
        <Field>
          <FieldLabel htmlFor="fieldgroup-name">
            {taskLocale.t("taskName")}
          </FieldLabel>
          <Input
            className="bg-[#F2F2F2] border-0"
            id="fieldgroup-name"
            placeholder={taskLocale.t("taskNamePlaceholder")}
            value={currentTask.name}
            onChange={(event) =>
              setCurrentTask({ ...currentTask, name: event.target.value })
            }
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="fieldgroup-description">
            {taskLocale.t("description")}
          </FieldLabel>
          <Textarea
            className="bg-[#F2F2F2] border-0"
            id="fieldgroup-description"
            placeholder={taskLocale.t("descriptionPlaceholder")}
            value={currentTask.description}
            onChange={(event) =>
              setCurrentTask({
                ...currentTask,
                description: event.target.value,
              })
            }
          />
        </Field>
        <Field>
          <FieldLabel>{taskLocale.t("dueDate")}</FieldLabel>
          <DateTimePicker date={currentTask.dueDate} setDate={setCurrentTask} />
        </Field>
        <Field>
          <FieldLabel>{taskLocale.t("priority")}</FieldLabel>
          <section className="flex gap-10 text-center items-center">
            <div
              className="flex-1/3 bg-[#F2F2F2] rounded-[45px] py-2 px-6 font-semibold cursor-pointer"
              onClick={() =>
                setCurrentTask({ ...currentTask, priority: "someday" })
              }
            >
              {taskLocale.t("someday")}
            </div>
            <div
              className="flex-1/3 bg-[#F2F2F2] rounded-[45px] py-2 px-6 font-semibold cursor-pointer"
              onClick={() =>
                setCurrentTask({ ...currentTask, priority: "focus" })
              }
            >
              {taskLocale.t("focus")}
            </div>
            <div
              className="flex-1/3 bg-[#F2F2F2] rounded-[45px] py-2 px-6 font-semibold cursor-pointer"
              onClick={() =>
                setCurrentTask({ ...currentTask, priority: "asap" })
              }
            >
              {taskLocale.t("asap")}
            </div>
          </section>
        </Field>
        <section className="flex gap-10 mb-5">
          <Button
            className="flex-1/2 cursor-pointer active:scale-97 rounded-[45px] py-6 text-[16px]"
            onClick={handleAddTask}
          >
            {loading ? <Spinner className="size-6" /> : taskLocale.t("add")}
          </Button>
          <Button className="flex-1/2 bg-[#EAEAEA] hover:bg-[#dedcdc] text-[#3E3E3E] cursor-pointer active:scale-97 rounded-[45px] py-6 text-[16px]">
            {taskLocale.t("cancel")}
          </Button>
        </section>
      </FieldGroup>
    </>
  );
};

export default TaskDialog;
