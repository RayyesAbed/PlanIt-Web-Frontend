import { DateTimePicker } from "@/app/_components/shared/ui/datetime";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/app/_components/shared/ui/field";
import { Input } from "@/app/_components/shared/ui/input";
import { Textarea } from "@/app/_components/shared/ui/textarea";
import { useTranslation } from "react-i18next";

const TaskDialog = () => {
  const taskLocale = useTranslation("Tasks");

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
          />
        </Field>
        <Field>
          <FieldLabel>{taskLocale.t("dueDate")}</FieldLabel>
          <DateTimePicker />
        </Field>
        <Field>
          <FieldLabel>{taskLocale.t("priority")}</FieldLabel>
          <section className="flex gap-10 text-center items-center">
            <div className="flex-1/3 bg-[#F2F2F2] rounded-[45px] py-2 px-6 font-semibold cursor-pointer">
              {taskLocale.t("someday")}
            </div>
            <div className="flex-1/3 bg-[#F2F2F2] rounded-[45px] py-2 px-6 font-semibold cursor-pointer">
              {taskLocale.t("focus")}
            </div>
            <div className="flex-1/3 bg-[#F2F2F2] rounded-[45px] py-2 px-6 font-semibold cursor-pointer">
              {taskLocale.t("asap")}
            </div>
          </section>
        </Field>
      </FieldGroup>
    </>
  );
};

export default TaskDialog;
