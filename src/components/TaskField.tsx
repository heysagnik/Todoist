import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
} from "@chakra-ui/react";
import { TargetAndTransition } from "framer-motion/types/types";
import React, { useState } from "react";
import { Task } from "../types/Task";
import { MotionFlex } from "./Motions";

interface TaskFieldProps {
  TaskObj: Task;
  Tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  itemsCompleted: number;
  setItemsCompleted: React.Dispatch<React.SetStateAction<number>>;
  timesEdited: number;
  setTimesEdited: React.Dispatch<React.SetStateAction<number>>;
}

export const TaskField: React.FC<TaskFieldProps> = ({
  Tasks,
  setTasks,
  TaskObj,
  itemsCompleted,
  setItemsCompleted,
  timesEdited,
  setTimesEdited,
}) => {
  const EDITING_SCALE = 1.05;
  const UNSELECTED_OPACITY = 0.8;

  const initialFieldAnimate: TargetAndTransition = {
    scale: [1, 1.025, 1],
    opacity: [0, 0.1, 0.2, 0.3, 0.4, UNSELECTED_OPACITY],
    transition: { duration: 0.2 },
  };

  const deleteFieldAnimate: TargetAndTransition = {
    scale: [1, 0.95],
    opacity: [1, UNSELECTED_OPACITY, 0.2, 0.1],
    transition: { duration: 0.25 },
  };

  const [fieldAnimate, setFieldAnimate] = useState(initialFieldAnimate);
  const [fieldEditing, setFieldEditing] = useState<boolean>(false);
  // const [previewProps, setpreviewProps] = useState({});
  const completedProps = {
    textDecoration: "line-through",
    opacity: 0.5,
  };

  const editTaskHandler = (e: any) => {
    let newTasks: Task[] = [];
    Tasks.forEach((task: Task) => {
      if (task.id === TaskObj.id) {
        newTasks.push({ ...task, name: e });
        return;
      }
      newTasks.push(task);
    });
    setTasks(newTasks);
    setFieldAnimate({ ...fieldAnimate, scale: 1, opacity: UNSELECTED_OPACITY });
    setFieldEditing(false);
    setTimesEdited(timesEdited + 1);
  };

  return (
    <MotionFlex
      animate={fieldAnimate}
      opacity="0"
      scale="1"
      onHoverStart={() => {
        if (fieldAnimate.opacity !== 1 && !fieldEditing)
          setFieldAnimate({ ...fieldAnimate, opacity: 1 });
      }}
      onHoverEnd={() => {
        if (fieldAnimate.opacity !== UNSELECTED_OPACITY && !fieldEditing)
          setFieldAnimate({ ...fieldAnimate, opacity: UNSELECTED_OPACITY });
      }}
    >
      <Editable
        w="100%"
        defaultValue={TaskObj.name}
        onEdit={() => {
          if (!fieldEditing) {
            setFieldAnimate({ ...fieldAnimate, scale: EDITING_SCALE });
            setFieldEditing(true);
          }
        }}
        onSubmit={editTaskHandler}
      >
        <EditablePreview
          {...(TaskObj.isCompleted ? completedProps : {})}
          wordBreak="break-all"
        />
        <EditableInput />
      </Editable>
      <IconButton
        aria-label="done"
        icon={<CheckIcon />}
        size="sm"
        variant="ghost"
        onClick={() => {
          setItemsCompleted(
            TaskObj.isCompleted ? itemsCompleted - 1 : itemsCompleted + 1
          );
          setTasks(
            Tasks.map((task) =>
              task.id !== TaskObj.id
                ? task
                : { ...task, isCompleted: !TaskObj.isCompleted }
            )
          );
          // if (TaskObj.isCompleted) setpreviewProps(completedProps);
          // else setpreviewProps({});
        }}
      />
      <IconButton
        aria-label="close"
        icon={<CloseIcon />}
        size="sm"
        variant="ghost"
        onClick={() => {
          setFieldAnimate(deleteFieldAnimate);
          setTimeout(() => {
            setTasks(Tasks.filter((task) => task.id !== TaskObj.id));
          }, 250);
        }}
      />
    </MotionFlex>
  );
};
