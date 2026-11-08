import { Button } from "@/app/_components/shared/ui/button";
import { DateTimePicker } from "@/app/_components/shared/ui/datetime";
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/app/_components/shared/ui/field";
import { Input } from "@/app/_components/shared/ui/input";
import { Task } from "@/app/_types/App";
import { Textarea } from "@/app/_components/shared/ui/textarea";
import { useTranslation } from "react-i18next";
import { Spinner } from "@/app/_components/shared/ui/spinner";
import { EDIT_TASK, GET_USER_TASKS } from "@/app/_graphql/typeDefs";
import { useMutation } from "@apollo/client/react";
import { Dispatch, SetStateAction, useState } from "react";

const EditTaskDialog = ({
  currentTask,
  setIsOpen,
}: {
  currentTask: Task;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const taskLocale = useTranslation("Tasks");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { __typename, ...taskWithoutTypename } = currentTask;

  const [editedTask, setEditedTask] = useState<Task>(taskWithoutTypename);

  const [editTask, { loading }] = useMutation<Task>(EDIT_TASK, {
    refetchQueries: [{ query: GET_USER_TASKS }],
  });

  const handleSubmitEditTask = () => {
    editTask({
      variables: {
        data: editedTask,
      },
    });

    setIsOpen(false);
  };

  const handleCancelTask = () => {
    setIsOpen(false);
  };

  return (
    <>
      <h1 className="text-[#393838] text-2xl font-bold">
        {taskLocale.t("editTask")}
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
            value={editedTask.name}
            onChange={(event) =>
              setEditedTask({ ...editedTask, name: event.target.value })
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
            value={editedTask.description}
            onChange={(event) =>
              setEditedTask({
                ...editedTask,
                description: event.target.value,
              })
            }
          />
        </Field>
        <Field>
          <FieldLabel>{taskLocale.t("dueDate")}</FieldLabel>
          <DateTimePicker
            date={new Date(editedTask.dueDate)}
            setDate={setEditedTask}
          />
        </Field>
        <Field>
          <FieldLabel>{taskLocale.t("priority")}</FieldLabel>
          <section className="flex gap-10 text-center items-center">
            <div
              className={`flex-1/3 rounded-[45px] py-2 px-6 font-semibold cursor-pointer active:scale-95 ${editedTask.priority == "Someday" ? "bg-[#343434] text-white" : "bg-[#F2F2F2]"}`}
              onClick={() =>
                setEditedTask({ ...editedTask, priority: "Someday" })
              }
            >
              {taskLocale.t("someday")}
            </div>
            <div
              className={`flex-1/3 rounded-[45px] py-2 px-6 font-semibold cursor-pointer active:scale-95 ${editedTask.priority == "Focus" ? "bg-[#343434] text-white" : "bg-[#F2F2F2]"}`}
              onClick={() =>
                setEditedTask({ ...editedTask, priority: "Focus" })
              }
            >
              {taskLocale.t("focus")}
            </div>
            <div
              className={`flex-1/3 rounded-[45px] py-2 px-6 font-semibold cursor-pointer active:scale-95 ${editedTask.priority == "Asap!" ? "bg-[#343434] text-white" : "bg-[#F2F2F2]"}`}
              onClick={() =>
                setEditedTask({ ...editedTask, priority: "Asap!" })
              }
            >
              {taskLocale.t("asap")}
            </div>
          </section>
        </Field>
        <section className="flex gap-10 mb-5">
          <Button
            className="flex-1/2 cursor-pointer active:scale-97 rounded-[45px] py-6 text-[16px]"
            onClick={handleSubmitEditTask}
          >
            {loading ? <Spinner className="size-6" /> : taskLocale.t("edit")}
          </Button>
          <Button
            className="flex-1/2 bg-[#EAEAEA] hover:bg-[#dedcdc] text-[#3E3E3E] cursor-pointer active:scale-97 rounded-[45px] py-6 text-[16px]"
            onClick={handleCancelTask}
          >
            {taskLocale.t("cancel")}
          </Button>
        </section>
      </FieldGroup>
    </>
  );
};

export default EditTaskDialog;
