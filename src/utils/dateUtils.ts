import dayjs from "dayjs";
import { DateFormat } from "../models/models";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const dateFormatMap: Record<DateFormat, string> = {
  date: "YYYY-MM-DD",
  datetime: "YYYY-MM-DD HH:MM",
};

export const formatDate = (value: number, format: DateFormat = "datetime") =>
  dayjs.unix(value).format(dateFormatMap[format]);

export const timeToNow = (value: number) => dayjs.unix(value).toNow(true);

export const timeFromNow = (value: number) => dayjs.unix(value).fromNow();
