import { DateTimePicker } from "@/app/_components/shared/ui/datetime";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/app/_components/shared/ui/field";
import { Input } from "@/app/_components/shared/ui/input";
import { Textarea } from "@/app/_components/shared/ui/textarea";

const TaskDialog = () => {
  return (
    <>
      <h1 className="text-[#393838] text-2xl font-bold">Add Task</h1>
      <FieldGroup className="mt-5">
        <Field>
          <FieldLabel htmlFor="fieldgroup-name">Task name</FieldLabel>
          <Input
            className="bg-[#F2F2F2] border-0"
            id="fieldgroup-name"
            placeholder="What needs to be done"
          />
        </Field>
        <Field>
          <FieldLabel htmlFor="fieldgroup-description">Description</FieldLabel>
          <Textarea
            className="bg-[#F2F2F2] border-0"
            id="fieldgroup-description"
            placeholder="Add further details or context..."
          />
        </Field>
        <Field>
          <FieldLabel>Due date</FieldLabel>
          <DateTimePicker />
        </Field>
        <Field>
          <FieldLabel>Priority</FieldLabel>
          <section className="flex gap-10 text-center items-center">
            <div className="flex-1/3 bg-[#F2F2F2] rounded-[45px] py-2 px-6 font-semibold cursor-pointer">
              Someday
            </div>
            <div className="flex-1/3 bg-[#F2F2F2] rounded-[45px] py-2 px-6 font-semibold cursor-pointer">
              Focus
            </div>
            <div className="flex-1/3 bg-[#F2F2F2] rounded-[45px] py-2 px-6 font-semibold cursor-pointer">
              ASAP!
            </div>
          </section>
        </Field>
      </FieldGroup>
    </>
  );
};

export default TaskDialog;
