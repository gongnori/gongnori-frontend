import React, { useState } from "react";

const useDateController = () => {
  const initDate = new Date();
  const [month, setMonth] = useState(initDate.getMonth() + 1);
  const [date, setDate] = useState(initDate.getDate());
  const [IsoTime, setIsoTime] = useState(initDate.toISOString());

  const changeDate = (option) => {
    const diff = option === "forward" ? 1 : -1;

    const temp = new Date(IsoTime);
    temp.setDate(temp.getDate() + diff);

    setIsoTime(temp.toISOString());
    setMonth(new Date(temp).getMonth() + 1);
    setDate(new Date(temp).getDate());
  };

  return [month, date, changeDate];
};

export default useDateController;
