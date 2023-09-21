"use client";

import React, { useState } from "react";
import Accordion from "@/components/common/InfoBlock/Accordion";
import CheckboxGroup from "@/components/common/inputs/CheckboxGroup";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Database } from "@/types/supabase";
import Button from "@/components/common/inputs/Button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface DataType {
  data: Database["public"]["Tables"]["working_stage"]["Row"][];
}

const ProjectSheetBlock = ({ data }: DataType) => {
  const router = useRouter();

  const [checked, setChecked] = useState<boolean>();
  const [newTask, setNewTask] = useState("");

  const supabaseClient = useSupabaseClient();


  //! Add new task
  const handleOnSubmit = async (e: any) => {
    e.preventDefault();

    const { error: insertError } = await supabaseClient
      .from("working_stage")
      .insert({
        project_id: data[0].project_id,
        sheet: data[0].sheet,
        task_name: newTask,
      });

    if (!insertError) {
      toast.success("Задача добавлена");
      setNewTask("");
      router.refresh();
    } else {
      toast.error(insertError.message);
    }
  };

  //! Handle checkbox
  const handleCheckboxChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    taskId: number
  ) => {
    setChecked(!checked);

    const { error: updateError } = await supabaseClient
      .from("working_stage")
      .update({ isDone: checked })
      .eq("id", taskId)
      .select();

    if (updateError) {
      toast.error(updateError.message);
    } else {
      router.refresh();
    }
  };

  return (
    <Accordion
      title={data[0].sheet}
      amount={`${data.filter((i) => i.isDone === true).length} / ${
        data.length
      }`}
    >
      <>
        {data.map(({ task_name, isDone, id }, index) => (
          <CheckboxGroup
            taskId={id}
            name={task_name}
            key={id}
            checked={isDone}
            onChange={(e) => handleCheckboxChange(e, id)}
          >
            {task_name}
          </CheckboxGroup>
        ))}
        <form
          className="flex mt-2 space-x-2 border border-primary-border-dark rounded-lg"
          onSubmit={handleOnSubmit}
        >
          <input
            className="m-0 bg-transparent placeholder:text-primary-border-dark"
            placeholder="Дополнительное задание ..."
            type="text"
            name="addTask"
            id="addTask"
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
          />
          <Button size="small" type="submit" mode="ghost">
            Создать
          </Button>
        </form>
      </>
    </Accordion>
  );
};

export default ProjectSheetBlock;
