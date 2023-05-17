import dayjs from "dayjs";

export default <E extends Record<string, any>>(
  list: E[],
  sortTimestampBy: keyof E
) => {
  const res = [[{ ...list[0] }]];

  if (typeof list[0][sortTimestampBy] !== "number") {
    throw new Error("sorting field must me number");
  }

  for (let i = 0; i < list.length - 1; i++) {
    const lastList = res[res.length - 1];
    const lastListItem = lastList[lastList.length - 1];

    const nextItem = list[i + 1];
    const datePrev = dayjs(lastListItem[sortTimestampBy]).get("date");
    const dateNext = dayjs(nextItem[sortTimestampBy]).get("date");
    if (datePrev === dateNext) {
      lastList.push(nextItem);
    } else {
      res.push([nextItem]);
    }
  }

  return res;
};
